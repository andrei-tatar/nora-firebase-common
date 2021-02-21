import {
    isBrightness, isColorSetting, isHumiditySetting, isLockUnlock, isOnOff, isOpenClose, isScene,
    isTemperatureControl, isTemperatureSetting, isVolumeDevice
} from './checks';
import { BrightnessDevice, Device, LockUnlockDevice, OnOffDevice, SceneDevice, TemperatureSettingDevice } from './device';

export interface Changes {
    updateState?: { [key: string]: any };
    updateNoraSpecific?: { [key: string]: any };
}

export interface ExecuteCommandParams {
    command: string;
    params: any;
    device: Device;
}

export function executeCommand({ command, params, device }: ExecuteCommandParams): Changes | null {
    switch (command) {
        case 'action.devices.commands.BrightnessAbsolute':
            if (isBrightness(device)) {
                const updates: Partial<BrightnessDevice['state'] & OnOffDevice['state']> = {};

                updates.brightness = params.brightness;
                if (isOnOff(device) && device.noraSpecific?.turnOnWhenBrightnessChanges) {
                    updates.on = true;
                }
                return {
                    updateState: updates,
                };
            }
            break;

        case 'action.devices.commands.OnOff':
        case 'action.devices.commands.ThermostatTemperatureSetpoint':
        case 'action.devices.commands.ThermostatTemperatureSetRange':
            const newState = { ...params };
            return {
                updateState: newState,
            };

        case 'action.devices.commands.ThermostatSetMode':
            if (isTemperatureSetting(device)) {
                if (params.thermostatMode === 'on') {
                    if (device.noraSpecific?.previousMode) {
                        return {
                            updateState: {
                                thermostatMode: device.noraSpecific?.previousMode,
                            },
                        };
                    }
                } else {
                    return {
                        updateState: { ...params },
                    };
                }
            }
            break;

        case 'action.devices.commands.TemperatureRelative':
            if (isTemperatureSetting(device)) {
                const { thermostatTemperatureRelativeDegree, thermostatTemperatureRelativeWeight } = params;
                const change = thermostatTemperatureRelativeDegree || (thermostatTemperatureRelativeWeight / 2);
                const updates: Partial<TemperatureSettingDevice['state']> = {
                    thermostatTemperatureSetpoint: device.state.thermostatTemperatureSetpoint + change
                };
                return {
                    updateState: updates,
                };
            }
            break;

        case 'action.devices.commands.SetTemperature':
            if (isTemperatureControl(device)) {
                return {
                    updateState: {
                        temperatureSetpointCelsius: params.temperature,
                    },
                };
            }
            break;

        case 'action.devices.commands.SetHumidity':
            if (isHumiditySetting(device)) {
                return {
                    updateState: {
                        humiditySetpointPercent: params.humidity,
                    },
                };
            }
            break;

        case 'action.devices.commands.HumidityRelative':
            if (isHumiditySetting(device)) {
                let newHumidity: number;
                if ('humidityRelativePercent' in params) {
                    newHumidity = device.state.humiditySetpointPercent + params.humidityRelativePercent;
                } else {
                    newHumidity = device.state.humiditySetpointPercent + params.humidityRelativeWeight * 10;
                }
                return {
                    updateState: {
                        humiditySetpointPercent: fitPercent(newHumidity),
                    },
                };
            }
            break;

        case 'action.devices.commands.LockUnlock':
            if (isLockUnlock(device)) {
                const updates: Partial<LockUnlockDevice['state']> = {
                    isLocked: params.lock,
                };
                return {
                    updateState: updates,
                };
            }
            break;

        case 'action.devices.commands.ActivateScene':
            if (isScene(device)) {
                const noraSpecific: Partial<SceneDevice['noraSpecific']> = {
                    pendingScene: {
                        deactivate: params?.deactivate ?? false,
                    },
                };
                return { updateNoraSpecific: noraSpecific };
            }
            break;

        case 'action.devices.commands.OpenClose':
            if (isOpenClose(device)) {
                if (device.attributes?.openDirection?.length) {
                    if ('openState' in device.state) {
                        return {
                            updateState: {
                                openState: device.state.openState.map(st => {
                                    if (st.openDirection === params.openDirection || !params.openDirection) {
                                        return {
                                            openPercent: params.openPercent,
                                            openDirection: st.openDirection,
                                        };
                                    }
                                    return st;
                                })
                            },
                        };
                    }
                } else {
                    return {
                        updateState: {
                            openPercent: params.openPercent,
                        },
                    };
                }
            }
            break;

        case 'action.devices.commands.OpenCloseRelative':
            if (isOpenClose(device)) {
                if ('openPercent' in device.state) {
                    return {
                        updateState: {
                            openPercent: fitPercent(params.openRelativePercent + device.state.openPercent),
                        },
                    };
                } else {
                    return {
                        updateState: {
                            openState: device.state.openState.map(st => {
                                if (st.openDirection === params.openDirection || !params.openDirection) {
                                    return {
                                        openPercent: fitPercent(params.openRelativePercent + st.openPercent),
                                        openDirection: st.openDirection,
                                    };
                                }
                                return st;
                            }),
                        }
                    };
                }
            }
            break;

        case 'action.devices.commands.ColorAbsolute':
            if (isColorSetting(device)) {
                const changes: Changes = {
                    updateState: {
                        color: {
                        },
                    },
                };
                if ('spectrumHSV' in params?.color && changes.updateState?.color) {
                    changes.updateState.color.spectrumHsv = params.color.spectrumHSV;
                }
                if ('spectrumRGB' in params?.color && changes.updateState?.color) {
                    changes.updateState.color.spectrumRgb = params.color.spectrumRGB;
                }
                if ('temperature' in params?.color && changes.updateState?.color) {
                    changes.updateState.color.temperatureK = params.color.temperature;
                }
                if (isBrightness(device) && device.noraSpecific.turnOnWhenBrightnessChanges && changes?.updateState) {
                    changes.updateState.on = true;
                }
                return changes;
            }
            break;

        case 'action.devices.commands.setVolume':
            if (isVolumeDevice(device)) {
                return {
                    updateState: {
                        currentVolume: params.volumeLevel,
                    },
                };
            }

            break;

        case 'action.devices.commands.volumeRelative':
            if (isVolumeDevice(device)) {
                let newVolume = device.state.currentVolume + params.relativeSteps;
                newVolume = Math.min(device.attributes.volumeMaxLevel, Math.max(0, newVolume));
                if (isFinite(newVolume)) {
                    return {
                        updateState: {
                            currentVolume: newVolume,
                        },
                    };
                }
            }
            break;
    }
    return null;
}


function fitPercent(n: number, minimum = 0, maximum = 100) {
    return Math.min(maximum, Math.max(minimum, n));
}
