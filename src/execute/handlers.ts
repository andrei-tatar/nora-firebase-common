import {
    isBrightness, isColorSetting, isFanSpeedDevice, isHumiditySetting, isLockUnlock, isOnOff, isOpenClose, isScene,
    isTemperatureControl, isTemperatureSetting, isVolumeDevice
} from '../checks';
import { BrightnessDevice, Device, FanSpeedDevice, LockUnlockDevice, OnOffDevice, SceneDevice, TemperatureSettingDevice, VolumeDevice } from '../device';
import { Changes, ExecuteCommandError } from './execute';

export type CommandHandler = (device: Device, params: any) => Changes | null;

export const HANDLERS = new Map<string, CommandHandler>();

const COPY_PARAMS_HANDLER: CommandHandler = (_, params) => {
    const newState = { ...params };
    return {
        updateState: newState,
    };
};

HANDLERS.set('action.devices.commands.BrightnessAbsolute', (device, params) => {
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

    return null;
});
HANDLERS.set('action.devices.commands.OnOff', COPY_PARAMS_HANDLER);
HANDLERS.set('action.devices.commands.ThermostatTemperatureSetpoint', COPY_PARAMS_HANDLER);
HANDLERS.set('action.devices.commands.ThermostatTemperatureSetRange', COPY_PARAMS_HANDLER);
HANDLERS.set('action.devices.commands.ThermostatSetMode', (device, params) => {
    if (!isTemperatureSetting(device)) {
        return null;
    }

    if (params.thermostatMode === 'on') {
        const newMode =
            device.noraSpecific?.previousMode ??
            device.noraSpecific?.defaultMode ??
            device.attributes.availableThermostatModes.filter(m => m !== 'on' && m !== 'off')?.[0];

        if (!newMode) {
            return null;
        }

        return {
            updateState: {
                thermostatMode: newMode,
            },
        };
    }

    return {
        updateState: { ...params },
    };
});
HANDLERS.set('action.devices.commands.TemperatureRelative', (device, params) => {
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

    return null;
});
HANDLERS.set('action.devices.commands.SetTemperature', (device, params) => {
    if (isTemperatureControl(device)) {
        return {
            updateState: {
                temperatureSetpointCelsius: params.temperature,
            },
        };
    }

    return null;
});
HANDLERS.set('action.devices.commands.SetHumidity', (device, params) => {
    if (isHumiditySetting(device)) {
        return {
            updateState: {
                humiditySetpointPercent: params.humidity,
            },
        };
    }
    return null;
});
HANDLERS.set('action.devices.commands.HumidityRelative', (device, params) => {
    if (isHumiditySetting(device)) {
        let newHumidity: number;
        if ('humidityRelativePercent' in params) {
            newHumidity = device.state.humiditySetpointPercent + params.humidityRelativePercent;
        } else {
            newHumidity = device.state.humiditySetpointPercent + params.humidityRelativeWeight * 10;
        }
        return {
            updateState: {
                humiditySetpointPercent: limit(newHumidity),
            },
        };
    }
    return null;
});
HANDLERS.set('action.devices.commands.LockUnlock', (device, params) => {
    if (isLockUnlock(device)) {
        if (device.state.isJammed) {
            throw new ExecuteCommandError('deviceJammingDetected');
        }

        const updates: Partial<LockUnlockDevice['state']> = {
            isLocked: params.lock,
        };
        return {
            updateState: updates,
            skipSecondaryVerification: params.lock,
        };
    }
    return null;
});
HANDLERS.set('action.devices.commands.ActivateScene', (device, params) => {
    if (isScene(device)) {
        const noraSpecific: Partial<SceneDevice['noraSpecific']> = {
            pendingScene: {
                deactivate: params?.deactivate ?? false,
            },
        };
        return { updateNoraSpecific: noraSpecific };
    }
    return null;
});
HANDLERS.set('action.devices.commands.OpenClose', (device, params) => {
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
                    skipSecondaryVerification: params.openPercent === 0,
                };
            }
        } else {
            return {
                updateState: {
                    openPercent: params.openPercent,
                },
                skipSecondaryVerification: params.openPercent === 0,
            };
        }
    }
    return null;
});
HANDLERS.set('action.devices.commands.OpenCloseRelative', (device, params) => {
    if (isOpenClose(device)) {
        if ('openPercent' in device.state) {
            return {
                updateState: {
                    openPercent: limit(params.openRelativePercent + device.state.openPercent),
                },
            };
        } else {
            return {
                updateState: {
                    openState: device.state.openState.map(st => {
                        if (st.openDirection === params.openDirection || !params.openDirection) {
                            return {
                                openPercent: limit(params.openRelativePercent + st.openPercent),
                                openDirection: st.openDirection,
                            };
                        }
                        return st;
                    }),
                }
            };
        }
    }
    return null;
});
HANDLERS.set('action.devices.commands.ColorAbsolute', (device, params) => {
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
    return null;
});
HANDLERS.set('action.devices.commands.setVolume', (device, params) => {
    if (isVolumeDevice(device)) {
        const updateState: Partial<VolumeDevice['state']> = {
            currentVolume: params.volumeLevel,
        };
        return { updateState };
    }
    return null;
});
HANDLERS.set('action.devices.commands.mute', (device, params) => {
    if (isVolumeDevice(device)) {
        const updateState: Partial<VolumeDevice['state']> = {
            isMuted: params.mute,
        };
        return { updateState };
    }
    return null;
});
HANDLERS.set('action.devices.commands.volumeRelative', (device, params) => {
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
    return null;
});
HANDLERS.set('action.devices.commands.SetFanSpeed', (device, params) => {
    if (isFanSpeedDevice(device)) {
        let updateState: Partial<FanSpeedDevice['state']> | undefined;
        if ('supportsFanSpeedPercent' in device.attributes && typeof params.fanSpeedPercent === 'number') {
            updateState = {
                currentFanSpeedPercent: params.fanSpeedPercent,
            };
        } else if ('availableFanSpeeds' in device.attributes && typeof params.fanSpeed === 'string') {
            updateState = {
                currentFanSpeedSetting: params.fanSpeed,
            };
        }
        return {
            updateState
        };
    }
    return null;
});
HANDLERS.set('action.devices.commands.SetFanSpeedRelative', (device, params) => {
    if (isFanSpeedDevice(device)) {
        let updateState: Partial<FanSpeedDevice['state']> | undefined;
        if ('supportsFanSpeedPercent' in device.attributes &&
            'currentFanSpeedPercent' in device.state) {
            if (typeof params.fanSpeedRelativePercent === 'number') {
                updateState = {
                    currentFanSpeedPercent: limit(device.state.currentFanSpeedPercent + params.fanSpeedRelativePercent),
                };
            } else {
                updateState = {
                    currentFanSpeedPercent: limit(device.state.currentFanSpeedPercent + params.fanSpeedRelativeWeight * 10),
                };
            }
        } else if ('availableFanSpeeds' in device.attributes && typeof params.fanSpeedRelativeWeight === 'number' &&
            'currentFanSpeedSetting' in device.state) {
            const currentSpeed = device.state.currentFanSpeedSetting;
            let index = device.attributes.availableFanSpeeds.speeds.findIndex(d => d.speed_name === currentSpeed);
            if (index !== -1) {
                index = limit(index + params.fanSpeedRelativeWeight, 0, device.attributes.availableFanSpeeds.speeds.length - 1);
                updateState = {
                    currentFanSpeedSetting: device.attributes.availableFanSpeeds.speeds[index].speed_name,
                };
            }
        }
        return {
            updateState
        };
    }
    return null;
});

function limit(n: number, minimum = 0, maximum = 100) {
    return Math.min(maximum, Math.max(minimum, n));
}
