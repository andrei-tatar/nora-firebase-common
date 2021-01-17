import { Device, isBrightness, isLockUnlock, isOnOff, isOpenClose, isScene, isTemperatureSetting } from "./device";

export type ChangedFlags = 'state' | 'noraSpecific';

export function executeCommand(command: string, params: any, device: Device): ChangedFlags[] {
    switch (command) {
        case 'action.devices.commands.BrightnessAbsolute':
            if (isBrightness(device)) {
                device.state.brightness = params.brightness;
                if (isOnOff(device) && device.noraSpecific.turnOnWhenBrightnessChanges) {
                    device.state.on = true;
                }
                return ['state'];
            }
            break;

        case 'action.devices.commands.OnOff':
        case 'action.devices.commands.ThermostatTemperatureSetpoint':
        case 'action.devices.commands.ThermostatTemperatureSetRange':
        case 'action.devices.commands.ThermostatSetMode':
            device.state = {
                ...device.state,
                ...params,
            }
            return ['state'];

        case 'action.devices.commands.TemperatureRelative':
            if (isTemperatureSetting(device) && device.state.thermostatMode !== 'heatcool') {
                const { thermostatTemperatureRelativeDegree, thermostatTemperatureRelativeWeight } = params;
                const change = thermostatTemperatureRelativeDegree || (thermostatTemperatureRelativeWeight / 2);
                device.state.thermostatTemperatureSetpoint = device.state.thermostatTemperatureSetpoint + change;
                return ['state'];
            }
            break;

        case 'action.devices.commands.LockUnlock':
            if (isLockUnlock(device)) {
                device.state.isLocked = params.lock;
                return ['state'];
            }
            break;

        case 'action.devices.commands.ActivateScene':
            if (isScene(device)) {
                device.noraSpecific.pendingScene = {
                    deactivate: params?.deactivate ?? false,
                };
                return ['noraSpecific'];
            }
            break;

        case 'action.devices.commands.OpenClose':
            if (isOpenClose(device)) {
                if ('openPercent' in device.state) {
                    device.state.openPercent = params.openPercent;
                } else {
                    device.state.openState = device.state.openState.map(st => {
                        if (st.openDirection === params.openDirection || !params.openDirection) {
                            return {
                                openPercent: params.openPercent,
                                openDirection: params.openDirection,
                            };
                        }
                        return st;
                    });
                }
                return ['state'];
            }
            break;

        case 'action.devices.commands.OpenCloseRelative':
            if (isOpenClose(device)) {
                if ('openPercent' in device.state) {
                    device.state.openPercent = fit(params.openRelativePercent + device.state.openPercent);
                } else {
                    device.state.openState = device.state.openState.map(st => {
                        if (st.openDirection === params.openDirection || !params.openDirection) {
                            return {
                                openPercent: fit(params.openRelativePercent + st.openPercent),
                                openDirection: params.openDirection,
                            };
                        }
                        return st;
                    });
                }
                return ['state'];
            }
            break;
    }

    return [];
}


function fit(n: number, minimum = 0, maximum = 100) {
    return Math.min(maximum, Math.max(minimum, n));
}
