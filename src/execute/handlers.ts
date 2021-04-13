import {
    isBrightness, isColorSetting, isHumiditySetting, isLockUnlock, isOnOff, isOpenClose, isScene,
    isTemperatureControl, isTemperatureSetting, isVolumeDevice
} from '../checks';
import { BrightnessDevice, Device, LockUnlockDevice, OnOffDevice, SceneDevice, TemperatureSettingDevice } from '../device';
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
                humiditySetpointPercent: fitPercent(newHumidity),
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
    return null;
});
HANDLERS.set('action.devices.commands.OpenCloseRelative', (device, params) => {
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
        return {
            updateState: {
                currentVolume: params.volumeLevel,
            },
        };
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

function fitPercent(n: number, minimum = 0, maximum = 100) {
    return Math.min(maximum, Math.max(minimum, n));
}
