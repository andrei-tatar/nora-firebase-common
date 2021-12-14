import * as checks from '../checks';
import * as devices from '../device';
import { Changes, ExecuteCommandError } from './execute';

export type CommandHandler = (device: devices.Device, params: any) => Changes | null;

export const HANDLERS = new Map<string, CommandHandler>();

const COPY_PARAMS_HANDLER: CommandHandler = (_, params) => {
    const newState = { ...params };
    return {
        updateState: newState,
    };
};

HANDLERS.set('action.devices.commands.ArmDisarm', (device, params) => {
    if (checks.isArmDisarm(device)) {
        const updateState: Partial<devices.ArmDisarmDevice['state']> = {};

        if (device.state.isArmed === params.arm && device.noraSpecific.returnArmDisarmErrorCodeIfStateAlreadySet) {
            if (updateState.isArmed) {
                throw new ExecuteCommandError('alreadyArmed');
            } else {
                throw new ExecuteCommandError('alreadyDisarmed');
            }
        }

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
    if (checks.isBrightness(device)) {
        const updates: Partial<devices.BrightnessDevice['state'] & devices.OnOffDevice['state']> = {};

        updates.brightness = params.brightness;
        if (checks.isOnOff(device) && device.noraSpecific?.turnOnWhenBrightnessChanges) {
            updates.on = true;
        }
        return {
            updateState: updates,
        };
    }

    return null;
});
HANDLERS.set('action.devices.commands.OnOff', (device, params) => {
    if (checks.isOnOff(device)) {
        const update: Partial<devices.OnOffDevice['state']> = { ...params };

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
    if (!checks.isTemperatureSetting(device)) {
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
    if (checks.isTemperatureSetting(device)) {
        const { thermostatTemperatureRelativeDegree, thermostatTemperatureRelativeWeight } = params;
        const change = thermostatTemperatureRelativeDegree || (thermostatTemperatureRelativeWeight / 2);
        const updates: Partial<devices.TemperatureSettingDevice['state']> = {
            thermostatTemperatureSetpoint: device.state.thermostatTemperatureSetpoint + change
        };
        return {
            updateState: updates,
        };
    }

    return null;
});
HANDLERS.set('action.devices.commands.SetTemperature', (device, params) => {
    if (checks.isTemperatureControl(device)) {
        return {
            updateState: {
                temperatureSetpointCelsius: params.temperature,
            },
        };
    }

    return null;
});
HANDLERS.set('action.devices.commands.SetHumidity', (device, params) => {
    if (checks.isHumiditySetting(device)) {
        return {
            updateState: {
                humiditySetpointPercent: params.humidity,
            },
        };
    }
    return null;
});
HANDLERS.set('action.devices.commands.HumidityRelative', (device, params) => {
    if (checks.isHumiditySetting(device)) {
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
    if (checks.isLockUnlock(device)) {
        if (device.state.isJammed) {
            throw new ExecuteCommandError('deviceJammingDetected');
        }

        const updates: Partial<devices.LockUnlockDevice['state']> = {
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
    if (checks.isScene(device)) {
        const noraSpecific: Partial<devices.SceneDevice['noraSpecific']> = {
            pendingScene: {
                deactivate: params?.deactivate ?? false,
            },
        };
        return { updateNoraSpecific: noraSpecific };
    }
    return null;
});
HANDLERS.set('action.devices.commands.OpenClose', (device, params) => {
    if (checks.isOpenClose(device)) {
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
    if (checks.isOpenClose(device)) {
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
    if (checks.isColorSetting(device)) {
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
    if (checks.isVolumeDevice(device)) {
        const updateState: Partial<devices.VolumeDevice['state']> = {
            currentVolume: params.volumeLevel,
        };
        return { updateState };
    }
    return null;
});
HANDLERS.set('action.devices.commands.mute', (device, params) => {
    if (checks.isVolumeDevice(device)) {
        const updateState: Partial<devices.VolumeDevice['state']> = {
            isMuted: params.mute,
        };
        return { updateState };
    }
    return null;
});
HANDLERS.set('action.devices.commands.volumeRelative', (device, params) => {
    if (checks.isVolumeDevice(device)) {
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
    if (checks.isFanSpeedDevice(device)) {
        let updateState: Partial<(devices.FanSpeedDevice & devices.OnOffDevice)['state']> | undefined;
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
    if (checks.isFanSpeedDevice(device)) {
        let updateState: Partial<(devices.FanSpeedDevice & devices.OnOffDevice)['state']> | undefined;
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
    if (checks.isInputSelectorDevice(device)) {
        const updateState: Partial<devices.InputSelectorDevice['state']> = {
            currentInput: params.newInput,
        };
        return {
            updateState
        };
    }
    return null;
});
HANDLERS.set('action.devices.commands.NextInput', (device) => {
    if (checks.isInputSelectorDevice(device)) {
        const index = device.attributes.availableInputs.findIndex(i => i.key === device.state.currentInput);
        const nextIndex = (index + 1) % device.attributes.availableInputs.length;
        const updateState: Partial<devices.InputSelectorDevice['state']> = {
            currentInput: device.attributes.availableInputs[nextIndex].key,
        };
        return {
            updateState
        };
    }
    return null;
});
HANDLERS.set('action.devices.commands.PreviousInput', (device) => {
    if (checks.isInputSelectorDevice(device)) {
        const index = device.attributes.availableInputs.findIndex(i => i.key === device.state.currentInput);
        const nextIndex = index === 0
            ? device.attributes.availableInputs.length - 1
            : index - 1;
        const updateState: Partial<devices.InputSelectorDevice['state']> = {
            currentInput: device.attributes.availableInputs[nextIndex].key,
        };
        return {
            updateState
        };
    }
    return null;
});
HANDLERS.set('action.devices.commands.selectChannel', (device, params) => {
    if (checks.isChannelDevice(device)) {
        const updateNoraSpecific: Partial<devices.ChannelDevice['noraSpecific']> = {
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
    if (checks.isChannelDevice(device)) {
        const updateNoraSpecific: Partial<devices.ChannelDevice['noraSpecific']> = {
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
    if (checks.isChannelDevice(device)) {
        const updateNoraSpecific: Partial<devices.ChannelDevice['noraSpecific']> = {
            pendingChannelChangeCommand: {
                command: 'ReturnChannel',
            },
        };
        return { updateNoraSpecific };
    }
    return null;
});
HANDLERS.set('action.devices.commands.GetCameraStream', (device, params: {
    StreamToChromecast: boolean;
    SupportedStreamProtocols: devices.CameraStreamProtocol[];
}) => {
    if (checks.isCameraStreamDevice(device)) {
        const staticParams = device.noraSpecific
            ?.cameraStreamProtocols
            ?.find(f => params.SupportedStreamProtocols.includes(f.cameraStreamProtocol));

        if (!staticParams) {
            throw new ExecuteCommandError('notSupported');
        }

        return {
            result: staticParams,
        };
    }
    return null;
});
HANDLERS.set('action.devices.commands.appInstall', (device, params) => {
    if (checks.isAppSelectorDevice(device)) {
        const updateNoraSpecific: Partial<devices.AppSelectorDevice['noraSpecific']> = {
            pendingAppSelectorCommand: {
                command: 'AppInstall',
                newApplication: params?.newApplication,
                newApplicationName: params?.newApplicationName,
            },
        };
        return { updateNoraSpecific };
    }
    return null;
});
HANDLERS.set('action.devices.commands.appSearch', (device, params) => {
    if (checks.isAppSelectorDevice(device)) {
        const updateNoraSpecific: Partial<devices.AppSelectorDevice['noraSpecific']> = {
            pendingAppSelectorCommand: {
                command: 'AppSearch',
                newApplication: params?.newApplication,
                newApplicationName: params?.newApplicationName,
            },
        };
        return { updateNoraSpecific };
    }
    return null;
});
HANDLERS.set('action.devices.commands.appSelect', (device, params) => {
    if (checks.isAppSelectorDevice(device)) {
        const newApplication = params.newApplication ??
            device.attributes.availableApplications
                .find(app => app.names.some(name => name.name_synonym.includes(params.newApplicationName)))?.key;
        if (!newApplication) {
            throw new ExecuteCommandError('noAvailableApp');
        }
        const updateState: Partial<devices.AppSelectorDevice['state']> = {
            currentApplication: newApplication,
        };
        return {
            updateState
        };
    }
    return null;
});
HANDLERS.set('action.devices.commands.TimerStart', (device, params) => {
    if (checks.isTimerDevice(device)) {
        const updateState: Partial<devices.TimerDevice['state']> = {};

        if (params.timerTimeSec > device.attributes.maxTimerLimitSec) {
            throw new ExecuteCommandError('aboveMaximumTimerDuration');
        }

        updateState.timerRemainingSec = params.timerTimeSec;
        updateState.timerPaused = false;
        return {
            updateState
        };
    }
    return null;
});
HANDLERS.set('action.devices.commands.TimerAdjust', (device, params) => {
    if (checks.isTimerDevice(device)) {
        const updateState: Partial<devices.TimerDevice['state']> = {};
        let newTimeRemaining: number;

        if (device.state.timerRemainingSec === -1) {
            throw new ExecuteCommandError('noTimerExists');
        }
        if (params.timerTimeSec > Math.abs(device.attributes.maxTimerLimitSec)) {
            throw new ExecuteCommandError('timerValueOutOfRange');
        }
        newTimeRemaining = device.state.timerRemainingSec + params.timerTimeSec;
        if (newTimeRemaining > device.attributes.maxTimerLimitSec) {
            throw new ExecuteCommandError('timerValueOutOfRange');
        }
        if (newTimeRemaining < -1) {
            newTimeRemaining = -1;
        }
        updateState.timerRemainingSec = newTimeRemaining;

        return {
            updateState
        };
    }
    return null;
});
HANDLERS.set('action.devices.commands.TimerPause', (device) => {
    if (checks.isTimerDevice(device)) {
        const updateState: Partial<devices.TimerDevice['state']> = {};
        let newTimeRemaining: Number;

        if (device.state.timerRemainingSec === -1) {
            throw new ExecuteCommandError('noTimerExists');
        }

        updateState.timerPaused = true;
        return {
            updateState
        };
    }
    return null;
});
HANDLERS.set('action.devices.commands.TimerResume', (device, params) => {
    if (checks.isTimerDevice(device)) {
        const updateState: Partial<devices.TimerDevice['state']> = {};

        if (device.state.timerRemainingSec === -1) {
            throw new ExecuteCommandError('noTimerExists');
        }

        updateState.timerPaused = false;
        return {
            updateState
        };
    }
    return null;
});
HANDLERS.set('action.devices.commands.TimerCancel', (device, params) => {
    if (checks.isTimerDevice(device)) {
        const updateState: Partial<devices.TimerDevice['state']> = {};

        if (device.state.timerRemainingSec === -1) {
            throw new ExecuteCommandError('noTimerExists');
        }

        updateState.timerRemainingSec = -1;
        updateState.timerPaused = false;
        return {
            updateState
        };
    }
    return null;
});
HANDLERS.set('action.devices.commands.StartStop', (device, params) => {
    if (checks.isStartStopDevice(device)) {
        const updateState: Partial<devices.StartStopDevice['state']> = {};

        updateState.isRunning = params.start;
        if(params.zone){
            updateState.activeZones = [params.zone];
        }else if(params.multipleZones){
            updateState.activeZones = params.multipleZones;
        }
        
        return {
            updateState
        };
    }
    return null;
});
HANDLERS.set('action.devices.commands.PauseUnpause', (device, params) => {
    if (checks.isStartStopDevice(device)) {
        const updateState: Partial<devices.StartStopDevice['state']> = {};

        if (!device.state.isRunning || !device.attributes.pausable) {
            throw new ExecuteCommandError('unpausableState');
        }

        updateState.isPaused = params.pause;
        return {
            updateState
        };
    }
    return null;
});

([
    'Stop', 'Next', 'Previous', 'Pause', 'Resume', 'SeekRelative', 'SeekToPosition',
    'RepeatMode', 'Shuffle', 'ClosedCaptioningOn', 'ClosedCaptioningOff',
] as const).forEach(suffix => {
    HANDLERS.set(`action.devices.commands.media${suffix}`, (device, params) => {
        if (checks.isTransportControlDevice(device)) {
            const updateNoraSpecific: Partial<devices.TransportControlDevice['noraSpecific']> = {
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
