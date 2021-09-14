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
        asyncCommandExecution?: boolean | string[];
        commands?: {
            [commandId: string]: AsyncCommand;
        };
        responses?: {
            [commandId: string]: AsyncResponse;
        };
    } & TNora;
    state: {
        online: boolean;
    } & TState;
    attributes: TAttributes;
}

export interface AsyncCommand {
    command: string;
    params: Record<string, boolean | number | string>;
}

export interface AsyncResponse {
    result?: any;
    state?: any;
    errorCode?: string;
}

export declare type ArmDisarmDevice = Device<{
    isArmed: boolean;
    currentArmLevel?: string,
    exitAllowance?: number
}, {
    availableArmLevels?: {
        levels: {
            level_name: string;
            level_values: {
                level_synonym: string[];
                lang: Language;
            }[];
        }[];
        ordered: boolean;
    };
}, {
    returnArmDisarmErrorCodeIfStateAlreadySet?: boolean;
}> & {
    traits: ['action.devices.traits.ArmDisarm'];
};

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
}), {
    turnOnWhenColorChanges?: boolean;
}> & {
    traits: ['action.devices.traits.ColorSetting'];
};

export type OnOffDevice = Device<{
    on: boolean;
}, {
    commandOnlyOnOff?: boolean;
    queryOnlyOnOff?: boolean;
}, {
    returnOnOffErrorCodeIfStateAlreadySet?: boolean;
}> & {
    traits: ['action.devices.traits.OnOff']
};

export type LockUnlockDevice = Device<{
    isLocked: boolean;
    isJammed: boolean;
}, {}, {
    returnLockUnlockErrorCodeIfStateAlreadySet?: boolean;
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
export type ThermostatActiveMode = ThermostatMode | 'none';
export type PreviousMode = Exclude<ThermostatMode, 'on' | 'off'>;

export type TemperatureSettingDevice = Device<{
    activeThermostatMode?: ThermostatActiveMode;
    targetTempReachedEstimateUnixTimestampSec?: number;
    thermostatMode: ThermostatActiveMode;
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
    previousMode?: PreviousMode;
    defaultMode?: PreviousMode;
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
}, {
    returnOpenCloseErrorCodeIfStateAlreadySet?: boolean;
}> & {
    traits: ['action.devices.traits.OpenClose']
};

export type MediaStateDevice = Device<{
    activityState?: 'INACTIVE' | 'STANDBY' | 'ACTIVE';
    playbackState?: 'PAUSED' | 'PLAYING' | 'FAST_FORWARDING' | 'REWINDING' | 'BUFFERING' | 'STOPPED';
}, {
    supportActivityState?: boolean;
    supportPlaybackState?: boolean;
}> & {
    traits: ['action.devices.traits.MediaState']
};

export type SupportedTransportControlCommand =
    'NEXT' | 'PAUSE' | 'PREVIOUS' | 'RESUME' | 'SHUFFLE' | 'STOP' |
    'SEEK_RELATIVE' | 'SEEK_TO_POSITION' | 'SET_REPEAT' | 'CAPTION_CONTROL';

export type TransportControlIncomingCommand = {
    command: 'Stop';
} | {
    command: 'Next';
} | {
    command: 'Previous';
} | {
    command: 'Pause';
} | {
    command: 'Resume';
} | {
    command: 'SeekRelative';
    relativePositionMs: number;
} | {
    command: 'SeekToPosition';
    absPositionMs: number;
} | {
    command: 'RepeatMode';
    isOn: boolean;
    isSingle?: boolean;
} | {
    command: 'Shuffle';
} | {
    command: 'ClosedCaptioningOn';
    closedCaptioningLanguage?: string;
    userQueryLanguage?: string;
} | {
    command: 'ClosedCaptioningOff';
};

export type TransportControlDevice = Device<{}, {
    /**
     * @minItems 1
     */
    transportControlSupportedCommands: SupportedTransportControlCommand[];
}, {
    pendingTransportControlCommand?: TransportControlIncomingCommand;
}> & {
    traits: ['action.devices.traits.TransportControl']
};

export type InputSelectorDevice = Device<{
    currentInput: string;
}, {
    availableInputs: {
        key: string;
        names: {
            lang: Language;
            name_synonym: string[];
        }[];
    }[];
    commandOnlyInputSelector?: boolean;
    orderedInputs?: boolean;
}> & {
    traits: ['action.devices.traits.InputSelector']
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
    temperatureSetpointCelsius?: number;
    temperatureAmbientCelsius?: number;
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
    humiditySetpointPercent?: number;
    /**
     * @minimum 0
     * @maximum 100
     */
    humidityAmbientPercent?: number;
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

export type FanSpeedDevice = Device<{
    currentFanSpeedSetting: string;
} | {
    /**
     * @minimum 0
     * @maximum 100
     */
    currentFanSpeedPercent: number;
}, {
    reversible?: boolean;
    commandOnlyFanSpeed?: boolean;
} & ({
    availableFanSpeeds: {
        speeds: {
            speed_name: string;
            speed_values: {
                speed_synonym: string[];
                lang: Language;
            }[];
        }[];
        ordered: boolean;
    }
    supportsFanSpeedPercent?: false;
} | {
    supportsFanSpeedPercent: true;
})> & {
    traits: ['action.devices.traits.FanSpeed']
};

export type Language = 'da' | 'nl' | 'en' | 'fr' | 'de' | 'hi' | 'id' | 'it' | 'ja' | 'ko' | 'no' | 'pt-BR' | 'es' | 'sv' | 'th';

export type ChannelDevice = Device<{}, {
    availableChannels: {
        key: string;
        names: string[];
        number?: string;
    }[];
    commandOnlyChannels?: boolean;
}, {
    pendingChannelChangeCommand?: {
        command: 'SelectChannel';
        channelCode: string;
        channelName?: string;
        channelNumber?: string;
    } | {
        command: 'SelectChannel';
        channelNumber: string;
    } | {
        command: 'RelativeChannel';
        relativeChannelChange: number;
    } | {
        command: 'ReturnChannel';
    };
}> & {
    traits: ['action.devices.traits.Channel']
};

export type StatusReportDevice = Device<{
    currentStatusReport: {
        blocking?: boolean;
        /**
         * @maxLength 40
         */
        deviceTarget?: string;
        /**
         * @minimum 0
         */
        priority?: number;
        statusCode?: ErrorCode;
    }[];
}> & {
    traits: ['action.devices.traits.StatusReport']
};

export type CameraStreamProtocol = 'hls' | 'dash' | 'smooth_stream' | 'progressive_mp4' | 'webrtc';

export type CameraStreamResult = {
    cameraStreamAuthToken?: string;
} & ({
    cameraStreamProtocol: 'webrtc';
    cameraStreamSignalingUrl: string;
    cameraStreamOffer?: string;
    cameraStreamIceServers?: string;
} | {
    cameraStreamProtocol: Exclude<CameraStreamProtocol, 'webrtc'>;
    cameraStreamAccessUrl: string;
    cameraStreamReceiverAppId?: string;
});

export type CameraStreamDevice = Device<{
    // no state
}, {
    /**
     * @minItems 1
     */
    cameraStreamSupportedProtocols: CameraStreamProtocol[];
    cameraStreamNeedAuthToken: boolean;
}, {
    /**
    * @minItems 1
    */
    cameraStreamProtocols?: CameraStreamResult[];
}> & {
    traits: ['action.devices.traits.CameraStream']
};

export type AppSelectorDevice = Device<{
    currentApplication: string
}, {
    availableApplications: {
        key: string;
        names: {
            name_synonym: string[];
            lang: Language;
        }[];
    }[];
}, {
    pendingAppSelectorCommand?: {
        command: 'AppInstall';
        newApplication: string;
        newApplicationName: string,
    } | {
        command: 'AppSearch';
        newApplication: string;
        newApplicationName: string,
    };
}> & {
    traits: ['action.devices.traits.AppSelector']
};

export type ErrorCode =
    'aboveMaximumLightEffectsDuration' |
    'aboveMaximumTimerDuration' |
    'actionNotAvailable' |
    'actionUnavailableWhileRunning' |
    'alreadyArmed' |
    'alreadyAtMax' |
    'alreadyAtMin' |
    'alreadyClosed' |
    'alreadyDisarmed' |
    'alreadyDocked' |
    'alreadyInstalledApp' |
    'alreadyInState' |
    'alreadyLocked' |
    'alreadyOff' |
    'alreadyOn' |
    'alreadyOpen' |
    'alreadyPaused' |
    'alreadyStarted' |
    'alreadyStopped' |
    'alreadyUnlocked' |
    'ambiguousZoneName' |
    'amountAboveLimit' |
    'appLaunchFailed' |
    'armFailure' |
    'armLevelNeeded' |
    'authFailure' |
    'bagFull' |
    'belowMinimumLightEffectsDuration' |
    'belowMinimumTimerDuration' |
    'binFull' |
    'cancelArmingRestricted' |
    'cancelTooLate' |
    'channelSwitchFailed' |
    'chargerIssue' |
    'commandInsertFailed' |
    'deadBattery' |
    'degreesOutOfRange' |
    'deviceAlertNeedsAssistance' |
    'deviceAtExtremeTemperature' |
    'deviceBusy' |
    'deviceCharging' |
    'deviceClogged' |
    'deviceCurrentlyDispensing' |
    'deviceDoorOpen' |
    'deviceHandleClosed' |
    'deviceJammingDetected' |
    'deviceLidOpen' |
    'deviceNeedsRepair' |
    'deviceNotDocked' |
    'deviceNotFound' |
    'deviceNotMounted' |
    'deviceNotReady' |
    'deviceStuck' |
    'deviceTampered' |
    'deviceThermalShutdown' |
    'directResponseOnlyUnreachable' |
    'disarmFailure' |
    'discreteOnlyOpenClose' |
    'dispenseAmountAboveLimit' |
    'dispenseAmountBelowLimit' |
    'dispenseAmountRemainingExceeded' |
    'dispenseFractionalAmountNotSupported' |
    'dispenseFractionalUnitNotSupported' |
    'dispenseUnitNotSupported' |
    'doorClosedTooLong' |
    'emergencyHeatOn' |
    'faultyBattery' |
    'floorUnreachable' |
    'functionNotSupported' |
    'genericDispenseNotSupported' |
    'hardError' |
    'inAutoMode' |
    'inAwayMode' |
    'inDryMode' |
    'inEcoMode' |
    'inFanOnlyMode' |
    'inHeatOrCool' |
    'inHumidifierMode' |
    'inOffMode' |
    'inPurifierMode' |
    'inSleepMode' |
    'inSoftwareUpdate' |
    'lockFailure' |
    'lockedState' |
    'lockedToRange' |
    'lowBattery' |
    'maxSettingReached' |
    'maxSpeedReached' |
    'minSettingReached' |
    'minSpeedReached' |
    'monitoringServiceConnectionLost' |
    'needsAttachment' |
    'needsBin' |
    'needsPads' |
    'needsSoftwareUpdate' |
    'needsWater' |
    'networkProfileNotRecognized' |
    'networkSpeedTestInProgress' |
    'noAvailableApp' |
    'noAvailableChannel' |
    'noChannelSubscription' |
    'noTimerExists' |
    'notSupported' |
    'obstructionDetected' |
    'offline' |
    'deviceOffline' |
    'onRequiresMode' |
    'passphraseIncorrect' |
    'percentOutOfRange' |
    'pinIncorrect' |
    'rainDetected' |
    'rangeTooClose' |
    'relinkRequired' |
    'roomsOnDifferentFloors' |
    'safetyShutOff' |
    'sceneCannotBeApplied' |
    'securityRestriction' |
    'softwareUpdateNotAvailable' |
    'startRequiresTime' |
    'stillCoolingDown' |
    'stillWarmingUp' |
    'streamUnavailable' |
    'streamUnplayable' |
    'tankEmpty' |
    'targetAlreadyReached' |
    'timerValueOutOfRange' |
    'tooManyFailedAttempts' |
    'transientError' |
    'turnedOff' |
    'unableToLocateDevice' |
    'unknownFoodPreset' |
    'unlockFailure' |
    'unpausableState' |
    'userCancelled' |
    'valueOutOfRange';

export type DeviceType =
    'action.devices.types.LIGHT' |
    'action.devices.types.SWITCH' |
    'action.devices.types.SCENE' |
    'action.devices.types.OUTLET' |
    'action.devices.types.THERMOSTAT' |
    'action.devices.types.AC_UNIT' |
    'action.devices.types.LOCK' |
    'action.devices.types.SENSOR' |
    'action.devices.types.HUMIDIFIER' |
    'action.devices.types.SMOKE_DETECTOR' |
    'action.devices.types.FAN' |
    'action.devices.types.SECURITYSYSTEM' |
    'action.devices.types.CAMERA' |
    'action.devices.types.AIRPURIFIER' |

    'action.devices.types.SPEAKER' |
    'action.devices.types.AUDIO_VIDEO_RECEIVER' |
    'action.devices.types.REMOTECONTROL' |
    'action.devices.types.SETTOP' |
    'action.devices.types.SOUNDBAR' |
    'action.devices.types.STREAMING_BOX' |
    'action.devices.types.STREAMING_SOUNDBAR' |
    'action.devices.types.STREAMING_STICK' |
    'action.devices.types.TV' |

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
    'action.devices.types.WINDOW';

export type Trait =
    'action.devices.traits.ArmDisarm' |
    'action.devices.traits.Brightness' |
    'action.devices.traits.ColorSetting' |
    'action.devices.traits.OnOff' |
    'action.devices.traits.LockUnlock' |
    'action.devices.traits.Scene' |
    'action.devices.traits.TemperatureSetting' |
    'action.devices.traits.Volume' |
    'action.devices.traits.OpenClose' |
    'action.devices.traits.MediaState' |
    'action.devices.traits.TransportControl' |
    'action.devices.traits.InputSelector' |
    'action.devices.traits.Channel' |
    'action.devices.traits.SensorState' |
    'action.devices.traits.TemperatureControl' |
    'action.devices.traits.HumiditySetting' |
    'action.devices.traits.FanSpeed' |
    'action.devices.traits.StatusReport' |
    'action.devices.traits.CameraStream' |
    'action.devices.traits.AppSelector';
