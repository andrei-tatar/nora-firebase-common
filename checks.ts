import {
    BrightnessDevice, ColorSettingDevice, Device, LockUnlockDevice,
    OnOffDevice, OpenCloseDevice, SceneDevice, TemperatureSettingDevice
} from './device';

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
