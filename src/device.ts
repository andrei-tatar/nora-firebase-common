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
        error?: {
            msg: string;
            details?: any;
        };
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
        temperatureK: number;
    } | {
        spectrumRgb: number;
    } | {
        spectrumHsv: {
            hue: number;
            saturation: number;
            value: number;
        }
    };
}, {
    commandOnlyColorSetting?: boolean;
} & ({
    colorModel: 'rgb' | 'hsv';
} | {
    colorTemperatureRange: {
        temperatureMinK: number;
        temperatureMaxK: number;
    }
})> & {
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
    defaultMode?: Exclude<ThermostatMode, 'on' | 'off'>;
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
    /**
     * @minimum 0
     * @maximum 100
     */
    openPercent: number;
} | {
    openState: {
        /**
         * @minimum 0
         * @maximum 100
         */
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

type NumericCapabilitites<T> = T extends 'PERCENTAGE' ? {
    /**
    * @minimum 0
    * @maximum 100
    */
    rawValue: number;
} : {
    rawValue: number;
};

export interface SensorSupport<TName, TDescriptiveCapabilities, TNumbericCapabilities> {
    attributes: {
        name: TName;
    } & ([TDescriptiveCapabilities] extends [never] ? {} : {
        descriptiveCapabilities: {
            availableStates: TDescriptiveCapabilities[];
        };
    }) & ([TNumbericCapabilities] extends [never] ? {} : {
        numericCapabilities: {
            rawValueUnit: TNumbericCapabilities;
        };
    });
    state: {
        name: TName;
    } & ([TDescriptiveCapabilities] extends [never] ? {} : {
        currentSensorState: TDescriptiveCapabilities;
    }) & ([TNumbericCapabilities] extends [never] ? {} : NumericCapabilitites<TNumbericCapabilities>);
}

export type AirQualitySensorSupport = SensorSupport<
    'AirQuality',
    'healthy' | 'moderate' | 'unhealthy' | 'unhealthy for sensitive groups' | 'very unhealthy' |
    'hazardous' | 'good' | 'fair' | 'poor' | 'very poor' | 'severe' | 'unknown',
    'AQI'>;

export type CarbonMonoxideSensorSupport = SensorSupport<
    'CarbonMonoxideLevel',
    'carbon monoxide detected' | 'high' | 'no carbon monoxide detected' | 'unknown',
    'PARTS_PER_MILLION'>;

export type SmokeLevelSensorSupport = SensorSupport<
    'SmokeLevel',
    'smoke detected' | 'high' | 'no smoke detected' | 'unknown',
    'PARTS_PER_MILLION'>;

export type FilterCleanlinessSensorSupport = SensorSupport<
    'FilterCleanliness',
    'clean' | 'dirty' | 'needs replacement' | 'unknown',
    never>;

export type WaterLeakSensorSupport = SensorSupport<
    'WaterLeak',
    'leak' | 'no leak' | 'unknown',
    never>;

export type RainDetectionSensorSupport = SensorSupport<
    'RainDetection',
    'rain detected' | 'no rain detected' | 'unknown',
    never>;

export type FilterLifeTimeSensorSupport = SensorSupport<
    'FilterLifeTime',
    'new' | 'good' | 'replace soon' | 'replace now' | 'unknown',
    'PERCENTAGE'>;

export type ComputedFilterLifeTimeSensorSupport = SensorSupport<
    'PreFilterLifeTime' | 'HEPAFilterLifeTime' | 'Max2FilterLifeTime',
    never,
    'PERCENTAGE'>;

export type CarbonDioxideLevelSensorSupport = SensorSupport<
    'CarbonDioxideLevel',
    never,
    'PARTS_PER_MILLION'>;

export type ParticulateMatterSensorSupport = SensorSupport<
    'PM2.5' | 'PM10',
    never,
    'MICROGRAMS_PER_CUBIC_METER'>;

export type VolatileOrganicCompoundsSensorSupport = SensorSupport<
    'VolatileOrganicCompounds',
    never,
    'PARTS_PER_MILLION'>;

export type AnySensorSupport = AirQualitySensorSupport | CarbonMonoxideSensorSupport |
    SmokeLevelSensorSupport | FilterCleanlinessSensorSupport | WaterLeakSensorSupport |
    RainDetectionSensorSupport | FilterLifeTimeSensorSupport | ComputedFilterLifeTimeSensorSupport |
    CarbonDioxideLevelSensorSupport | ParticulateMatterSensorSupport | VolatileOrganicCompoundsSensorSupport;

export type SensorStateDevice = Device<{
    currentSensorStateData: AnySensorSupport['state'][];
}, {
    sensorStatesSupported: AnySensorSupport['attributes'][];
}> & {
    traits: ['action.devices.traits.SensorState']
};

export type TemperatureControlDevice = Device<{
    temperatureSetpointCelsius: number;
    temperatureAmbientCelsius: number;
}, {
    temperatureRange: {
        minThresholdCelsius: number;
        maxThresholdCelsius: number;
    };
    temperatureStepCelsius?: number;
    temperatureUnitForUX: 'C' | 'F';
    commandOnlyTemperatureControl?: boolean;
    queryOnlyTemperatureControl?: boolean;
}> & {
    traits: ['action.devices.traits.TemperatureControl']
};

export type HumiditySettingDevice = Device<{
    /**
     * @minimum 0
     * @maximum 100
     */
    humiditySetpointPercent: number;
    /**
     * @minimum 0
     * @maximum 100
     */
    humidityAmbientPercent: number;
}, {
    humiditySetpointRange?: {
        /**
         * @minimum 0
         * @maximum 100
         */
        minPercent: number;
        /**
         * @minimum 0
         * @maximum 100
         */
        maxPercent: number;
    };
    commandOnlyHumiditySetting?: boolean;
    queryOnlyHumiditySetting?: boolean;
}> & {
    traits: ['action.devices.traits.HumiditySetting']
};

type DeviceType =
    'action.devices.types.LIGHT' |
    'action.devices.types.SWITCH' |
    'action.devices.types.SCENE' |
    'action.devices.types.OUTLET' |
    'action.devices.types.THERMOSTAT' |
    'action.devices.types.SPEAKER' |
    'action.devices.types.LOCK' |
    'action.devices.types.SENSOR' |

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
    'action.devices.types.VALVE' |
    'action.devices.types.WINDOW' |
    'action.devices.types.HUMIDIFIER';

export type Trait =
    'action.devices.traits.Brightness' |
    'action.devices.traits.ColorSetting' |
    'action.devices.traits.OnOff' |
    'action.devices.traits.LockUnlock' |
    'action.devices.traits.Scene' |
    'action.devices.traits.TemperatureSetting' |
    'action.devices.traits.Volume' |
    'action.devices.traits.OpenClose' |
    'action.devices.traits.MediaState' |
    'action.devices.traits.SensorState' |
    'action.devices.traits.TemperatureControl' |
    'action.devices.traits.HumiditySetting';
