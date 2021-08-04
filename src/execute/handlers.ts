import {
    isArmDisarm, isBrightness, isChannelDevice, isColorSetting, isFanSpeedDevice, isHumiditySetting,
    isInputSelectorDevice, isLockUnlock, isOnOff, isOpenClose, isScene, isTemperatureControl,
    isTemperatureSetting, isTransportControlDevice, isVolumeDevice
} from '../checks';
import {
    ArmDisarmDevice, BrightnessDevice, ChannelDevice, Device, FanSpeedDevice, InputSelectorDevice, LockUnlockDevice, OnOffDevice,
    SceneDevice, TemperatureSettingDevice, TransportControlDevice, VolumeDevice
} from '../device';
import { Changes, ExecuteCommandError } from './execute';

export type CommandHandler = (device: Device, params: any) => Changes | null;

export const HANDLERS = new Map<string, CommandHandler>();

const COPY_PARAMS_HANDLER: CommandHandler = (_, params) => {
    const newState = { ...params };
    return {
        updateState: newState,
    };
};

HANDLERS.set('action.devices.commands.ArmDisarm', (device, params) => {
    if (isArmDisarm(device)) {
        const updateState: Partial<ArmDisarmDevice['state']> = {};

        updateState.isArmed = params.arm;

        if ('armLevel' in params) {
            updateState.currentArmLevel = params.armLevel;
        }

        return {
            updateState: updateState,
        };
    }

    return null;
});

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
HANDLERS.set('action.devices.commands.OnOff', (device, params) => {
    if (isOnOff(device)) {
        const update: Partial<OnOffDevice['state']> = { ...params };

        if (device.noraSpecific?.returnOnOffErrorCodeIfStateAlreadySet &&
            device.state.on === update.on) {
            if (device.state.on) {
                throw new ExecuteCommandError('alreadyOn');
            } else {
                throw new ExecuteCommandError('alreadyOff');
            }
        }

        return {
            updateState: update,
        };
    }

    return null;
});
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
        const currentHumidity = device.state.humiditySetpointPercent ?? 0;
        if ('humidityRelativePercent' in params) {
            newHumidity = currentHumidity + params.humidityRelativePercent;
        } else {
            newHumidity = currentHumidity + params.humidityRelativeWeight * 10;
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

        if (device.noraSpecific?.returnLockUnlockErrorCodeIfStateAlreadySet &&
            updates.isLocked === device.state.isLocked) {
            if (device.state.isLocked) {
                throw new ExecuteCommandError('alreadyLocked');
            } else {
                throw new ExecuteCommandError('alreadyUnlocked');
            }
        }

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
            if (device.noraSpecific?.returnOpenCloseErrorCodeIfStateAlreadySet &&
                'openPercent' in device.state &&
                params.openPercent === device.state.openPercent) {
                if (device.state.openPercent === 100) {
                    throw new ExecuteCommandError('alreadyOpen');
                } else if (device.state.openPercent === 0) {
                    throw new ExecuteCommandError('alreadyClosed');
                }
            }
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
        if (device.noraSpecific.turnOnWhenColorChanges && changes?.updateState) {
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
        let updateState: Partial<(FanSpeedDevice & OnOffDevice)['state']> | undefined;
        if ('supportsFanSpeedPercent' in device.attributes && typeof params.fanSpeedPercent === 'number') {
            updateState = {
                on: true,
                currentFanSpeedPercent: params.fanSpeedPercent,
            };
        } else if ('availableFanSpeeds' in device.attributes && typeof params.fanSpeed === 'string') {
            updateState = {
                on: true,
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
        let updateState: Partial<(FanSpeedDevice & OnOffDevice)['state']> | undefined;
        if ('supportsFanSpeedPercent' in device.attributes &&
            'currentFanSpeedPercent' in device.state) {
            if (typeof params.fanSpeedRelativePercent === 'number') {
                updateState = {
                    on: true,
                    currentFanSpeedPercent: limit(device.state.currentFanSpeedPercent + params.fanSpeedRelativePercent),
                };
            } else {
                updateState = {
                    on: true,
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
                    on: true,
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
HANDLERS.set('action.devices.commands.SetInput', (device, params) => {
    if (isInputSelectorDevice(device)) {
        const updateState: Partial<InputSelectorDevice['state']> = {
            currentInput: params.newInput,
        };
        return {
            updateState
        };
    }
    return null;
});
HANDLERS.set('action.devices.commands.NextInput', (device) => {
    if (isInputSelectorDevice(device)) {
        const index = device.attributes.availableInputs.findIndex(i => i.key === device.state.currentInput);
        const nextIndex = (index + 1) % device.attributes.availableInputs.length;
        const updateState: Partial<InputSelectorDevice['state']> = {
            currentInput: device.attributes.availableInputs[nextIndex].key,
        };
        return {
            updateState
        };
    }
    return null;
});
HANDLERS.set('action.devices.commands.PreviousInput', (device) => {
    if (isInputSelectorDevice(device)) {
        const index = device.attributes.availableInputs.findIndex(i => i.key === device.state.currentInput);
        const nextIndex = index === 0
            ? device.attributes.availableInputs.length - 1
            : index - 1;
        const updateState: Partial<InputSelectorDevice['state']> = {
            currentInput: device.attributes.availableInputs[nextIndex].key,
        };
        return {
            updateState
        };
    }
    return null;
});
HANDLERS.set('action.devices.commands.selectChannel', (device, params) => {
    if (isChannelDevice(device)) {
        const updateNoraSpecific: Partial<ChannelDevice['noraSpecific']> = {
            pendingChannelChangeCommand: {
                command: 'SelectChannel',
                channelCode: params?.channelCode,
                channelName: params?.channelName,
                channelNumber: params?.channelNumber,
            },
        };
        return { updateNoraSpecific };
    }
    return null;
});
HANDLERS.set('action.devices.commands.relativeChannel', (device, params) => {
    if (isChannelDevice(device)) {
        const updateNoraSpecific: Partial<ChannelDevice['noraSpecific']> = {
            pendingChannelChangeCommand: {
                command: 'RelativeChannel',
                relativeChannelChange: params?.relativeChannelChange,
            },
        };
        return { updateNoraSpecific };
    }
    return null;
});
HANDLERS.set('action.devices.commands.returnChannel', (device) => {
    if (isChannelDevice(device)) {
        const updateNoraSpecific: Partial<ChannelDevice['noraSpecific']> = {
            pendingChannelChangeCommand: {
                command: 'ReturnChannel',
            },
        };
        return { updateNoraSpecific };
    }
    return null;
});

([
    'Stop', 'Next', 'Previous', 'Pause', 'Resume', 'SeekRelative', 'SeekToPosition',
    'RepeatMode', 'Shuffle', 'ClosedCaptioningOn', 'ClosedCaptioningOff',
] as const).forEach(suffix => {
    HANDLERS.set(`action.devices.commands.media${suffix}`, (device, params) => {
        if (isTransportControlDevice(device)) {
            const updateNoraSpecific: Partial<TransportControlDevice['noraSpecific']> = {
                pendingTransportControlCommand: {
                    command: suffix,
                    ...params,
                },
            };
            return {
                updateNoraSpecific,
            };
        }
        return null;
    });
});

function limit(n: number, minimum = 0, maximum = 100) {
    return Math.min(maximum, Math.max(minimum, n));
}
