import {
    BrightnessDevice, ColorSettingDevice, Device, LockUnlockDevice,
    OnOffDevice, OpenCloseDevice, SceneDevice, TemperatureSettingDevice
} from './device';

export function isBrightness(device: Device): device is BrightnessDevice {
    return device.traits.includes('action.devices.traits.Brightness');
}

export function isColorSetting(device: Device): device is ColorSettingDevice {
    return device.traits.includes('action.devices.traits.ColorSetting');
}

export function isOnOff(device: Device): device is OnOffDevice {
    return device.traits.includes('action.devices.traits.OnOff');
}

export function isTemperatureSetting(device: Device): device is TemperatureSettingDevice {
    return device.traits.includes('action.devices.traits.TemperatureSetting');
}

export function isLockUnlock(device: Device): device is LockUnlockDevice {
    return device.traits.includes('action.devices.traits.LockUnlock');
}

export function isScene(device: Device): device is SceneDevice {
    return device.traits.includes('action.devices.traits.Scene');
}

export function isOpenClose(device: Device): device is OpenCloseDevice {
    return device.traits.includes('action.devices.traits.OpenClose');
}
