import { Device } from './device';

const EXCEPTIONS: ((d: Device) => boolean)[] = [
    d => !!d.noraSpecific?.twoFactor?.type?.length,
    d => d.type === 'action.devices.types.GARAGE',
    d => d.type === 'action.devices.types.SENSOR',
    d => d.traits.includes('action.devices.traits.LockUnlock'),
];

export function deviceSupportsLocalExecution(device: Device) {
    if (EXCEPTIONS.some(exception => exception(device))) {
        return false;
    }
    return true;
}
