export interface BaseDevice {
    id: string;
    type: DeviceType;
    traits: Trait[];
    name: {
        defaultNames?: string[];
        name: string;
        nicknames?: string[];
    };
    willReportState: boolean;
    notificationSupportedByAgent?: boolean;
    roomHint?: string;
    deviceInfo?: {
        manufacturer: string;
        model: string;
        hwVersion: string;
        swVersion: string;
    };
    otherDeviceIds?: {
        agentId?: string;
        deviceId: string;
    }[];
    customData?: any;
    noraSpecific?: {
        disabled?: boolean;
        twoFactor?: TwoFactor;
        activateSceneHandled?: boolean;
        [key: string]: any;
    };
    state: any;
    attributes: any;
}

export type Device = BrightnessDevice | ColorSettingDevice | OnOffDevice | TemperatureSettingDevice |
    LockUnlockDevice | SceneDevice | OpenCloseDevice | SpeakerDevice;

export interface BrightnessDevice extends BaseDevice {
    state: BrightnessState;
    attributes: BrightnessAttributes;
    noraSpecific: {
        turnOnWhenBrightnessChanges: boolean;
    }
}

export interface ColorSettingDevice extends BaseDevice {
    state: ColorSettingState;
    attributes: ColorSettingAttributes;
}

export interface OnOffDevice extends BaseDevice {
    state: OnOffState;
    attributes: OnOffAttribute;
}

export interface TemperatureSettingDevice extends BaseDevice {
    state: TemperatureSettingState;
    attributes: TemperatureSettingAtributes;
}

export interface LockUnlockDevice extends BaseDevice {
    state: LockUnlockState;
    attributes: {};
}

export interface SceneDevice extends BaseDevice {
    state: {};
    attributes: SceneAttributes;
    noraSpecific: {
        pendingScene?: {
            deactivate: boolean;
        };
    },
}

export interface OpenCloseDevice extends BaseDevice {
    state: OpenCloseState;
    attributes: OpenCloseAttributes;
}

export interface SpeakerDevice extends OnOffDevice {
    state: VolumeState & OnOffState;
    attributes: VolumeAttribues & OnOffAttribute;
}

export type TwoFactor = {
    type: 'ack';
} | {
    type: 'pin';
    pin: string;
};

export type DeviceType =
    'action.devices.types.LIGHT' |
    'action.devices.types.SWITCH' |
    'action.devices.types.SCENE' |
    'action.devices.types.OUTLET' |
    'action.devices.types.THERMOSTAT' |
    'action.devices.types.SPEAKER' |
    'action.devices.types.BLINDS' |
    'action.devices.types.GARAGE' |
    'action.devices.types.LOCK';

export type Trait =
    'action.devices.traits.Brightness' |
    'action.devices.traits.ColorSetting' |
    'action.devices.traits.OnOff' |
    'action.devices.traits.LockUnlock' |
    'action.devices.traits.Scene' |
    'action.devices.traits.TemperatureSetting' |
    'action.devices.traits.Volume' |
    'action.devices.traits.OpenClose';

export interface BaseState {
    online: boolean;
}

export interface BrightnessAttributes {
    commandOnlyBrightness?: boolean;
}

export interface BrightnessState extends BaseState {
    brightness: number;
}

export type ColorSettingAttributes = {
    commandOnlyColorSetting?: boolean;
} & ({
    colorModel: 'rgb' | 'hsv'
} | {
    colorTemperatureRange: {
        temperatureMinK: number;
        temperatureMaxK: number;
    }
});

export type ColorSettingState = BaseState & ({
    color: {
        temperatureK: number;
    }
} | {
    color: {
        spectrumRgb: number;
    }
} | {
    color: {
        spectrumHsv: {
            hue: number;
            saturation: number;
            value: number;
        }
    }
});

export interface OnOffAttribute {
    commandOnlyOnOff?: boolean;
    queryOnlyOnOff?: boolean;
}

export interface OnOffState extends BaseState {
    on: boolean;
}

export interface LockUnlockState extends BaseState {
    isLocked: boolean;
    isJammed: boolean;
}

export interface SceneAttributes {
    sceneReversible?: boolean;
}

export type ThermostatMode = 'off' | 'heat' | 'cool' | 'on' | 'auto' | 'fan-only' | 'purifier' | 'eco' | 'dry' | 'heatcool';

export interface TemperatureSettingAtributes {
    availableThermostatModes: ThermostatMode[];
    thermostatTemperatureRange?: {
        minThresholdCelsius: number;
        maxThresholdCelsius: number;
    };
    thermostatTemperatureUnit: string;
    bufferRangeCelsius?: number;
    commandOnlyTemperatureSetting?: boolean;
    queryOnlyTemperatureSetting?: boolean;
}

export type TemperatureSettingState = BaseState & {
    thermostatTemperatureAmbient: number;
    thermostatMode: ThermostatMode;
    thermostatTemperatureSetpoint: number;
    thermostatTemperatureSetpointHigh?: number;
    thermostatTemperatureSetpointLow?: number;
};

export interface VolumeAttribues {
    volumeMaxLevel: number;
    volumeCanMuteAndUnmute: boolean;
    volumeDefaultPercentage?: number;
    levelStepSize?: number;
    commandOnlyVolume?: boolean;
}

export interface VolumeState extends BaseState {
    currentVolume: number;
    isMuted?: boolean;
}

export type OpenCloseDirection =
    'UP' |
    'DOWN' |
    'LEFT' |
    'RIGHT' |
    'IN' |
    'OUT';

export interface OpenCloseAttributes {
    discreteOnlyOpenClose?: boolean;
    openDirection?: OpenCloseDirection[];
    commandOnlyOpenClose?: boolean;
    queryOnlyOpenClose?: boolean;
}

export type OpenCloseState = BaseState & ({
    openPercent: number;
} | {
    openState: {
        openPercent: number;
        openDirection: OpenCloseDirection;
    }[]
});
