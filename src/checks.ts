import {
    ArmDisarmDevice, BrightnessDevice, ChannelDevice, ColorSettingDevice, Device, DeviceType, ErrorCode, FanSpeedDevice,
    HumiditySettingDevice, InputSelectorDevice, LockUnlockDevice, MediaStateDevice, OnOffDevice, OpenCloseDevice,
    OpenCloseDirection,
    SceneDevice, SensorStateDevice, StatusReportDevice, TemperatureControlDevice, TemperatureSettingDevice,
    TransportControlDevice, VolumeDevice
} from './device';
import { Schema } from './schema';

export function isErrorCode(errorCode: any): errorCode is ErrorCode {
    return Schema.device.statusreport.definitions.ErrorCode.enum.includes(errorCode);
}

export function isDeviceType(deviceType: any): deviceType is DeviceType {
    return Schema.device.armdisarm.definitions.DeviceType.enum.includes(deviceType);
}

export function isOpenCloseDirection(value: any): value is OpenCloseDirection {
    return Schema.device.openclose.definitions.OpenCloseDirection.enum.includes(value);
}

export function isArmDisarm(device: Pick<Device, 'traits'>): device is ArmDisarmDevice {
    return device.traits.includes('action.devices.traits.ArmDisarm');
}

export function isBrightness(device: Pick<Device, 'traits'>): device is BrightnessDevice {
    return device.traits.includes('action.devices.traits.Brightness');
}

export function isColorSetting(device: Pick<Device, 'traits'>): device is ColorSettingDevice {
    return device.traits.includes('action.devices.traits.ColorSetting');
}

export function isOnOff(device: Pick<Device, 'traits'>): device is OnOffDevice {
    return device.traits.includes('action.devices.traits.OnOff');
}

export function isTemperatureSetting(device: Pick<Device, 'traits'>): device is TemperatureSettingDevice {
    return device.traits.includes('action.devices.traits.TemperatureSetting');
}

export function isLockUnlock(device: Pick<Device, 'traits'>): device is LockUnlockDevice {
    return device.traits.includes('action.devices.traits.LockUnlock');
}

export function isScene(device: Pick<Device, 'traits'>): device is SceneDevice {
    return device.traits.includes('action.devices.traits.Scene');
}

export function isOpenClose(device: Pick<Device, 'traits'>): device is OpenCloseDevice {
    return device.traits.includes('action.devices.traits.OpenClose');
}

export function isVolumeDevice(device: Pick<Device, 'traits'>): device is VolumeDevice {
    return device.traits.includes('action.devices.traits.Volume');
}

export function isTemperatureControl(device: Pick<Device, 'traits'>): device is TemperatureControlDevice {
    return device.traits.includes('action.devices.traits.TemperatureControl');
}

export function isSensorState(device: Pick<Device, 'traits'>): device is SensorStateDevice {
    return device.traits.includes('action.devices.traits.SensorState');
}

export function isHumiditySetting(device: Pick<Device, 'traits'>): device is HumiditySettingDevice {
    return device.traits.includes('action.devices.traits.HumiditySetting');
}

export function isFanSpeedDevice(device: Pick<Device, 'traits'>): device is FanSpeedDevice {
    return device.traits.includes('action.devices.traits.FanSpeed');
}

export function isTransportControlDevice(device: Pick<Device, 'traits'>): device is TransportControlDevice {
    return device.traits.includes('action.devices.traits.TransportControl');
}

export function isMediaStateDevice(device: Pick<Device, 'traits'>): device is MediaStateDevice {
    return device.traits.includes('action.devices.traits.MediaState');
}

export function isInputSelectorDevice(device: Pick<Device, 'traits'>): device is InputSelectorDevice {
    return device.traits.includes('action.devices.traits.InputSelector');
}

export function isChannelDevice(device: Pick<Device, 'traits'>): device is ChannelDevice {
    return device.traits.includes('action.devices.traits.Channel');
}

export function isStatusReportDevice(device: Pick<Device, 'traits'>): device is StatusReportDevice {
    return device.traits.includes('action.devices.traits.StatusReport');
}
