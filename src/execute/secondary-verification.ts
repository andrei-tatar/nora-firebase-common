import { Device } from '../device';
import { TwoFactorError } from './execute';

export function checkSecondaryVerification(device: Device, challenge: any) {
    switch (device.noraSpecific?.twoFactor?.type) {
        case 'ack':
            if (!challenge?.ack) {
                throw new TwoFactorError('ackNeeded');
            }
            break;

        case 'pin':
            if (!challenge?.pin) {
                throw new TwoFactorError('pinNeeded');
            }

            if (challenge.pin !== device.noraSpecific.twoFactor.pin) {
                throw new TwoFactorError('challengeFailedPinNeeded');
            }
            break;
    }
}
