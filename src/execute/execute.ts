import { Device } from '../device';
import { HANDLERS } from './handlers';
import { checkSecondaryVerification } from './secondary-verification';

export interface Changes {
    updateState?: { [key: string]: any };
    updateNoraSpecific?: { [key: string]: any };
}

export interface ExecuteCommandParams {
    command: string;
    params: any;
    device: Device;
    challenge?: any;
}

export type ErrorCode =
    'challengeNeeded' | 'deviceJammingDetected' | 'obstructionDetected' |
    'lockedState' | 'notSupported' | 'alreadyLocked' | 'alreadyUnlocked' |
    'deviceTurnedOff' | 'deviceOffline';

export class ExecuteCommandError extends Error {
    constructor(public readonly errorCode: ErrorCode) {
        super();
    }
}

export class TwoFactorError extends ExecuteCommandError {
    constructor(public readonly challengeNeeded: 'ackNeeded' | 'pinNeeded' | 'challengeFailedPinNeeded') {
        super('challengeNeeded');
    }
}

export function executeCommand({ command, params, device, challenge }: ExecuteCommandParams): Changes | null {
    const handler = HANDLERS.get(command);
    const result = handler?.(device, params) ?? null;
    checkSecondaryVerification(device, challenge);
    return result;
}
