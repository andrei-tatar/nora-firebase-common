import { ErrorCode } from './device';

export interface ObjectDetectionNotification {
    ObjectDetection: {
        priority: 0;
        detectionTimestamp: number;
        objects: {
            named?: string[];
            familiar?: number;
            unfamiliar?: number;
            unclassified?: number;
        };
    };
}

export interface RunCycleNotification {
    RunCycle: {
        priority: 0;
        status: 'SUCCESS';
        currentCycleRemainingTime: number;
    } | {
        priority: 0;
        status: 'FAILURE';
        errorCode: ErrorCode;
    };
}
