import { ErrorCode } from './device';

export const HEARTBEAT_TIMEOUT_SEC = 60;
export const ASYNC_CMD_TIMEOUT_ERRORCODE: ErrorCode = 'offline';
export const ASYNC_CMD_TIMEOUT_MILLISECONDS = 1500;
export const SENSOR_TYPE_NOTIFICATION_SUPPORT: ReadonlyArray<string> = [
    'AirQuality',
    'CarbonMonoxideLevel',
    'SmokeLevel',
    'FilterCleanliness',
    'WaterLeak',
    'RainDetection',
    'FilterLifeTime',
];
