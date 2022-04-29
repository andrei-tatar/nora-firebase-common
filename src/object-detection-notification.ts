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
