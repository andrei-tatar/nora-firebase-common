export type TwoFactor = {
    type: 'ack';
} | {
    type: 'pin';
    /**
    * @maxLength 20
    */
    pin: string;
};

export interface Device<TState = {}, TAttributes = {}, TNora = {}> {
    id: string;
    type: DeviceType;
    traits: Trait[];
    name: {
        defaultNames?: string[];
        /**
        * @maxLength 40
        */
        name: string;
        nicknames?: string[];
    };
    willReportState: boolean;
    notificationSupportedByAgent?: boolean;
    /**
     * @description Name of the home this device belongs to
     * @maxLength 40
     */
    structureHint?: string;
    /**
     * @description Name of the room this device belongs to
     * @maxLength 40
     */
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
    customData?: {
        /**
         * @description Used for local execution to identity the instance responsible of this device
         * @maxLength 40
         */
        proxyId?: string;
    };
    noraSpecific: {
        disabled?: boolean;
        twoFactor?: TwoFactor;
    } & TNora;
    state: {
        online: boolean;
    } & TState;
    attributes: TAttributes;
}

export type BrightnessDevice = Device<{
    brightness: number;
}, {
    commandOnlyBrightness?: boolean;
}, {
    turnOnWhenBrightnessChanges: boolean;
}> & {
    traits: ['action.devices.traits.Brightness'];
};

export type ColorSettingDevice = Device<{
    color: {
        temperatureK?: number;
    } & ({
        spectrumRgb: number;
    } | {
        spectrumHsv: {
            hue: number;
            saturation: number;
            value: number;
        }
    });
}, {
    commandOnlyColorSetting?: boolean;
    colorModel?: 'rgb' | 'hsv'
    colorTemperatureRange?: {
        temperatureMinK: number;
        temperatureMaxK: number;
    }
}> & {
    traits: ['action.devices.traits.ColorSetting'];
};

export type OnOffDevice = Device<{
    on: boolean;
}, {
    commandOnlyOnOff?: boolean;
    queryOnlyOnOff?: boolean;
}> & {
    traits: ['action.devices.traits.OnOff']
};

export type LockUnlockDevice = Device<{
    isLocked: boolean;
    isJammed: boolean;
}> & {
    traits: ['action.devices.traits.LockUnlock']
};

export type SceneDevice = Device<{
    // no state for scene trait
}, {
    sceneReversible?: boolean;
}, {
    pendingScene?: {
        deactivate: boolean;
    };
}> & {
    traits: ['action.devices.traits.Scene']
};

export type ThermostatMode = 'off' | 'heat' | 'cool' | 'on' | 'auto' | 'fan-only' | 'purifier' | 'eco' | 'dry' | 'heatcool';

export type TemperatureSettingDevice = Device<{
    thermostatMode: ThermostatMode;
    thermostatTemperatureAmbient: number;
    /**
     * @minimum 0
     * @maximum 100
     */
    thermostatHumidityAmbient?: number;
    thermostatTemperatureSetpoint: number;
    thermostatTemperatureSetpointHigh?: number;
    thermostatTemperatureSetpointLow?: number;
}, {
    availableThermostatModes: ThermostatMode[];
    thermostatTemperatureRange?: {
        minThresholdCelsius: number;
        maxThresholdCelsius: number;
    };
    thermostatTemperatureUnit: 'C' | 'F';
    bufferRangeCelsius?: number;
    commandOnlyTemperatureSetting?: boolean;
    queryOnlyTemperatureSetting?: boolean;
}, {
    previousMode?: Exclude<ThermostatMode, 'on' | 'off'>,
}> & {
    traits: ['action.devices.traits.TemperatureSetting']
};

export type VolumeDevice = Device<{
    currentVolume: number;
    isMuted?: boolean;
}, {
    volumeMaxLevel: number;
    volumeCanMuteAndUnmute: boolean;
    volumeDefaultPercentage?: number;
    levelStepSize?: number;
    commandOnlyVolume?: boolean;
}> & {
    traits: ['action.devices.traits.Volume']
};

export type OpenCloseDirection = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT' | 'IN' | 'OUT';

export type OpenCloseDevice = Device<{
    openPercent: number;
} | {
    openState: {
        openPercent: number;
        openDirection: OpenCloseDirection;
    }[]
}, {
    discreteOnlyOpenClose?: boolean;
    openDirection?: OpenCloseDirection[];
    commandOnlyOpenClose?: boolean;
    queryOnlyOpenClose?: boolean;
}> & {
    traits: ['action.devices.traits.OpenClose']
};

export type MediaStateDevice = Device<{
    activityState: 'INACTIVE' | 'STANDBY' | 'ACTIVE';
    playbackState: 'PAUSED' | 'PLAYING' | 'FAST_FORWARDING' | 'REWINDING' | 'BUFFERING' | 'STOPPED';
}, {
    supportActivityState?: boolean;
    supportPlaybackState?: boolean;
}> & {
    traits: ['action.devices.traits.MediaState']
};

type DeviceType =
    'action.devices.types.LIGHT' |
    'action.devices.types.SWITCH' |
    'action.devices.types.SCENE' |
    'action.devices.types.OUTLET' |
    'action.devices.types.THERMOSTAT' |
    'action.devices.types.SPEAKER' |
    'action.devices.types.LOCK' |

    'action.devices.types.CLOSET' |
    'action.devices.types.AWNING' |
    'action.devices.types.CURTAIN' |
    'action.devices.types.DOOR' |
    'action.devices.types.DRAWER' |
    'action.devices.types.BLINDS' |
    'action.devices.types.GARAGE' |
    'action.devices.types.GATE' |
    'action.devices.types.PERGOLA' |
    'action.devices.types.SHUTTER' |
    'action.devices.types.VALVE';
    'action.devices.types.WINDOW';

export type Trait =
    'action.devices.traits.Brightness' |
    'action.devices.traits.ColorSetting' |
    'action.devices.traits.OnOff' |
    'action.devices.traits.LockUnlock' |
    'action.devices.traits.Scene' |
    'action.devices.traits.TemperatureSetting' |
    'action.devices.traits.Volume' |
    'action.devices.traits.OpenClose' |
    'action.devices.traits.MediaState';
