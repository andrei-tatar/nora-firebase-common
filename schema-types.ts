import { Device } from './device';

export type State = Device['state'];
export type UpdateState = Partial<Device['state']>;
export { Device };
