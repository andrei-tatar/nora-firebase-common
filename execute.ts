import { isBrightness, isLockUnlock, isOnOff, isOpenClose, isScene, isTemperatureSetting } from './checks';
import { BrightnessDevice, Device, LockUnlockDevice, OnOffDevice, TemperatureSettingDevice } from './device';

export interface Changes {
    updateState?: { [key: string]: any };
    updateNoraSpecific?: { [key: string]: any };
}

export interface ExecuteCommandParams {
    command: string;
    params: any;
    device: Device;
    loadNoraSpecific: () => Promise<void>;
}

export async function executeCommand({
    command, params, device, loadNoraSpecific
}: ExecuteCommandParams): Promise<Changes | null> {
    switch (command) {
        case 'action.devices.commands.BrightnessAbsolute':
            if (isBrightness(device)) {
                const updates: Partial<BrightnessDevice['state'] & OnOffDevice['state']> = {};

                await loadNoraSpecific();

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
        case 'action.devices.commands.ThermostatSetMode':
            const newState = { ...params };
            return {
                updateState: newState,
            };

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
                return {
                    updateNoraSpecific: {
                        deactivate: params?.deactivate ?? false,
                    },
                };
            }
            break;

        case 'action.devices.commands.OpenClose':
            if (isOpenClose(device)) {
                if (device.attributes.openDirection?.length) {
                    if ('openState' in device.state) {
                        return {
                            updateState: device.state.openState.map(st => {
                                if (st.openDirection === params.openDirection || !params.openDirection) {
                                    return {
                                        openPercent: params.openPercent,
                                        openDirection: params.openDirection,
                                    };
                                }
                                return st;
                            }),
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
                            openPercent: fit(params.openRelativePercent + device.state.openPercent),
                        },
                    };
                } else {
                    return {
                        updateState: {
                            openState: device.state.openState.map(st => {
                                if (st.openDirection === params.openDirection || !params.openDirection) {
                                    return {
                                        openPercent: fit(params.openRelativePercent + st.openPercent),
                                        openDirection: params.openDirection,
                                    };
                                }
                                return st;
                            }),
                        }
                    };
                }
            }
            break;
    }
    return null;
}


function fit(n: number, minimum = 0, maximum = 100) {
    return Math.min(maximum, Math.max(minimum, n));
}
