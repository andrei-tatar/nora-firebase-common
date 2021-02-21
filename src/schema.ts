
/* This file is auto-generated during build. Don't modify it! any changes will be overwritten. */
/* tslint:disable */

export type SchemaType = keyof typeof Schema;

export type IndividualSchemaType = keyof typeof IndividualSchema;

export type TraitName = keyof typeof Schema['device'];

export const Schema = {
  "device": {
    "brightness": {
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
            "action.devices.types.LOCK",
            "action.devices.types.SENSOR",
            "action.devices.types.CLOSET",
            "action.devices.types.AWNING",
            "action.devices.types.CURTAIN",
            "action.devices.types.DOOR",
            "action.devices.types.DRAWER",
            "action.devices.types.BLINDS",
            "action.devices.types.GARAGE",
            "action.devices.types.GATE",
            "action.devices.types.PERGOLA",
            "action.devices.types.SHUTTER",
            "action.devices.types.VALVE",
            "action.devices.types.WINDOW",
            "action.devices.types.HUMIDIFIER"
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
        "structureHint": {
          "type": "string",
          "description": "Name of the home this device belongs to",
          "maxLength": 40
        },
        "roomHint": {
          "type": "string",
          "description": "Name of the room this device belongs to",
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
    "colorsetting": {
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
            "action.devices.types.LOCK",
            "action.devices.types.SENSOR",
            "action.devices.types.CLOSET",
            "action.devices.types.AWNING",
            "action.devices.types.CURTAIN",
            "action.devices.types.DOOR",
            "action.devices.types.DRAWER",
            "action.devices.types.BLINDS",
            "action.devices.types.GARAGE",
            "action.devices.types.GATE",
            "action.devices.types.PERGOLA",
            "action.devices.types.SHUTTER",
            "action.devices.types.VALVE",
            "action.devices.types.WINDOW",
            "action.devices.types.HUMIDIFIER"
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
        "structureHint": {
          "type": "string",
          "description": "Name of the home this device belongs to",
          "maxLength": 40
        },
        "roomHint": {
          "type": "string",
          "description": "Name of the room this device belongs to",
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
              "anyOf": [
                {
                  "type": "object",
                  "properties": {
                    "temperatureK": {
                      "type": "number"
                    }
                  },
                  "required": [
                    "temperatureK"
                  ],
                  "additionalProperties": false
                },
                {
                  "type": "object",
                  "properties": {
                    "spectrumRgb": {
                      "type": "number"
                    }
                  },
                  "required": [
                    "spectrumRgb"
                  ],
                  "additionalProperties": false
                },
                {
                  "type": "object",
                  "properties": {
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
                  "required": [
                    "spectrumHsv"
                  ],
                  "additionalProperties": false
                }
              ]
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
          "anyOf": [
            {
              "type": "object",
              "additionalProperties": false,
              "properties": {
                "colorModel": {
                  "type": "string",
                  "enum": [
                    "rgb",
                    "hsv"
                  ]
                },
                "commandOnlyColorSetting": {
                  "type": "boolean"
                }
              },
              "required": [
                "colorModel"
              ]
            },
            {
              "type": "object",
              "additionalProperties": false,
              "properties": {
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
                },
                "commandOnlyColorSetting": {
                  "type": "boolean"
                }
              },
              "required": [
                "colorTemperatureRange"
              ]
            }
          ]
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
    "onoff": {
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
            "action.devices.types.LOCK",
            "action.devices.types.SENSOR",
            "action.devices.types.CLOSET",
            "action.devices.types.AWNING",
            "action.devices.types.CURTAIN",
            "action.devices.types.DOOR",
            "action.devices.types.DRAWER",
            "action.devices.types.BLINDS",
            "action.devices.types.GARAGE",
            "action.devices.types.GATE",
            "action.devices.types.PERGOLA",
            "action.devices.types.SHUTTER",
            "action.devices.types.VALVE",
            "action.devices.types.WINDOW",
            "action.devices.types.HUMIDIFIER"
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
        "structureHint": {
          "type": "string",
          "description": "Name of the home this device belongs to",
          "maxLength": 40
        },
        "roomHint": {
          "type": "string",
          "description": "Name of the room this device belongs to",
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
    "lockunlock": {
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
            "action.devices.types.LOCK",
            "action.devices.types.SENSOR",
            "action.devices.types.CLOSET",
            "action.devices.types.AWNING",
            "action.devices.types.CURTAIN",
            "action.devices.types.DOOR",
            "action.devices.types.DRAWER",
            "action.devices.types.BLINDS",
            "action.devices.types.GARAGE",
            "action.devices.types.GATE",
            "action.devices.types.PERGOLA",
            "action.devices.types.SHUTTER",
            "action.devices.types.VALVE",
            "action.devices.types.WINDOW",
            "action.devices.types.HUMIDIFIER"
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
        "structureHint": {
          "type": "string",
          "description": "Name of the home this device belongs to",
          "maxLength": 40
        },
        "roomHint": {
          "type": "string",
          "description": "Name of the room this device belongs to",
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
    "scene": {
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
            "action.devices.types.LOCK",
            "action.devices.types.SENSOR",
            "action.devices.types.CLOSET",
            "action.devices.types.AWNING",
            "action.devices.types.CURTAIN",
            "action.devices.types.DOOR",
            "action.devices.types.DRAWER",
            "action.devices.types.BLINDS",
            "action.devices.types.GARAGE",
            "action.devices.types.GATE",
            "action.devices.types.PERGOLA",
            "action.devices.types.SHUTTER",
            "action.devices.types.VALVE",
            "action.devices.types.WINDOW",
            "action.devices.types.HUMIDIFIER"
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
        "structureHint": {
          "type": "string",
          "description": "Name of the home this device belongs to",
          "maxLength": 40
        },
        "roomHint": {
          "type": "string",
          "description": "Name of the room this device belongs to",
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
    "temperaturesetting": {
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
            "action.devices.types.LOCK",
            "action.devices.types.SENSOR",
            "action.devices.types.CLOSET",
            "action.devices.types.AWNING",
            "action.devices.types.CURTAIN",
            "action.devices.types.DOOR",
            "action.devices.types.DRAWER",
            "action.devices.types.BLINDS",
            "action.devices.types.GARAGE",
            "action.devices.types.GATE",
            "action.devices.types.PERGOLA",
            "action.devices.types.SHUTTER",
            "action.devices.types.VALVE",
            "action.devices.types.WINDOW",
            "action.devices.types.HUMIDIFIER"
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
        "structureHint": {
          "type": "string",
          "description": "Name of the home this device belongs to",
          "maxLength": 40
        },
        "roomHint": {
          "type": "string",
          "description": "Name of the room this device belongs to",
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
    "volume": {
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
            "action.devices.types.LOCK",
            "action.devices.types.SENSOR",
            "action.devices.types.CLOSET",
            "action.devices.types.AWNING",
            "action.devices.types.CURTAIN",
            "action.devices.types.DOOR",
            "action.devices.types.DRAWER",
            "action.devices.types.BLINDS",
            "action.devices.types.GARAGE",
            "action.devices.types.GATE",
            "action.devices.types.PERGOLA",
            "action.devices.types.SHUTTER",
            "action.devices.types.VALVE",
            "action.devices.types.WINDOW",
            "action.devices.types.HUMIDIFIER"
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
        "structureHint": {
          "type": "string",
          "description": "Name of the home this device belongs to",
          "maxLength": 40
        },
        "roomHint": {
          "type": "string",
          "description": "Name of the room this device belongs to",
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
    "openclose": {
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
            "action.devices.types.LOCK",
            "action.devices.types.SENSOR",
            "action.devices.types.CLOSET",
            "action.devices.types.AWNING",
            "action.devices.types.CURTAIN",
            "action.devices.types.DOOR",
            "action.devices.types.DRAWER",
            "action.devices.types.BLINDS",
            "action.devices.types.GARAGE",
            "action.devices.types.GATE",
            "action.devices.types.PERGOLA",
            "action.devices.types.SHUTTER",
            "action.devices.types.VALVE",
            "action.devices.types.WINDOW",
            "action.devices.types.HUMIDIFIER"
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
        "structureHint": {
          "type": "string",
          "description": "Name of the home this device belongs to",
          "maxLength": 40
        },
        "roomHint": {
          "type": "string",
          "description": "Name of the room this device belongs to",
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
                  "type": "number",
                  "minimum": 0,
                  "maximum": 100
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
                        "type": "number",
                        "minimum": 0,
                        "maximum": 100
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
    "mediastate": {
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
            "action.devices.types.LOCK",
            "action.devices.types.SENSOR",
            "action.devices.types.CLOSET",
            "action.devices.types.AWNING",
            "action.devices.types.CURTAIN",
            "action.devices.types.DOOR",
            "action.devices.types.DRAWER",
            "action.devices.types.BLINDS",
            "action.devices.types.GARAGE",
            "action.devices.types.GATE",
            "action.devices.types.PERGOLA",
            "action.devices.types.SHUTTER",
            "action.devices.types.VALVE",
            "action.devices.types.WINDOW",
            "action.devices.types.HUMIDIFIER"
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
        "structureHint": {
          "type": "string",
          "description": "Name of the home this device belongs to",
          "maxLength": 40
        },
        "roomHint": {
          "type": "string",
          "description": "Name of the room this device belongs to",
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
    "sensorstate": {
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
            "action.devices.types.LOCK",
            "action.devices.types.SENSOR",
            "action.devices.types.CLOSET",
            "action.devices.types.AWNING",
            "action.devices.types.CURTAIN",
            "action.devices.types.DOOR",
            "action.devices.types.DRAWER",
            "action.devices.types.BLINDS",
            "action.devices.types.GARAGE",
            "action.devices.types.GATE",
            "action.devices.types.PERGOLA",
            "action.devices.types.SHUTTER",
            "action.devices.types.VALVE",
            "action.devices.types.WINDOW",
            "action.devices.types.HUMIDIFIER"
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
        "structureHint": {
          "type": "string",
          "description": "Name of the home this device belongs to",
          "maxLength": 40
        },
        "roomHint": {
          "type": "string",
          "description": "Name of the room this device belongs to",
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
            "currentSensorStateData": {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "type": "object",
                    "additionalProperties": false,
                    "properties": {
                      "rawValue": {
                        "type": "number"
                      },
                      "currentSensorState": {
                        "type": "string",
                        "enum": [
                          "healthy",
                          "moderate",
                          "unhealthy",
                          "unhealthy for sensitive groups",
                          "very unhealthy",
                          "hazardous",
                          "good",
                          "fair",
                          "poor",
                          "very poor",
                          "severe",
                          "unknown"
                        ]
                      },
                      "name": {
                        "type": "string",
                        "const": "AirQuality"
                      }
                    },
                    "required": [
                      "currentSensorState",
                      "name",
                      "rawValue"
                    ]
                  },
                  {
                    "type": "object",
                    "additionalProperties": false,
                    "properties": {
                      "rawValue": {
                        "type": "number"
                      },
                      "currentSensorState": {
                        "type": "string",
                        "enum": [
                          "carbon monoxide detected",
                          "high",
                          "no carbon monoxide detected",
                          "unknown"
                        ]
                      },
                      "name": {
                        "type": "string",
                        "const": "CarbonMonoxideLevel"
                      }
                    },
                    "required": [
                      "currentSensorState",
                      "name",
                      "rawValue"
                    ]
                  },
                  {
                    "type": "object",
                    "additionalProperties": false,
                    "properties": {
                      "rawValue": {
                        "type": "number"
                      },
                      "currentSensorState": {
                        "type": "string",
                        "enum": [
                          "smoke detected",
                          "high",
                          "no smoke detected",
                          "unknown"
                        ]
                      },
                      "name": {
                        "type": "string",
                        "const": "SmokeLevel"
                      }
                    },
                    "required": [
                      "currentSensorState",
                      "name",
                      "rawValue"
                    ]
                  },
                  {
                    "type": "object",
                    "additionalProperties": false,
                    "properties": {
                      "currentSensorState": {
                        "type": "string",
                        "enum": [
                          "clean",
                          "dirty",
                          "needs replacement",
                          "unknown"
                        ]
                      },
                      "name": {
                        "type": "string",
                        "const": "FilterCleanliness"
                      }
                    },
                    "required": [
                      "currentSensorState",
                      "name"
                    ]
                  },
                  {
                    "type": "object",
                    "additionalProperties": false,
                    "properties": {
                      "currentSensorState": {
                        "type": "string",
                        "enum": [
                          "leak",
                          "no leak",
                          "unknown"
                        ]
                      },
                      "name": {
                        "type": "string",
                        "const": "WaterLeak"
                      }
                    },
                    "required": [
                      "currentSensorState",
                      "name"
                    ]
                  },
                  {
                    "type": "object",
                    "additionalProperties": false,
                    "properties": {
                      "currentSensorState": {
                        "type": "string",
                        "enum": [
                          "rain detected",
                          "no rain detected",
                          "unknown"
                        ]
                      },
                      "name": {
                        "type": "string",
                        "const": "RainDetection"
                      }
                    },
                    "required": [
                      "currentSensorState",
                      "name"
                    ]
                  },
                  {
                    "type": "object",
                    "additionalProperties": false,
                    "properties": {
                      "rawValue": {
                        "type": "number",
                        "minimum": 0,
                        "maximum": 100
                      },
                      "currentSensorState": {
                        "type": "string",
                        "enum": [
                          "new",
                          "good",
                          "replace soon",
                          "replace now",
                          "unknown"
                        ]
                      },
                      "name": {
                        "type": "string",
                        "const": "FilterLifeTime"
                      }
                    },
                    "required": [
                      "currentSensorState",
                      "name",
                      "rawValue"
                    ]
                  },
                  {
                    "type": "object",
                    "additionalProperties": false,
                    "properties": {
                      "rawValue": {
                        "type": "number",
                        "minimum": 0,
                        "maximum": 100
                      },
                      "name": {
                        "type": "string",
                        "enum": [
                          "PreFilterLifeTime",
                          "HEPAFilterLifeTime",
                          "Max2FilterLifeTime"
                        ]
                      }
                    },
                    "required": [
                      "name",
                      "rawValue"
                    ]
                  },
                  {
                    "type": "object",
                    "additionalProperties": false,
                    "properties": {
                      "rawValue": {
                        "type": "number"
                      },
                      "name": {
                        "type": "string",
                        "const": "CarbonDioxideLevel"
                      }
                    },
                    "required": [
                      "name",
                      "rawValue"
                    ]
                  },
                  {
                    "type": "object",
                    "additionalProperties": false,
                    "properties": {
                      "rawValue": {
                        "type": "number"
                      },
                      "name": {
                        "type": "string",
                        "enum": [
                          "PM2.5",
                          "PM10"
                        ]
                      }
                    },
                    "required": [
                      "name",
                      "rawValue"
                    ]
                  },
                  {
                    "type": "object",
                    "additionalProperties": false,
                    "properties": {
                      "rawValue": {
                        "type": "number"
                      },
                      "name": {
                        "type": "string",
                        "const": "VolatileOrganicCompounds"
                      }
                    },
                    "required": [
                      "name",
                      "rawValue"
                    ]
                  }
                ]
              }
            },
            "online": {
              "type": "boolean"
            }
          },
          "required": [
            "currentSensorStateData",
            "online"
          ]
        },
        "attributes": {
          "type": "object",
          "properties": {
            "sensorStatesSupported": {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "type": "object",
                    "additionalProperties": false,
                    "properties": {
                      "numericCapabilities": {
                        "type": "object",
                        "properties": {
                          "rawValueUnit": {
                            "type": "string",
                            "const": "AQI"
                          }
                        },
                        "required": [
                          "rawValueUnit"
                        ],
                        "additionalProperties": false
                      },
                      "descriptiveCapabilities": {
                        "type": "object",
                        "properties": {
                          "availableStates": {
                            "type": "array",
                            "items": {
                              "type": "string",
                              "enum": [
                                "healthy",
                                "moderate",
                                "unhealthy",
                                "unhealthy for sensitive groups",
                                "very unhealthy",
                                "hazardous",
                                "good",
                                "fair",
                                "poor",
                                "very poor",
                                "severe",
                                "unknown"
                              ]
                            }
                          }
                        },
                        "required": [
                          "availableStates"
                        ],
                        "additionalProperties": false
                      },
                      "name": {
                        "type": "string",
                        "const": "AirQuality"
                      }
                    },
                    "required": [
                      "descriptiveCapabilities",
                      "name",
                      "numericCapabilities"
                    ]
                  },
                  {
                    "type": "object",
                    "additionalProperties": false,
                    "properties": {
                      "numericCapabilities": {
                        "type": "object",
                        "properties": {
                          "rawValueUnit": {
                            "type": "string",
                            "const": "PARTS_PER_MILLION"
                          }
                        },
                        "required": [
                          "rawValueUnit"
                        ],
                        "additionalProperties": false
                      },
                      "descriptiveCapabilities": {
                        "type": "object",
                        "properties": {
                          "availableStates": {
                            "type": "array",
                            "items": {
                              "type": "string",
                              "enum": [
                                "carbon monoxide detected",
                                "high",
                                "no carbon monoxide detected",
                                "unknown"
                              ]
                            }
                          }
                        },
                        "required": [
                          "availableStates"
                        ],
                        "additionalProperties": false
                      },
                      "name": {
                        "type": "string",
                        "const": "CarbonMonoxideLevel"
                      }
                    },
                    "required": [
                      "descriptiveCapabilities",
                      "name",
                      "numericCapabilities"
                    ]
                  },
                  {
                    "type": "object",
                    "additionalProperties": false,
                    "properties": {
                      "numericCapabilities": {
                        "type": "object",
                        "properties": {
                          "rawValueUnit": {
                            "type": "string",
                            "const": "PARTS_PER_MILLION"
                          }
                        },
                        "required": [
                          "rawValueUnit"
                        ],
                        "additionalProperties": false
                      },
                      "descriptiveCapabilities": {
                        "type": "object",
                        "properties": {
                          "availableStates": {
                            "type": "array",
                            "items": {
                              "type": "string",
                              "enum": [
                                "smoke detected",
                                "high",
                                "no smoke detected",
                                "unknown"
                              ]
                            }
                          }
                        },
                        "required": [
                          "availableStates"
                        ],
                        "additionalProperties": false
                      },
                      "name": {
                        "type": "string",
                        "const": "SmokeLevel"
                      }
                    },
                    "required": [
                      "descriptiveCapabilities",
                      "name",
                      "numericCapabilities"
                    ]
                  },
                  {
                    "type": "object",
                    "additionalProperties": false,
                    "properties": {
                      "descriptiveCapabilities": {
                        "type": "object",
                        "properties": {
                          "availableStates": {
                            "type": "array",
                            "items": {
                              "type": "string",
                              "enum": [
                                "clean",
                                "dirty",
                                "needs replacement",
                                "unknown"
                              ]
                            }
                          }
                        },
                        "required": [
                          "availableStates"
                        ],
                        "additionalProperties": false
                      },
                      "name": {
                        "type": "string",
                        "const": "FilterCleanliness"
                      }
                    },
                    "required": [
                      "descriptiveCapabilities",
                      "name"
                    ]
                  },
                  {
                    "type": "object",
                    "additionalProperties": false,
                    "properties": {
                      "descriptiveCapabilities": {
                        "type": "object",
                        "properties": {
                          "availableStates": {
                            "type": "array",
                            "items": {
                              "type": "string",
                              "enum": [
                                "leak",
                                "no leak",
                                "unknown"
                              ]
                            }
                          }
                        },
                        "required": [
                          "availableStates"
                        ],
                        "additionalProperties": false
                      },
                      "name": {
                        "type": "string",
                        "const": "WaterLeak"
                      }
                    },
                    "required": [
                      "descriptiveCapabilities",
                      "name"
                    ]
                  },
                  {
                    "type": "object",
                    "additionalProperties": false,
                    "properties": {
                      "descriptiveCapabilities": {
                        "type": "object",
                        "properties": {
                          "availableStates": {
                            "type": "array",
                            "items": {
                              "type": "string",
                              "enum": [
                                "rain detected",
                                "no rain detected",
                                "unknown"
                              ]
                            }
                          }
                        },
                        "required": [
                          "availableStates"
                        ],
                        "additionalProperties": false
                      },
                      "name": {
                        "type": "string",
                        "const": "RainDetection"
                      }
                    },
                    "required": [
                      "descriptiveCapabilities",
                      "name"
                    ]
                  },
                  {
                    "type": "object",
                    "additionalProperties": false,
                    "properties": {
                      "numericCapabilities": {
                        "type": "object",
                        "properties": {
                          "rawValueUnit": {
                            "type": "string",
                            "const": "PERCENTAGE"
                          }
                        },
                        "required": [
                          "rawValueUnit"
                        ],
                        "additionalProperties": false
                      },
                      "descriptiveCapabilities": {
                        "type": "object",
                        "properties": {
                          "availableStates": {
                            "type": "array",
                            "items": {
                              "type": "string",
                              "enum": [
                                "new",
                                "good",
                                "replace soon",
                                "replace now",
                                "unknown"
                              ]
                            }
                          }
                        },
                        "required": [
                          "availableStates"
                        ],
                        "additionalProperties": false
                      },
                      "name": {
                        "type": "string",
                        "const": "FilterLifeTime"
                      }
                    },
                    "required": [
                      "descriptiveCapabilities",
                      "name",
                      "numericCapabilities"
                    ]
                  },
                  {
                    "type": "object",
                    "additionalProperties": false,
                    "properties": {
                      "numericCapabilities": {
                        "type": "object",
                        "properties": {
                          "rawValueUnit": {
                            "type": "string",
                            "const": "PERCENTAGE"
                          }
                        },
                        "required": [
                          "rawValueUnit"
                        ],
                        "additionalProperties": false
                      },
                      "name": {
                        "type": "string",
                        "enum": [
                          "PreFilterLifeTime",
                          "HEPAFilterLifeTime",
                          "Max2FilterLifeTime"
                        ]
                      }
                    },
                    "required": [
                      "name",
                      "numericCapabilities"
                    ]
                  },
                  {
                    "type": "object",
                    "additionalProperties": false,
                    "properties": {
                      "numericCapabilities": {
                        "type": "object",
                        "properties": {
                          "rawValueUnit": {
                            "type": "string",
                            "const": "PARTS_PER_MILLION"
                          }
                        },
                        "required": [
                          "rawValueUnit"
                        ],
                        "additionalProperties": false
                      },
                      "name": {
                        "type": "string",
                        "const": "CarbonDioxideLevel"
                      }
                    },
                    "required": [
                      "name",
                      "numericCapabilities"
                    ]
                  },
                  {
                    "type": "object",
                    "additionalProperties": false,
                    "properties": {
                      "numericCapabilities": {
                        "type": "object",
                        "properties": {
                          "rawValueUnit": {
                            "type": "string",
                            "const": "MICROGRAMS_PER_CUBIC_METER"
                          }
                        },
                        "required": [
                          "rawValueUnit"
                        ],
                        "additionalProperties": false
                      },
                      "name": {
                        "type": "string",
                        "enum": [
                          "PM2.5",
                          "PM10"
                        ]
                      }
                    },
                    "required": [
                      "name",
                      "numericCapabilities"
                    ]
                  },
                  {
                    "type": "object",
                    "additionalProperties": false,
                    "properties": {
                      "numericCapabilities": {
                        "type": "object",
                        "properties": {
                          "rawValueUnit": {
                            "type": "string",
                            "const": "PARTS_PER_MILLION"
                          }
                        },
                        "required": [
                          "rawValueUnit"
                        ],
                        "additionalProperties": false
                      },
                      "name": {
                        "type": "string",
                        "const": "VolatileOrganicCompounds"
                      }
                    },
                    "required": [
                      "name",
                      "numericCapabilities"
                    ]
                  }
                ]
              }
            }
          },
          "required": [
            "sensorStatesSupported"
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
            "action.devices.traits.SensorState"
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
    "temperaturecontrol": {
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
            "action.devices.types.LOCK",
            "action.devices.types.SENSOR",
            "action.devices.types.CLOSET",
            "action.devices.types.AWNING",
            "action.devices.types.CURTAIN",
            "action.devices.types.DOOR",
            "action.devices.types.DRAWER",
            "action.devices.types.BLINDS",
            "action.devices.types.GARAGE",
            "action.devices.types.GATE",
            "action.devices.types.PERGOLA",
            "action.devices.types.SHUTTER",
            "action.devices.types.VALVE",
            "action.devices.types.WINDOW",
            "action.devices.types.HUMIDIFIER"
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
        "structureHint": {
          "type": "string",
          "description": "Name of the home this device belongs to",
          "maxLength": 40
        },
        "roomHint": {
          "type": "string",
          "description": "Name of the room this device belongs to",
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
            "temperatureSetpointCelsius": {
              "type": "number"
            },
            "temperatureAmbientCelsius": {
              "type": "number"
            },
            "online": {
              "type": "boolean"
            }
          },
          "required": [
            "online",
            "temperatureAmbientCelsius",
            "temperatureSetpointCelsius"
          ]
        },
        "attributes": {
          "type": "object",
          "properties": {
            "temperatureRange": {
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
            "temperatureStepCelsius": {
              "type": "number"
            },
            "temperatureUnitForUX": {
              "type": "string",
              "enum": [
                "C",
                "F"
              ]
            },
            "commandOnlyTemperatureControl": {
              "type": "boolean"
            },
            "queryOnlyTemperatureControl": {
              "type": "boolean"
            }
          },
          "required": [
            "temperatureRange",
            "temperatureUnitForUX"
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
            "action.devices.traits.TemperatureControl"
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
    "humiditysetting": {
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
            "action.devices.types.LOCK",
            "action.devices.types.SENSOR",
            "action.devices.types.CLOSET",
            "action.devices.types.AWNING",
            "action.devices.types.CURTAIN",
            "action.devices.types.DOOR",
            "action.devices.types.DRAWER",
            "action.devices.types.BLINDS",
            "action.devices.types.GARAGE",
            "action.devices.types.GATE",
            "action.devices.types.PERGOLA",
            "action.devices.types.SHUTTER",
            "action.devices.types.VALVE",
            "action.devices.types.WINDOW",
            "action.devices.types.HUMIDIFIER"
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
        "structureHint": {
          "type": "string",
          "description": "Name of the home this device belongs to",
          "maxLength": 40
        },
        "roomHint": {
          "type": "string",
          "description": "Name of the room this device belongs to",
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
            "humiditySetpointPercent": {
              "type": "number",
              "minimum": 0,
              "maximum": 100
            },
            "humidityAmbientPercent": {
              "type": "number",
              "minimum": 0,
              "maximum": 100
            },
            "online": {
              "type": "boolean"
            }
          },
          "required": [
            "humidityAmbientPercent",
            "humiditySetpointPercent",
            "online"
          ]
        },
        "attributes": {
          "type": "object",
          "properties": {
            "humiditySetpointRange": {
              "type": "object",
              "properties": {
                "minPercent": {
                  "type": "number",
                  "minimum": 0,
                  "maximum": 100
                },
                "maxPercent": {
                  "type": "number",
                  "minimum": 0,
                  "maximum": 100
                }
              },
              "required": [
                "minPercent",
                "maxPercent"
              ],
              "additionalProperties": false
            },
            "commandOnlyHumiditySetting": {
              "type": "boolean"
            },
            "queryOnlyHumiditySetting": {
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
            "action.devices.traits.HumiditySetting"
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
    }
  },
  "state": {
    "brightness": {
      "$schema": "http://json-schema.org/draft-07/schema#",
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
      ],
      "definitions": {}
    },
    "colorsetting": {
      "$schema": "http://json-schema.org/draft-07/schema#",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "color": {
          "anyOf": [
            {
              "type": "object",
              "properties": {
                "temperatureK": {
                  "type": "number"
                }
              },
              "required": [
                "temperatureK"
              ],
              "additionalProperties": false
            },
            {
              "type": "object",
              "properties": {
                "spectrumRgb": {
                  "type": "number"
                }
              },
              "required": [
                "spectrumRgb"
              ],
              "additionalProperties": false
            },
            {
              "type": "object",
              "properties": {
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
              "required": [
                "spectrumHsv"
              ],
              "additionalProperties": false
            }
          ]
        },
        "online": {
          "type": "boolean"
        }
      },
      "required": [
        "color",
        "online"
      ],
      "definitions": {}
    },
    "onoff": {
      "$schema": "http://json-schema.org/draft-07/schema#",
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
      ],
      "definitions": {}
    },
    "lockunlock": {
      "$schema": "http://json-schema.org/draft-07/schema#",
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
      ],
      "definitions": {}
    },
    "scene": {
      "$schema": "http://json-schema.org/draft-07/schema#",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "online": {
          "type": "boolean"
        }
      },
      "required": [
        "online"
      ],
      "definitions": {}
    },
    "temperaturesetting": {
      "$schema": "http://json-schema.org/draft-07/schema#",
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
      ],
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
    "volume": {
      "$schema": "http://json-schema.org/draft-07/schema#",
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
      ],
      "definitions": {}
    },
    "openclose": {
      "$schema": "http://json-schema.org/draft-07/schema#",
      "anyOf": [
        {
          "type": "object",
          "additionalProperties": false,
          "properties": {
            "openPercent": {
              "type": "number",
              "minimum": 0,
              "maximum": 100
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
                    "type": "number",
                    "minimum": 0,
                    "maximum": 100
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
      ],
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
    "mediastate": {
      "$schema": "http://json-schema.org/draft-07/schema#",
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
      ],
      "definitions": {}
    },
    "sensorstate": {
      "$schema": "http://json-schema.org/draft-07/schema#",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "currentSensorStateData": {
          "type": "array",
          "items": {
            "anyOf": [
              {
                "type": "object",
                "additionalProperties": false,
                "properties": {
                  "rawValue": {
                    "type": "number"
                  },
                  "currentSensorState": {
                    "type": "string",
                    "enum": [
                      "healthy",
                      "moderate",
                      "unhealthy",
                      "unhealthy for sensitive groups",
                      "very unhealthy",
                      "hazardous",
                      "good",
                      "fair",
                      "poor",
                      "very poor",
                      "severe",
                      "unknown"
                    ]
                  },
                  "name": {
                    "type": "string",
                    "const": "AirQuality"
                  }
                },
                "required": [
                  "currentSensorState",
                  "name",
                  "rawValue"
                ]
              },
              {
                "type": "object",
                "additionalProperties": false,
                "properties": {
                  "rawValue": {
                    "type": "number"
                  },
                  "currentSensorState": {
                    "type": "string",
                    "enum": [
                      "carbon monoxide detected",
                      "high",
                      "no carbon monoxide detected",
                      "unknown"
                    ]
                  },
                  "name": {
                    "type": "string",
                    "const": "CarbonMonoxideLevel"
                  }
                },
                "required": [
                  "currentSensorState",
                  "name",
                  "rawValue"
                ]
              },
              {
                "type": "object",
                "additionalProperties": false,
                "properties": {
                  "rawValue": {
                    "type": "number"
                  },
                  "currentSensorState": {
                    "type": "string",
                    "enum": [
                      "smoke detected",
                      "high",
                      "no smoke detected",
                      "unknown"
                    ]
                  },
                  "name": {
                    "type": "string",
                    "const": "SmokeLevel"
                  }
                },
                "required": [
                  "currentSensorState",
                  "name",
                  "rawValue"
                ]
              },
              {
                "type": "object",
                "additionalProperties": false,
                "properties": {
                  "currentSensorState": {
                    "type": "string",
                    "enum": [
                      "clean",
                      "dirty",
                      "needs replacement",
                      "unknown"
                    ]
                  },
                  "name": {
                    "type": "string",
                    "const": "FilterCleanliness"
                  }
                },
                "required": [
                  "currentSensorState",
                  "name"
                ]
              },
              {
                "type": "object",
                "additionalProperties": false,
                "properties": {
                  "currentSensorState": {
                    "type": "string",
                    "enum": [
                      "leak",
                      "no leak",
                      "unknown"
                    ]
                  },
                  "name": {
                    "type": "string",
                    "const": "WaterLeak"
                  }
                },
                "required": [
                  "currentSensorState",
                  "name"
                ]
              },
              {
                "type": "object",
                "additionalProperties": false,
                "properties": {
                  "currentSensorState": {
                    "type": "string",
                    "enum": [
                      "rain detected",
                      "no rain detected",
                      "unknown"
                    ]
                  },
                  "name": {
                    "type": "string",
                    "const": "RainDetection"
                  }
                },
                "required": [
                  "currentSensorState",
                  "name"
                ]
              },
              {
                "type": "object",
                "additionalProperties": false,
                "properties": {
                  "rawValue": {
                    "type": "number",
                    "minimum": 0,
                    "maximum": 100
                  },
                  "currentSensorState": {
                    "type": "string",
                    "enum": [
                      "new",
                      "good",
                      "replace soon",
                      "replace now",
                      "unknown"
                    ]
                  },
                  "name": {
                    "type": "string",
                    "const": "FilterLifeTime"
                  }
                },
                "required": [
                  "currentSensorState",
                  "name",
                  "rawValue"
                ]
              },
              {
                "type": "object",
                "additionalProperties": false,
                "properties": {
                  "rawValue": {
                    "type": "number",
                    "minimum": 0,
                    "maximum": 100
                  },
                  "name": {
                    "type": "string",
                    "enum": [
                      "PreFilterLifeTime",
                      "HEPAFilterLifeTime",
                      "Max2FilterLifeTime"
                    ]
                  }
                },
                "required": [
                  "name",
                  "rawValue"
                ]
              },
              {
                "type": "object",
                "additionalProperties": false,
                "properties": {
                  "rawValue": {
                    "type": "number"
                  },
                  "name": {
                    "type": "string",
                    "const": "CarbonDioxideLevel"
                  }
                },
                "required": [
                  "name",
                  "rawValue"
                ]
              },
              {
                "type": "object",
                "additionalProperties": false,
                "properties": {
                  "rawValue": {
                    "type": "number"
                  },
                  "name": {
                    "type": "string",
                    "enum": [
                      "PM2.5",
                      "PM10"
                    ]
                  }
                },
                "required": [
                  "name",
                  "rawValue"
                ]
              },
              {
                "type": "object",
                "additionalProperties": false,
                "properties": {
                  "rawValue": {
                    "type": "number"
                  },
                  "name": {
                    "type": "string",
                    "const": "VolatileOrganicCompounds"
                  }
                },
                "required": [
                  "name",
                  "rawValue"
                ]
              }
            ]
          }
        },
        "online": {
          "type": "boolean"
        }
      },
      "required": [
        "currentSensorStateData",
        "online"
      ],
      "definitions": {}
    },
    "temperaturecontrol": {
      "$schema": "http://json-schema.org/draft-07/schema#",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "temperatureSetpointCelsius": {
          "type": "number"
        },
        "temperatureAmbientCelsius": {
          "type": "number"
        },
        "online": {
          "type": "boolean"
        }
      },
      "required": [
        "online",
        "temperatureAmbientCelsius",
        "temperatureSetpointCelsius"
      ],
      "definitions": {}
    },
    "humiditysetting": {
      "$schema": "http://json-schema.org/draft-07/schema#",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "humiditySetpointPercent": {
          "type": "number",
          "minimum": 0,
          "maximum": 100
        },
        "humidityAmbientPercent": {
          "type": "number",
          "minimum": 0,
          "maximum": 100
        },
        "online": {
          "type": "boolean"
        }
      },
      "required": [
        "humidityAmbientPercent",
        "humiditySetpointPercent",
        "online"
      ],
      "definitions": {}
    }
  },
  "state-update": {
    "brightness": {
      "$schema": "http://json-schema.org/draft-07/schema#",
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
      "definitions": {}
    },
    "colorsetting": {
      "$schema": "http://json-schema.org/draft-07/schema#",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "color": {
          "anyOf": [
            {
              "type": "object",
              "properties": {
                "temperatureK": {
                  "type": "number"
                }
              },
              "additionalProperties": false
            },
            {
              "type": "object",
              "properties": {
                "spectrumRgb": {
                  "type": "number"
                }
              },
              "additionalProperties": false
            },
            {
              "type": "object",
              "properties": {
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
                  "additionalProperties": false
                }
              },
              "additionalProperties": false
            }
          ]
        },
        "online": {
          "type": "boolean"
        }
      },
      "definitions": {}
    },
    "onoff": {
      "$schema": "http://json-schema.org/draft-07/schema#",
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
      "definitions": {}
    },
    "lockunlock": {
      "$schema": "http://json-schema.org/draft-07/schema#",
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
      "definitions": {}
    },
    "scene": {
      "$schema": "http://json-schema.org/draft-07/schema#",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "online": {
          "type": "boolean"
        }
      },
      "definitions": {}
    },
    "temperaturesetting": {
      "$schema": "http://json-schema.org/draft-07/schema#",
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
    "volume": {
      "$schema": "http://json-schema.org/draft-07/schema#",
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
      "definitions": {}
    },
    "openclose": {
      "$schema": "http://json-schema.org/draft-07/schema#",
      "anyOf": [
        {
          "type": "object",
          "additionalProperties": false,
          "properties": {
            "openPercent": {
              "type": "number",
              "minimum": 0,
              "maximum": 100
            },
            "online": {
              "type": "boolean"
            }
          }
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
                    "type": "number",
                    "minimum": 0,
                    "maximum": 100
                  },
                  "openDirection": {
                    "$ref": "#/definitions/OpenCloseDirection"
                  }
                },
                "additionalProperties": false
              }
            },
            "online": {
              "type": "boolean"
            }
          }
        }
      ],
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
    "mediastate": {
      "$schema": "http://json-schema.org/draft-07/schema#",
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
      "definitions": {}
    },
    "sensorstate": {
      "$schema": "http://json-schema.org/draft-07/schema#",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "currentSensorStateData": {
          "type": "array",
          "items": {
            "anyOf": [
              {
                "type": "object",
                "additionalProperties": false,
                "properties": {
                  "rawValue": {
                    "type": "number"
                  },
                  "currentSensorState": {
                    "type": "string",
                    "enum": [
                      "healthy",
                      "moderate",
                      "unhealthy",
                      "unhealthy for sensitive groups",
                      "very unhealthy",
                      "hazardous",
                      "good",
                      "fair",
                      "poor",
                      "very poor",
                      "severe",
                      "unknown"
                    ]
                  },
                  "name": {
                    "type": "string",
                    "const": "AirQuality"
                  }
                }
              },
              {
                "type": "object",
                "additionalProperties": false,
                "properties": {
                  "rawValue": {
                    "type": "number"
                  },
                  "currentSensorState": {
                    "type": "string",
                    "enum": [
                      "carbon monoxide detected",
                      "high",
                      "no carbon monoxide detected",
                      "unknown"
                    ]
                  },
                  "name": {
                    "type": "string",
                    "const": "CarbonMonoxideLevel"
                  }
                }
              },
              {
                "type": "object",
                "additionalProperties": false,
                "properties": {
                  "rawValue": {
                    "type": "number"
                  },
                  "currentSensorState": {
                    "type": "string",
                    "enum": [
                      "smoke detected",
                      "high",
                      "no smoke detected",
                      "unknown"
                    ]
                  },
                  "name": {
                    "type": "string",
                    "const": "SmokeLevel"
                  }
                }
              },
              {
                "type": "object",
                "additionalProperties": false,
                "properties": {
                  "currentSensorState": {
                    "type": "string",
                    "enum": [
                      "clean",
                      "dirty",
                      "needs replacement",
                      "unknown"
                    ]
                  },
                  "name": {
                    "type": "string",
                    "const": "FilterCleanliness"
                  }
                }
              },
              {
                "type": "object",
                "additionalProperties": false,
                "properties": {
                  "currentSensorState": {
                    "type": "string",
                    "enum": [
                      "leak",
                      "no leak",
                      "unknown"
                    ]
                  },
                  "name": {
                    "type": "string",
                    "const": "WaterLeak"
                  }
                }
              },
              {
                "type": "object",
                "additionalProperties": false,
                "properties": {
                  "currentSensorState": {
                    "type": "string",
                    "enum": [
                      "rain detected",
                      "no rain detected",
                      "unknown"
                    ]
                  },
                  "name": {
                    "type": "string",
                    "const": "RainDetection"
                  }
                }
              },
              {
                "type": "object",
                "additionalProperties": false,
                "properties": {
                  "rawValue": {
                    "type": "number",
                    "minimum": 0,
                    "maximum": 100
                  },
                  "currentSensorState": {
                    "type": "string",
                    "enum": [
                      "new",
                      "good",
                      "replace soon",
                      "replace now",
                      "unknown"
                    ]
                  },
                  "name": {
                    "type": "string",
                    "const": "FilterLifeTime"
                  }
                }
              },
              {
                "type": "object",
                "additionalProperties": false,
                "properties": {
                  "rawValue": {
                    "type": "number",
                    "minimum": 0,
                    "maximum": 100
                  },
                  "name": {
                    "type": "string",
                    "enum": [
                      "PreFilterLifeTime",
                      "HEPAFilterLifeTime",
                      "Max2FilterLifeTime"
                    ]
                  }
                }
              },
              {
                "type": "object",
                "additionalProperties": false,
                "properties": {
                  "rawValue": {
                    "type": "number"
                  },
                  "name": {
                    "type": "string",
                    "const": "CarbonDioxideLevel"
                  }
                }
              },
              {
                "type": "object",
                "additionalProperties": false,
                "properties": {
                  "rawValue": {
                    "type": "number"
                  },
                  "name": {
                    "type": "string",
                    "enum": [
                      "PM2.5",
                      "PM10"
                    ]
                  }
                }
              },
              {
                "type": "object",
                "additionalProperties": false,
                "properties": {
                  "rawValue": {
                    "type": "number"
                  },
                  "name": {
                    "type": "string",
                    "const": "VolatileOrganicCompounds"
                  }
                }
              }
            ]
          }
        },
        "online": {
          "type": "boolean"
        }
      },
      "definitions": {}
    },
    "temperaturecontrol": {
      "$schema": "http://json-schema.org/draft-07/schema#",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "temperatureSetpointCelsius": {
          "type": "number"
        },
        "temperatureAmbientCelsius": {
          "type": "number"
        },
        "online": {
          "type": "boolean"
        }
      },
      "definitions": {}
    },
    "humiditysetting": {
      "$schema": "http://json-schema.org/draft-07/schema#",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "humiditySetpointPercent": {
          "type": "number",
          "minimum": 0,
          "maximum": 100
        },
        "humidityAmbientPercent": {
          "type": "number",
          "minimum": 0,
          "maximum": 100
        },
        "online": {
          "type": "boolean"
        }
      },
      "definitions": {}
    }
  }
};

export const IndividualSchema = {
  "notification": {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
      "title": {
        "type": "string",
        "description": "Title text of the notification."
      },
      "actions": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "action": {
              "type": "string",
              "description": "An action available to the user when the notification is presented"
            },
            "icon": {
              "type": "string",
              "description": "Optional icon for a notification action."
            },
            "title": {
              "type": "string",
              "description": "Title of the notification action."
            }
          },
          "required": [
            "action",
            "title"
          ],
          "additionalProperties": false
        },
        "description": "An array of notification actions representing the actions available to the user when the notification is presented."
      },
      "badge": {
        "type": "string",
        "description": "URL of the image used to represent the notification when there is not enough space to display the notification itself."
      },
      "body": {
        "type": "string",
        "description": "Body text of the notification."
      },
      "dir": {
        "type": "string",
        "enum": [
          "auto",
          "ltr",
          "rtl"
        ],
        "description": "The direction in which to display the notification. Must be one of `auto`, `ltr` or `rtl`."
      },
      "icon": {
        "type": "string",
        "description": "URL to the notification icon."
      },
      "image": {
        "type": "string",
        "description": "URL of an image to be displayed in the notification."
      },
      "lang": {
        "type": "string",
        "description": "The notification's language as a BCP 47 language tag."
      },
      "renotify": {
        "type": "boolean",
        "description": "A boolean specifying whether the user should be notified after a new notification replaces an old one. Defaults to false."
      },
      "requireInteraction": {
        "type": "boolean",
        "description": "Indicates that a notification should remain active until the user clicks or dismisses it, rather than closing automatically. Defaults to false."
      },
      "silent": {
        "type": "boolean",
        "description": "A boolean specifying whether the notification should be silent. Defaults to false."
      },
      "tag": {
        "type": "string",
        "description": "An identifying tag for the notification."
      },
      "timestamp": {
        "type": "number",
        "description": "Timestamp of the notification. Refer to https://developer.mozilla.org/en-US/docs/Web/API/notification/timestamp for details."
      },
      "vibrate": {
        "anyOf": [
          {
            "type": "number"
          },
          {
            "type": "array",
            "items": {
              "type": "number"
            }
          }
        ],
        "description": "A vibration pattern for the device's vibration hardware to emit when the notification fires."
      },
      "data": {
        "type": "object",
        "properties": {
          "sender": {
            "type": "string",
            "description": "Used by NORA to identify the notification sender."
          }
        },
        "additionalProperties": false
      }
    },
    "additionalProperties": false,
    "definitions": {}
  }
};
