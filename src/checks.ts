import * as dev from './device';
import { Schema } from './schema';
import { validateIndividual } from './validate';

export function isErrorCode(errorCode: any): errorCode is dev.ErrorCode {
    return Schema.device.statusreport.definitions.ErrorCode.enum.includes(errorCode);
}

export function isDeviceType(deviceType: any): deviceType is dev.DeviceType {
    return Schema.device.armdisarm.definitions.DeviceType.enum.includes(deviceType);
}

export function isOpenCloseDirection(value: any): value is dev.OpenCloseDirection {
    return Schema.device.openclose.definitions.OpenCloseDirection.enum.includes(value);
}

export function isCameraResult(value: any): value is dev.CameraStreamResult {
    return validateIndividual('camera-result', value).valid;
}

export function isArmDisarm(device: Pick<dev.Device, 'traits'>): device is dev.ArmDisarmDevice {
    return device.traits.includes('action.devices.traits.ArmDisarm');
}

export function isBrightness(device: Pick<dev.Device, 'traits'>): device is dev.BrightnessDevice {
    return device.traits.includes('action.devices.traits.Brightness');
}

export function isColorSetting(device: Pick<dev.Device, 'traits'>): device is dev.ColorSettingDevice {
    return device.traits.includes('action.devices.traits.ColorSetting');
}

export function isOnOff(device: Pick<dev.Device, 'traits'>): device is dev.OnOffDevice {
    return device.traits.includes('action.devices.traits.OnOff');
}

export function isTemperatureSetting(device: Pick<dev.Device, 'traits'>): device is dev.TemperatureSettingDevice {
    return device.traits.includes('action.devices.traits.TemperatureSetting');
}

export function isLockUnlock(device: Pick<dev.Device, 'traits'>): device is dev.LockUnlockDevice {
    return device.traits.includes('action.devices.traits.LockUnlock');
}

export function isScene(device: Pick<dev.Device, 'traits'>): device is dev.SceneDevice {
    return device.traits.includes('action.devices.traits.Scene');
}

export function isOpenClose(device: Pick<dev.Device, 'traits'>): device is dev.OpenCloseDevice {
    return device.traits.includes('action.devices.traits.OpenClose');
}

export function isVolumeDevice(device: Pick<dev.Device, 'traits'>): device is dev.VolumeDevice {
    return device.traits.includes('action.devices.traits.Volume');
}

export function isTemperatureControl(device: Pick<dev.Device, 'traits'>): device is dev.TemperatureControlDevice {
    return device.traits.includes('action.devices.traits.TemperatureControl');
}

export function isSensorState(device: Pick<dev.Device, 'traits'>): device is dev.SensorStateDevice {
    return device.traits.includes('action.devices.traits.SensorState');
}

export function isHumiditySetting(device: Pick<dev.Device, 'traits'>): device is dev.HumiditySettingDevice {
    return device.traits.includes('action.devices.traits.HumiditySetting');
}

export function isFanSpeedDevice(device: Pick<dev.Device, 'traits'>): device is dev.FanSpeedDevice {
    return device.traits.includes('action.devices.traits.FanSpeed');
}

export function isTransportControlDevice(device: Pick<dev.Device, 'traits'>): device is dev.TransportControlDevice {
    return device.traits.includes('action.devices.traits.TransportControl');
}

export function isMediaStateDevice(device: Pick<dev.Device, 'traits'>): device is dev.MediaStateDevice {
    return device.traits.includes('action.devices.traits.MediaState');
}

export function isInputSelectorDevice(device: Pick<dev.Device, 'traits'>): device is dev.InputSelectorDevice {
    return device.traits.includes('action.devices.traits.InputSelector');
}

export function isChannelDevice(device: Pick<dev.Device, 'traits'>): device is dev.ChannelDevice {
    return device.traits.includes('action.devices.traits.Channel');
}

export function isStatusReportDevice(device: Pick<dev.Device, 'traits'>): device is dev.StatusReportDevice {
    return device.traits.includes('action.devices.traits.StatusReport');
}

export function isCameraStreamDevice(device: Pick<dev.Device, 'traits'>): device is dev.CameraStreamDevice {
    return device.traits.includes('action.devices.traits.CameraStream');
}

export function isAppSelectorDevice(device: Pick<dev.Device, 'traits'>): device is dev.AppSelectorDevice {
    return device.traits.includes('action.devices.traits.AppSelector');
}

export function isTimerDevice(device: Pick<dev.Device, 'traits'>): device is dev.TimerDevice {
    return device.traits.includes('action.devices.traits.Timer');
}

export function isStartStopDevice(device: Pick<dev.Device, 'traits'>): device is dev.StartStopDevice {
    return device.traits.includes('action.devices.traits.StartStop');
}

export function isEnergyStorageDevice(device: Pick<dev.Device, 'traits'>): device is dev.EnergyStorageDevice {
    return device.traits.includes('action.devices.traits.EnergyStorage');
}
