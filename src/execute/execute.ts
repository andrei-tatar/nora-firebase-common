import { Device, ErrorCode } from '../device';
import { HANDLERS } from './handlers';
import { checkSecondaryVerification } from './secondary-verification';

export { HANDLERS as COMMAND_HANDLERS };

export interface Changes {
    updateState?: { [key: string]: any };
    updateNoraSpecific?: { [key: string]: any };
    skipSecondaryVerification?: boolean;
    result?: Record<string, any>;
}

export interface ExecuteCommandParams {
    command: string;
    params: any;
    device: Device;
    challenge?: any;
}

export type ExecuteErrorCode = 'challengeNeeded' | ErrorCode;

export class ExecuteCommandError extends Error {
    constructor(public readonly errorCode: ExecuteErrorCode) {
        super();
    }
}

export type ChallengeType = 'ackNeeded' | 'pinNeeded' | 'challengeFailedPinNeeded';

export class TwoFactorError extends ExecuteCommandError {
    constructor(public readonly challengeNeeded: ChallengeType) {
        super('challengeNeeded');
    }
}

export function executeCommand({ command, params, device, challenge }: ExecuteCommandParams): Changes | null {
    const handler = HANDLERS.get(command);
    const result = handler?.(device, params) ?? null;
    if (result?.skipSecondaryVerification !== true) {
        checkSecondaryVerification(device, challenge);
    }
    return result;
}
