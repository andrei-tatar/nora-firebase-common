
    /* tslint:disable */
    export type SchemaType = 'device' | 'state';
    export type TraitName = 'brightness' | 'colorsetting' | 'onoff' | 'lockunlock' | 'scene' | 'temperaturesetting' | 'volume' | 'openclose' | 'mediastate';
    export const Schema = {
        device: {
            brightness: {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "traits": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/Trait"
      }
    },
    "id": {
      "type": "string"
    },
    "type": {
      "type": "string",
      "enum": [
        "action.devices.types.LIGHT",
        "action.devices.types.SWITCH",
        "action.devices.types.SCENE",
        "action.devices.types.OUTLET",
        "action.devices.types.THERMOSTAT",
        "action.devices.types.SPEAKER",
        "action.devices.types.BLINDS",
        "action.devices.types.GARAGE",
        "action.devices.types.LOCK"
      ]
    },
    "name": {
      "type": "object",
      "properties": {
        "defaultNames": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "name": {
          "type": "string",
          "maxLength": 40
        },
        "nicknames": {
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      },
      "required": [
        "name"
      ],
      "additionalProperties": false
    },
    "willReportState": {
      "type": "boolean"
    },
    "notificationSupportedByAgent": {
      "type": "boolean"
    },
    "roomHint": {
      "type": "string",
      "maxLength": 40
    },
    "deviceInfo": {
      "type": "object",
      "properties": {
        "manufacturer": {
          "type": "string"
        },
        "model": {
          "type": "string"
        },
        "hwVersion": {
          "type": "string"
        },
        "swVersion": {
          "type": "string"
        }
      },
      "required": [
        "manufacturer",
        "model",
        "hwVersion",
        "swVersion"
      ],
      "additionalProperties": false
    },
    "otherDeviceIds": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "agentId": {
            "type": "string"
          },
          "deviceId": {
            "type": "string"
          }
        },
        "required": [
          "deviceId"
        ],
        "additionalProperties": false
      }
    },
    "customData": {
      "type": "object",
      "properties": {
        "proxyId": {
          "type": "string",
          "description": "Used for local execution to identity the instance responsible of this device",
          "maxLength": 40
        }
      },
      "additionalProperties": false
    },
    "noraSpecific": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "turnOnWhenBrightnessChanges": {
          "type": "boolean"
        },
        "disabled": {
          "type": "boolean"
        },
        "twoFactor": {
          "$ref": "#/definitions/TwoFactor"
        }
      },
      "required": [
        "turnOnWhenBrightnessChanges"
      ]
    },
    "state": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "brightness": {
          "type": "number"
        },
        "online": {
          "type": "boolean"
        }
      },
      "required": [
        "brightness",
        "online"
      ]
    },
    "attributes": {
      "type": "object",
      "properties": {
        "commandOnlyBrightness": {
          "type": "boolean"
        }
      },
      "additionalProperties": false
    }
  },
  "required": [
    "attributes",
    "id",
    "name",
    "noraSpecific",
    "state",
    "traits",
    "type",
    "willReportState"
  ],
  "definitions": {
    "Trait": {
      "type": "string",
      "enum": [
        "action.devices.traits.Brightness"
      ]
    },
    "TwoFactor": {
      "anyOf": [
        {
          "type": "object",
          "properties": {
            "type": {
              "type": "string",
              "const": "ack"
            }
          },
          "required": [
            "type"
          ],
          "additionalProperties": false
        },
        {
          "type": "object",
          "properties": {
            "type": {
              "type": "string",
              "const": "pin"
            },
            "pin": {
              "type": "string",
              "maxLength": 20
            }
          },
          "required": [
            "type",
            "pin"
          ],
          "additionalProperties": false
        }
      ]
    }
  }
},
colorsetting: {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "traits": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/Trait"
      }
    },
    "id": {
      "type": "string"
    },
    "type": {
      "type": "string",
      "enum": [
        "action.devices.types.LIGHT",
        "action.devices.types.SWITCH",
        "action.devices.types.SCENE",
        "action.devices.types.OUTLET",
        "action.devices.types.THERMOSTAT",
        "action.devices.types.SPEAKER",
        "action.devices.types.BLINDS",
        "action.devices.types.GARAGE",
        "action.devices.types.LOCK"
      ]
    },
    "name": {
      "type": "object",
      "properties": {
        "defaultNames": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "name": {
          "type": "string",
          "maxLength": 40
        },
        "nicknames": {
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      },
      "required": [
        "name"
      ],
      "additionalProperties": false
    },
    "willReportState": {
      "type": "boolean"
    },
    "notificationSupportedByAgent": {
      "type": "boolean"
    },
    "roomHint": {
      "type": "string",
      "maxLength": 40
    },
    "deviceInfo": {
      "type": "object",
      "properties": {
        "manufacturer": {
          "type": "string"
        },
        "model": {
          "type": "string"
        },
        "hwVersion": {
          "type": "string"
        },
        "swVersion": {
          "type": "string"
        }
      },
      "required": [
        "manufacturer",
        "model",
        "hwVersion",
        "swVersion"
      ],
      "additionalProperties": false
    },
    "otherDeviceIds": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "agentId": {
            "type": "string"
          },
          "deviceId": {
            "type": "string"
          }
        },
        "required": [
          "deviceId"
        ],
        "additionalProperties": false
      }
    },
    "customData": {
      "type": "object",
      "properties": {
        "proxyId": {
          "type": "string",
          "description": "Used for local execution to identity the instance responsible of this device",
          "maxLength": 40
        }
      },
      "additionalProperties": false
    },
    "noraSpecific": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "disabled": {
          "type": "boolean"
        },
        "twoFactor": {
          "$ref": "#/definitions/TwoFactor"
        }
      }
    },
    "state": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "color": {
          "type": "object",
          "properties": {
            "temperatureK": {
              "type": "number"
            },
            "spectrumRgb": {
              "type": "number"
            },
            "spectrumHsv": {
              "type": "object",
              "properties": {
                "hue": {
                  "type": "number"
                },
                "saturation": {
                  "type": "number"
                },
                "value": {
                  "type": "number"
                }
              },
              "required": [
                "hue",
                "saturation",
                "value"
              ],
              "additionalProperties": false
            }
          },
          "additionalProperties": false
        },
        "online": {
          "type": "boolean"
        }
      },
      "required": [
        "color",
        "online"
      ]
    },
    "attributes": {
      "type": "object",
      "properties": {
        "commandOnlyColorSetting": {
          "type": "boolean"
        },
        "colorModel": {
          "type": "string",
          "enum": [
            "rgb",
            "hsv"
          ]
        },
        "colorTemperatureRange": {
          "type": "object",
          "properties": {
            "temperatureMinK": {
              "type": "number"
            },
            "temperatureMaxK": {
              "type": "number"
            }
          },
          "required": [
            "temperatureMinK",
            "temperatureMaxK"
          ],
          "additionalProperties": false
        }
      },
      "additionalProperties": false
    }
  },
  "required": [
    "attributes",
    "id",
    "name",
    "noraSpecific",
    "state",
    "traits",
    "type",
    "willReportState"
  ],
  "definitions": {
    "Trait": {
      "type": "string",
      "enum": [
        "action.devices.traits.ColorSetting"
      ]
    },
    "TwoFactor": {
      "anyOf": [
        {
          "type": "object",
          "properties": {
            "type": {
              "type": "string",
              "const": "ack"
            }
          },
          "required": [
            "type"
          ],
          "additionalProperties": false
        },
        {
          "type": "object",
          "properties": {
            "type": {
              "type": "string",
              "const": "pin"
            },
            "pin": {
              "type": "string",
              "maxLength": 20
            }
          },
          "required": [
            "type",
            "pin"
          ],
          "additionalProperties": false
        }
      ]
    }
  }
},
onoff: {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "traits": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/Trait"
      }
    },
    "id": {
      "type": "string"
    },
    "type": {
      "type": "string",
      "enum": [
        "action.devices.types.LIGHT",
        "action.devices.types.SWITCH",
        "action.devices.types.SCENE",
        "action.devices.types.OUTLET",
        "action.devices.types.THERMOSTAT",
        "action.devices.types.SPEAKER",
        "action.devices.types.BLINDS",
        "action.devices.types.GARAGE",
        "action.devices.types.LOCK"
      ]
    },
    "name": {
      "type": "object",
      "properties": {
        "defaultNames": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "name": {
          "type": "string",
          "maxLength": 40
        },
        "nicknames": {
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      },
      "required": [
        "name"
      ],
      "additionalProperties": false
    },
    "willReportState": {
      "type": "boolean"
    },
    "notificationSupportedByAgent": {
      "type": "boolean"
    },
    "roomHint": {
      "type": "string",
      "maxLength": 40
    },
    "deviceInfo": {
      "type": "object",
      "properties": {
        "manufacturer": {
          "type": "string"
        },
        "model": {
          "type": "string"
        },
        "hwVersion": {
          "type": "string"
        },
        "swVersion": {
          "type": "string"
        }
      },
      "required": [
        "manufacturer",
        "model",
        "hwVersion",
        "swVersion"
      ],
      "additionalProperties": false
    },
    "otherDeviceIds": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "agentId": {
            "type": "string"
          },
          "deviceId": {
            "type": "string"
          }
        },
        "required": [
          "deviceId"
        ],
        "additionalProperties": false
      }
    },
    "customData": {
      "type": "object",
      "properties": {
        "proxyId": {
          "type": "string",
          "description": "Used for local execution to identity the instance responsible of this device",
          "maxLength": 40
        }
      },
      "additionalProperties": false
    },
    "noraSpecific": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "disabled": {
          "type": "boolean"
        },
        "twoFactor": {
          "$ref": "#/definitions/TwoFactor"
        }
      }
    },
    "state": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "on": {
          "type": "boolean"
        },
        "online": {
          "type": "boolean"
        }
      },
      "required": [
        "on",
        "online"
      ]
    },
    "attributes": {
      "type": "object",
      "properties": {
        "commandOnlyOnOff": {
          "type": "boolean"
        },
        "queryOnlyOnOff": {
          "type": "boolean"
        }
      },
      "additionalProperties": false
    }
  },
  "required": [
    "attributes",
    "id",
    "name",
    "noraSpecific",
    "state",
    "traits",
    "type",
    "willReportState"
  ],
  "definitions": {
    "Trait": {
      "type": "string",
      "enum": [
        "action.devices.traits.OnOff"
      ]
    },
    "TwoFactor": {
      "anyOf": [
        {
          "type": "object",
          "properties": {
            "type": {
              "type": "string",
              "const": "ack"
            }
          },
          "required": [
            "type"
          ],
          "additionalProperties": false
        },
        {
          "type": "object",
          "properties": {
            "type": {
              "type": "string",
              "const": "pin"
            },
            "pin": {
              "type": "string",
              "maxLength": 20
            }
          },
          "required": [
            "type",
            "pin"
          ],
          "additionalProperties": false
        }
      ]
    }
  }
},
lockunlock: {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "traits": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/Trait"
      }
    },
    "id": {
      "type": "string"
    },
    "type": {
      "type": "string",
      "enum": [
        "action.devices.types.LIGHT",
        "action.devices.types.SWITCH",
        "action.devices.types.SCENE",
        "action.devices.types.OUTLET",
        "action.devices.types.THERMOSTAT",
        "action.devices.types.SPEAKER",
        "action.devices.types.BLINDS",
        "action.devices.types.GARAGE",
        "action.devices.types.LOCK"
      ]
    },
    "name": {
      "type": "object",
      "properties": {
        "defaultNames": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "name": {
          "type": "string",
          "maxLength": 40
        },
        "nicknames": {
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      },
      "required": [
        "name"
      ],
      "additionalProperties": false
    },
    "willReportState": {
      "type": "boolean"
    },
    "notificationSupportedByAgent": {
      "type": "boolean"
    },
    "roomHint": {
      "type": "string",
      "maxLength": 40
    },
    "deviceInfo": {
      "type": "object",
      "properties": {
        "manufacturer": {
          "type": "string"
        },
        "model": {
          "type": "string"
        },
        "hwVersion": {
          "type": "string"
        },
        "swVersion": {
          "type": "string"
        }
      },
      "required": [
        "manufacturer",
        "model",
        "hwVersion",
        "swVersion"
      ],
      "additionalProperties": false
    },
    "otherDeviceIds": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "agentId": {
            "type": "string"
          },
          "deviceId": {
            "type": "string"
          }
        },
        "required": [
          "deviceId"
        ],
        "additionalProperties": false
      }
    },
    "customData": {
      "type": "object",
      "properties": {
        "proxyId": {
          "type": "string",
          "description": "Used for local execution to identity the instance responsible of this device",
          "maxLength": 40
        }
      },
      "additionalProperties": false
    },
    "noraSpecific": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "disabled": {
          "type": "boolean"
        },
        "twoFactor": {
          "$ref": "#/definitions/TwoFactor"
        }
      }
    },
    "state": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "isLocked": {
          "type": "boolean"
        },
        "isJammed": {
          "type": "boolean"
        },
        "online": {
          "type": "boolean"
        }
      },
      "required": [
        "isJammed",
        "isLocked",
        "online"
      ]
    },
    "attributes": {
      "type": "object",
      "additionalProperties": false
    }
  },
  "required": [
    "attributes",
    "id",
    "name",
    "noraSpecific",
    "state",
    "traits",
    "type",
    "willReportState"
  ],
  "definitions": {
    "Trait": {
      "type": "string",
      "enum": [
        "action.devices.traits.LockUnlock"
      ]
    },
    "TwoFactor": {
      "anyOf": [
        {
          "type": "object",
          "properties": {
            "type": {
              "type": "string",
              "const": "ack"
            }
          },
          "required": [
            "type"
          ],
          "additionalProperties": false
        },
        {
          "type": "object",
          "properties": {
            "type": {
              "type": "string",
              "const": "pin"
            },
            "pin": {
              "type": "string",
              "maxLength": 20
            }
          },
          "required": [
            "type",
            "pin"
          ],
          "additionalProperties": false
        }
      ]
    }
  }
},
scene: {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "traits": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/Trait"
      }
    },
    "id": {
      "type": "string"
    },
    "type": {
      "type": "string",
      "enum": [
        "action.devices.types.LIGHT",
        "action.devices.types.SWITCH",
        "action.devices.types.SCENE",
        "action.devices.types.OUTLET",
        "action.devices.types.THERMOSTAT",
        "action.devices.types.SPEAKER",
        "action.devices.types.BLINDS",
        "action.devices.types.GARAGE",
        "action.devices.types.LOCK"
      ]
    },
    "name": {
      "type": "object",
      "properties": {
        "defaultNames": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "name": {
          "type": "string",
          "maxLength": 40
        },
        "nicknames": {
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      },
      "required": [
        "name"
      ],
      "additionalProperties": false
    },
    "willReportState": {
      "type": "boolean"
    },
    "notificationSupportedByAgent": {
      "type": "boolean"
    },
    "roomHint": {
      "type": "string",
      "maxLength": 40
    },
    "deviceInfo": {
      "type": "object",
      "properties": {
        "manufacturer": {
          "type": "string"
        },
        "model": {
          "type": "string"
        },
        "hwVersion": {
          "type": "string"
        },
        "swVersion": {
          "type": "string"
        }
      },
      "required": [
        "manufacturer",
        "model",
        "hwVersion",
        "swVersion"
      ],
      "additionalProperties": false
    },
    "otherDeviceIds": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "agentId": {
            "type": "string"
          },
          "deviceId": {
            "type": "string"
          }
        },
        "required": [
          "deviceId"
        ],
        "additionalProperties": false
      }
    },
    "customData": {
      "type": "object",
      "properties": {
        "proxyId": {
          "type": "string",
          "description": "Used for local execution to identity the instance responsible of this device",
          "maxLength": 40
        }
      },
      "additionalProperties": false
    },
    "noraSpecific": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "pendingScene": {
          "type": "object",
          "properties": {
            "deactivate": {
              "type": "boolean"
            }
          },
          "required": [
            "deactivate"
          ],
          "additionalProperties": false
        },
        "disabled": {
          "type": "boolean"
        },
        "twoFactor": {
          "$ref": "#/definitions/TwoFactor"
        }
      }
    },
    "state": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "online": {
          "type": "boolean"
        }
      },
      "required": [
        "online"
      ]
    },
    "attributes": {
      "type": "object",
      "properties": {
        "sceneReversible": {
          "type": "boolean"
        }
      },
      "additionalProperties": false
    }
  },
  "required": [
    "attributes",
    "id",
    "name",
    "noraSpecific",
    "state",
    "traits",
    "type",
    "willReportState"
  ],
  "definitions": {
    "Trait": {
      "type": "string",
      "enum": [
        "action.devices.traits.Scene"
      ]
    },
    "TwoFactor": {
      "anyOf": [
        {
          "type": "object",
          "properties": {
            "type": {
              "type": "string",
              "const": "ack"
            }
          },
          "required": [
            "type"
          ],
          "additionalProperties": false
        },
        {
          "type": "object",
          "properties": {
            "type": {
              "type": "string",
              "const": "pin"
            },
            "pin": {
              "type": "string",
              "maxLength": 20
            }
          },
          "required": [
            "type",
            "pin"
          ],
          "additionalProperties": false
        }
      ]
    }
  }
},
temperaturesetting: {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "traits": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/Trait"
      }
    },
    "id": {
      "type": "string"
    },
    "type": {
      "type": "string",
      "enum": [
        "action.devices.types.LIGHT",
        "action.devices.types.SWITCH",
        "action.devices.types.SCENE",
        "action.devices.types.OUTLET",
        "action.devices.types.THERMOSTAT",
        "action.devices.types.SPEAKER",
        "action.devices.types.BLINDS",
        "action.devices.types.GARAGE",
        "action.devices.types.LOCK"
      ]
    },
    "name": {
      "type": "object",
      "properties": {
        "defaultNames": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "name": {
          "type": "string",
          "maxLength": 40
        },
        "nicknames": {
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      },
      "required": [
        "name"
      ],
      "additionalProperties": false
    },
    "willReportState": {
      "type": "boolean"
    },
    "notificationSupportedByAgent": {
      "type": "boolean"
    },
    "roomHint": {
      "type": "string",
      "maxLength": 40
    },
    "deviceInfo": {
      "type": "object",
      "properties": {
        "manufacturer": {
          "type": "string"
        },
        "model": {
          "type": "string"
        },
        "hwVersion": {
          "type": "string"
        },
        "swVersion": {
          "type": "string"
        }
      },
      "required": [
        "manufacturer",
        "model",
        "hwVersion",
        "swVersion"
      ],
      "additionalProperties": false
    },
    "otherDeviceIds": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "agentId": {
            "type": "string"
          },
          "deviceId": {
            "type": "string"
          }
        },
        "required": [
          "deviceId"
        ],
        "additionalProperties": false
      }
    },
    "customData": {
      "type": "object",
      "properties": {
        "proxyId": {
          "type": "string",
          "description": "Used for local execution to identity the instance responsible of this device",
          "maxLength": 40
        }
      },
      "additionalProperties": false
    },
    "noraSpecific": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "previousMode": {
          "type": "string",
          "enum": [
            "heat",
            "cool",
            "auto",
            "fan-only",
            "purifier",
            "eco",
            "dry",
            "heatcool"
          ]
        },
        "disabled": {
          "type": "boolean"
        },
        "twoFactor": {
          "$ref": "#/definitions/TwoFactor"
        }
      }
    },
    "state": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "thermostatMode": {
          "$ref": "#/definitions/ThermostatMode"
        },
        "thermostatTemperatureAmbient": {
          "type": "number"
        },
        "thermostatHumidityAmbient": {
          "type": "number",
          "minimum": 0,
          "maximum": 100
        },
        "thermostatTemperatureSetpoint": {
          "type": "number"
        },
        "thermostatTemperatureSetpointHigh": {
          "type": "number"
        },
        "thermostatTemperatureSetpointLow": {
          "type": "number"
        },
        "online": {
          "type": "boolean"
        }
      },
      "required": [
        "online",
        "thermostatMode",
        "thermostatTemperatureAmbient",
        "thermostatTemperatureSetpoint"
      ]
    },
    "attributes": {
      "type": "object",
      "properties": {
        "availableThermostatModes": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/ThermostatMode"
          }
        },
        "thermostatTemperatureRange": {
          "type": "object",
          "properties": {
            "minThresholdCelsius": {
              "type": "number"
            },
            "maxThresholdCelsius": {
              "type": "number"
            }
          },
          "required": [
            "minThresholdCelsius",
            "maxThresholdCelsius"
          ],
          "additionalProperties": false
        },
        "thermostatTemperatureUnit": {
          "type": "string",
          "enum": [
            "C",
            "F"
          ]
        },
        "bufferRangeCelsius": {
          "type": "number"
        },
        "commandOnlyTemperatureSetting": {
          "type": "boolean"
        },
        "queryOnlyTemperatureSetting": {
          "type": "boolean"
        }
      },
      "required": [
        "availableThermostatModes",
        "thermostatTemperatureUnit"
      ],
      "additionalProperties": false
    }
  },
  "required": [
    "attributes",
    "id",
    "name",
    "noraSpecific",
    "state",
    "traits",
    "type",
    "willReportState"
  ],
  "definitions": {
    "Trait": {
      "type": "string",
      "enum": [
        "action.devices.traits.TemperatureSetting"
      ]
    },
    "TwoFactor": {
      "anyOf": [
        {
          "type": "object",
          "properties": {
            "type": {
              "type": "string",
              "const": "ack"
            }
          },
          "required": [
            "type"
          ],
          "additionalProperties": false
        },
        {
          "type": "object",
          "properties": {
            "type": {
              "type": "string",
              "const": "pin"
            },
            "pin": {
              "type": "string",
              "maxLength": 20
            }
          },
          "required": [
            "type",
            "pin"
          ],
          "additionalProperties": false
        }
      ]
    },
    "ThermostatMode": {
      "type": "string",
      "enum": [
        "off",
        "heat",
        "cool",
        "on",
        "auto",
        "fan-only",
        "purifier",
        "eco",
        "dry",
        "heatcool"
      ]
    }
  }
},
volume: {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "traits": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/Trait"
      }
    },
    "id": {
      "type": "string"
    },
    "type": {
      "type": "string",
      "enum": [
        "action.devices.types.LIGHT",
        "action.devices.types.SWITCH",
        "action.devices.types.SCENE",
        "action.devices.types.OUTLET",
        "action.devices.types.THERMOSTAT",
        "action.devices.types.SPEAKER",
        "action.devices.types.BLINDS",
        "action.devices.types.GARAGE",
        "action.devices.types.LOCK"
      ]
    },
    "name": {
      "type": "object",
      "properties": {
        "defaultNames": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "name": {
          "type": "string",
          "maxLength": 40
        },
        "nicknames": {
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      },
      "required": [
        "name"
      ],
      "additionalProperties": false
    },
    "willReportState": {
      "type": "boolean"
    },
    "notificationSupportedByAgent": {
      "type": "boolean"
    },
    "roomHint": {
      "type": "string",
      "maxLength": 40
    },
    "deviceInfo": {
      "type": "object",
      "properties": {
        "manufacturer": {
          "type": "string"
        },
        "model": {
          "type": "string"
        },
        "hwVersion": {
          "type": "string"
        },
        "swVersion": {
          "type": "string"
        }
      },
      "required": [
        "manufacturer",
        "model",
        "hwVersion",
        "swVersion"
      ],
      "additionalProperties": false
    },
    "otherDeviceIds": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "agentId": {
            "type": "string"
          },
          "deviceId": {
            "type": "string"
          }
        },
        "required": [
          "deviceId"
        ],
        "additionalProperties": false
      }
    },
    "customData": {
      "type": "object",
      "properties": {
        "proxyId": {
          "type": "string",
          "description": "Used for local execution to identity the instance responsible of this device",
          "maxLength": 40
        }
      },
      "additionalProperties": false
    },
    "noraSpecific": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "disabled": {
          "type": "boolean"
        },
        "twoFactor": {
          "$ref": "#/definitions/TwoFactor"
        }
      }
    },
    "state": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "currentVolume": {
          "type": "number"
        },
        "isMuted": {
          "type": "boolean"
        },
        "online": {
          "type": "boolean"
        }
      },
      "required": [
        "currentVolume",
        "online"
      ]
    },
    "attributes": {
      "type": "object",
      "properties": {
        "volumeMaxLevel": {
          "type": "number"
        },
        "volumeCanMuteAndUnmute": {
          "type": "boolean"
        },
        "volumeDefaultPercentage": {
          "type": "number"
        },
        "levelStepSize": {
          "type": "number"
        },
        "commandOnlyVolume": {
          "type": "boolean"
        }
      },
      "required": [
        "volumeMaxLevel",
        "volumeCanMuteAndUnmute"
      ],
      "additionalProperties": false
    }
  },
  "required": [
    "attributes",
    "id",
    "name",
    "noraSpecific",
    "state",
    "traits",
    "type",
    "willReportState"
  ],
  "definitions": {
    "Trait": {
      "type": "string",
      "enum": [
        "action.devices.traits.Volume"
      ]
    },
    "TwoFactor": {
      "anyOf": [
        {
          "type": "object",
          "properties": {
            "type": {
              "type": "string",
              "const": "ack"
            }
          },
          "required": [
            "type"
          ],
          "additionalProperties": false
        },
        {
          "type": "object",
          "properties": {
            "type": {
              "type": "string",
              "const": "pin"
            },
            "pin": {
              "type": "string",
              "maxLength": 20
            }
          },
          "required": [
            "type",
            "pin"
          ],
          "additionalProperties": false
        }
      ]
    }
  }
},
openclose: {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "traits": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/Trait"
      }
    },
    "id": {
      "type": "string"
    },
    "type": {
      "type": "string",
      "enum": [
        "action.devices.types.LIGHT",
        "action.devices.types.SWITCH",
        "action.devices.types.SCENE",
        "action.devices.types.OUTLET",
        "action.devices.types.THERMOSTAT",
        "action.devices.types.SPEAKER",
        "action.devices.types.BLINDS",
        "action.devices.types.GARAGE",
        "action.devices.types.LOCK"
      ]
    },
    "name": {
      "type": "object",
      "properties": {
        "defaultNames": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "name": {
          "type": "string",
          "maxLength": 40
        },
        "nicknames": {
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      },
      "required": [
        "name"
      ],
      "additionalProperties": false
    },
    "willReportState": {
      "type": "boolean"
    },
    "notificationSupportedByAgent": {
      "type": "boolean"
    },
    "roomHint": {
      "type": "string",
      "maxLength": 40
    },
    "deviceInfo": {
      "type": "object",
      "properties": {
        "manufacturer": {
          "type": "string"
        },
        "model": {
          "type": "string"
        },
        "hwVersion": {
          "type": "string"
        },
        "swVersion": {
          "type": "string"
        }
      },
      "required": [
        "manufacturer",
        "model",
        "hwVersion",
        "swVersion"
      ],
      "additionalProperties": false
    },
    "otherDeviceIds": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "agentId": {
            "type": "string"
          },
          "deviceId": {
            "type": "string"
          }
        },
        "required": [
          "deviceId"
        ],
        "additionalProperties": false
      }
    },
    "customData": {
      "type": "object",
      "properties": {
        "proxyId": {
          "type": "string",
          "description": "Used for local execution to identity the instance responsible of this device",
          "maxLength": 40
        }
      },
      "additionalProperties": false
    },
    "noraSpecific": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "disabled": {
          "type": "boolean"
        },
        "twoFactor": {
          "$ref": "#/definitions/TwoFactor"
        }
      }
    },
    "state": {
      "anyOf": [
        {
          "type": "object",
          "additionalProperties": false,
          "properties": {
            "openPercent": {
              "type": "number"
            },
            "online": {
              "type": "boolean"
            }
          },
          "required": [
            "online",
            "openPercent"
          ]
        },
        {
          "type": "object",
          "additionalProperties": false,
          "properties": {
            "openState": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "openPercent": {
                    "type": "number"
                  },
                  "openDirection": {
                    "$ref": "#/definitions/OpenCloseDirection"
                  }
                },
                "required": [
                  "openPercent",
                  "openDirection"
                ],
                "additionalProperties": false
              }
            },
            "online": {
              "type": "boolean"
            }
          },
          "required": [
            "online",
            "openState"
          ]
        }
      ]
    },
    "attributes": {
      "type": "object",
      "properties": {
        "discreteOnlyOpenClose": {
          "type": "boolean"
        },
        "openDirection": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/OpenCloseDirection"
          }
        },
        "commandOnlyOpenClose": {
          "type": "boolean"
        },
        "queryOnlyOpenClose": {
          "type": "boolean"
        }
      },
      "additionalProperties": false
    }
  },
  "required": [
    "attributes",
    "id",
    "name",
    "noraSpecific",
    "state",
    "traits",
    "type",
    "willReportState"
  ],
  "definitions": {
    "Trait": {
      "type": "string",
      "enum": [
        "action.devices.traits.OpenClose"
      ]
    },
    "TwoFactor": {
      "anyOf": [
        {
          "type": "object",
          "properties": {
            "type": {
              "type": "string",
              "const": "ack"
            }
          },
          "required": [
            "type"
          ],
          "additionalProperties": false
        },
        {
          "type": "object",
          "properties": {
            "type": {
              "type": "string",
              "const": "pin"
            },
            "pin": {
              "type": "string",
              "maxLength": 20
            }
          },
          "required": [
            "type",
            "pin"
          ],
          "additionalProperties": false
        }
      ]
    },
    "OpenCloseDirection": {
      "type": "string",
      "enum": [
        "UP",
        "DOWN",
        "LEFT",
        "RIGHT",
        "IN",
        "OUT"
      ]
    }
  }
},
mediastate: {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "traits": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/Trait"
      }
    },
    "id": {
      "type": "string"
    },
    "type": {
      "type": "string",
      "enum": [
        "action.devices.types.LIGHT",
        "action.devices.types.SWITCH",
        "action.devices.types.SCENE",
        "action.devices.types.OUTLET",
        "action.devices.types.THERMOSTAT",
        "action.devices.types.SPEAKER",
        "action.devices.types.BLINDS",
        "action.devices.types.GARAGE",
        "action.devices.types.LOCK"
      ]
    },
    "name": {
      "type": "object",
      "properties": {
        "defaultNames": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "name": {
          "type": "string",
          "maxLength": 40
        },
        "nicknames": {
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      },
      "required": [
        "name"
      ],
      "additionalProperties": false
    },
    "willReportState": {
      "type": "boolean"
    },
    "notificationSupportedByAgent": {
      "type": "boolean"
    },
    "roomHint": {
      "type": "string",
      "maxLength": 40
    },
    "deviceInfo": {
      "type": "object",
      "properties": {
        "manufacturer": {
          "type": "string"
        },
        "model": {
          "type": "string"
        },
        "hwVersion": {
          "type": "string"
        },
        "swVersion": {
          "type": "string"
        }
      },
      "required": [
        "manufacturer",
        "model",
        "hwVersion",
        "swVersion"
      ],
      "additionalProperties": false
    },
    "otherDeviceIds": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "agentId": {
            "type": "string"
          },
          "deviceId": {
            "type": "string"
          }
        },
        "required": [
          "deviceId"
        ],
        "additionalProperties": false
      }
    },
    "customData": {
      "type": "object",
      "properties": {
        "proxyId": {
          "type": "string",
          "description": "Used for local execution to identity the instance responsible of this device",
          "maxLength": 40
        }
      },
      "additionalProperties": false
    },
    "noraSpecific": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "disabled": {
          "type": "boolean"
        },
        "twoFactor": {
          "$ref": "#/definitions/TwoFactor"
        }
      }
    },
    "state": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "activityState": {
          "type": "string",
          "enum": [
            "INACTIVE",
            "STANDBY",
            "ACTIVE"
          ]
        },
        "playbackState": {
          "type": "string",
          "enum": [
            "PAUSED",
            "PLAYING",
            "FAST_FORWARDING",
            "REWINDING",
            "BUFFERING",
            "STOPPED"
          ]
        },
        "online": {
          "type": "boolean"
        }
      },
      "required": [
        "activityState",
        "online",
        "playbackState"
      ]
    },
    "attributes": {
      "type": "object",
      "properties": {
        "supportActivityState": {
          "type": "boolean"
        },
        "supportPlaybackState": {
          "type": "boolean"
        }
      },
      "additionalProperties": false
    }
  },
  "required": [
    "attributes",
    "id",
    "name",
    "noraSpecific",
    "state",
    "traits",
    "type",
    "willReportState"
  ],
  "definitions": {
    "Trait": {
      "type": "string",
      "enum": [
        "action.devices.traits.MediaState"
      ]
    },
    "TwoFactor": {
      "anyOf": [
        {
          "type": "object",
          "properties": {
            "type": {
              "type": "string",
              "const": "ack"
            }
          },
          "required": [
            "type"
          ],
          "additionalProperties": false
        },
        {
          "type": "object",
          "properties": {
            "type": {
              "type": "string",
              "const": "pin"
            },
            "pin": {
              "type": "string",
              "maxLength": 20
            }
          },
          "required": [
            "type",
            "pin"
          ],
          "additionalProperties": false
        }
      ]
    }
  }
},
        },
        state: {
            brightness: {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "online": {
      "type": "boolean"
    },
    "brightness": {
      "type": "number"
    }
  },
  "additionalProperties": false,
  "definitions": {}
},
colorsetting: {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "online": {
      "type": "boolean"
    },
    "color": {
      "type": "object",
      "properties": {
        "temperatureK": {
          "type": "number"
        },
        "spectrumRgb": {
          "type": "number"
        },
        "spectrumHsv": {
          "type": "object",
          "properties": {
            "hue": {
              "type": "number"
            },
            "saturation": {
              "type": "number"
            },
            "value": {
              "type": "number"
            }
          },
          "required": [
            "hue",
            "saturation",
            "value"
          ],
          "additionalProperties": false
        }
      },
      "additionalProperties": false
    }
  },
  "additionalProperties": false,
  "definitions": {}
},
onoff: {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "online": {
      "type": "boolean"
    },
    "on": {
      "type": "boolean"
    }
  },
  "additionalProperties": false,
  "definitions": {}
},
lockunlock: {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "online": {
      "type": "boolean"
    },
    "isLocked": {
      "type": "boolean"
    },
    "isJammed": {
      "type": "boolean"
    }
  },
  "additionalProperties": false,
  "definitions": {}
},
scene: {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "online": {
      "type": "boolean"
    }
  },
  "additionalProperties": false,
  "definitions": {}
},
temperaturesetting: {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "online": {
      "type": "boolean"
    },
    "thermostatMode": {
      "$ref": "#/definitions/ThermostatMode"
    },
    "thermostatTemperatureAmbient": {
      "type": "number"
    },
    "thermostatHumidityAmbient": {
      "type": "number",
      "minimum": 0,
      "maximum": 100
    },
    "thermostatTemperatureSetpoint": {
      "type": "number"
    },
    "thermostatTemperatureSetpointHigh": {
      "type": "number"
    },
    "thermostatTemperatureSetpointLow": {
      "type": "number"
    }
  },
  "additionalProperties": false,
  "definitions": {
    "ThermostatMode": {
      "type": "string",
      "enum": [
        "off",
        "heat",
        "cool",
        "on",
        "auto",
        "fan-only",
        "purifier",
        "eco",
        "dry",
        "heatcool"
      ]
    }
  }
},
volume: {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "online": {
      "type": "boolean"
    },
    "currentVolume": {
      "type": "number"
    },
    "isMuted": {
      "type": "boolean"
    }
  },
  "additionalProperties": false,
  "definitions": {}
},
openclose: {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "online": {
      "type": "boolean"
    },
    "openPercent": {
      "type": "number"
    },
    "openState": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "openPercent": {
            "type": "number"
          },
          "openDirection": {
            "$ref": "#/definitions/OpenCloseDirection"
          }
        },
        "required": [
          "openPercent",
          "openDirection"
        ],
        "additionalProperties": false
      }
    }
  },
  "additionalProperties": false,
  "definitions": {
    "OpenCloseDirection": {
      "type": "string",
      "enum": [
        "UP",
        "DOWN",
        "LEFT",
        "RIGHT",
        "IN",
        "OUT"
      ]
    }
  }
},
mediastate: {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "online": {
      "type": "boolean"
    },
    "activityState": {
      "type": "string",
      "enum": [
        "INACTIVE",
        "STANDBY",
        "ACTIVE"
      ]
    },
    "playbackState": {
      "type": "string",
      "enum": [
        "PAUSED",
        "PLAYING",
        "FAST_FORWARDING",
        "REWINDING",
        "BUFFERING",
        "STOPPED"
      ]
    }
  },
  "additionalProperties": false,
  "definitions": {}
},
        },
    };
    