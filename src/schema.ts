
/* This file is auto-generated during build. Don't modify it! any changes will be overwritten. */
/* tslint:disable */

export type SchemaType = keyof typeof Schema;

export type IndividualSchemaType = keyof typeof IndividualSchema;

export type TraitName = keyof typeof Schema['device'];

export const Schema = {
  "device": {
    "armdisarm": {
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
          "$ref": "#/definitions/DeviceType"
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
            "returnArmDisarmErrorCodeIfStateAlreadySet": {
              "type": "boolean"
            },
            "disabled": {
              "type": "boolean"
            },
            "twoFactor": {
              "$ref": "#/definitions/TwoFactor"
            },
            "error": {
              "type": "object",
              "properties": {
                "msg": {
                  "type": "string"
                },
                "details": {}
              },
              "required": [
                "msg"
              ],
              "additionalProperties": false
            },
            "asyncCommandExecution": {
              "anyOf": [
                {
                  "type": "boolean"
                },
                {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                }
              ]
            },
            "commands": {
              "type": "object",
              "additionalProperties": {
                "$ref": "#/definitions/AsyncCommand"
              }
            },
            "responses": {
              "type": "object",
              "additionalProperties": {
                "$ref": "#/definitions/AsyncResponse"
              }
            }
          }
        },
        "state": {
          "type": "object",
          "additionalProperties": false,
          "properties": {
            "isArmed": {
              "type": "boolean"
            },
            "currentArmLevel": {
              "type": "string"
            },
            "exitAllowance": {
              "type": "number"
            },
            "online": {
              "type": "boolean"
            }
          },
          "required": [
            "isArmed",
            "online"
          ]
        },
        "attributes": {
          "type": "object",
          "properties": {
            "availableArmLevels": {
              "type": "object",
              "properties": {
                "levels": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {
                      "level_name": {
                        "type": "string"
                      },
                      "level_values": {
                        "type": "array",
                        "items": {
                          "type": "object",
                          "properties": {
                            "level_synonym": {
                              "type": "array",
                              "items": {
                                "type": "string"
                              }
                            },
                            "lang": {
                              "$ref": "#/definitions/Language"
                            }
                          },
                          "required": [
                            "level_synonym",
                            "lang"
                          ],
                          "additionalProperties": false
                        }
                      }
                    },
                    "required": [
                      "level_name",
                      "level_values"
                    ],
                    "additionalProperties": false
                  }
                },
                "ordered": {
                  "type": "boolean"
                }
              },
              "required": [
                "levels",
                "ordered"
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
            "action.devices.traits.ArmDisarm"
          ]
        },
        "DeviceType": {
          "type": "string",
          "enum": [
            "action.devices.types.LIGHT",
            "action.devices.types.SWITCH",
            "action.devices.types.SCENE",
            "action.devices.types.OUTLET",
            "action.devices.types.THERMOSTAT",
            "action.devices.types.AC_UNIT",
            "action.devices.types.LOCK",
            "action.devices.types.SENSOR",
            "action.devices.types.HUMIDIFIER",
            "action.devices.types.SMOKE_DETECTOR",
            "action.devices.types.FAN",
            "action.devices.types.SECURITYSYSTEM",
            "action.devices.types.CAMERA",
            "action.devices.types.AIRPURIFIER",
            "action.devices.types.SPEAKER",
            "action.devices.types.AUDIO_VIDEO_RECEIVER",
            "action.devices.types.REMOTECONTROL",
            "action.devices.types.SETTOP",
            "action.devices.types.SOUNDBAR",
            "action.devices.types.STREAMING_BOX",
            "action.devices.types.STREAMING_SOUNDBAR",
            "action.devices.types.STREAMING_STICK",
            "action.devices.types.TV",
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
            "action.devices.types.WINDOW"
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
        "AsyncCommand": {
          "type": "object",
          "properties": {
            "command": {
              "type": "string"
            },
            "params": {
              "type": "object",
              "additionalProperties": {
                "type": [
                  "boolean",
                  "number",
                  "string"
                ]
              }
            }
          },
          "required": [
            "command",
            "params"
          ],
          "additionalProperties": false
        },
        "AsyncResponse": {
          "type": "object",
          "properties": {
            "result": {},
            "state": {},
            "errorCode": {
              "type": "string"
            }
          },
          "additionalProperties": false
        },
        "Language": {
          "type": "string",
          "enum": [
            "da",
            "nl",
            "en",
            "fr",
            "de",
            "hi",
            "id",
            "it",
            "ja",
            "ko",
            "no",
            "pt-BR",
            "es",
            "sv",
            "th"
          ]
        }
      }
    },
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
          "$ref": "#/definitions/DeviceType"
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
            },
            "error": {
              "type": "object",
              "properties": {
                "msg": {
                  "type": "string"
                },
                "details": {}
              },
              "required": [
                "msg"
              ],
              "additionalProperties": false
            },
            "asyncCommandExecution": {
              "anyOf": [
                {
                  "type": "boolean"
                },
                {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                }
              ]
            },
            "commands": {
              "type": "object",
              "additionalProperties": {
                "$ref": "#/definitions/AsyncCommand"
              }
            },
            "responses": {
              "type": "object",
              "additionalProperties": {
                "$ref": "#/definitions/AsyncResponse"
              }
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
        "DeviceType": {
          "type": "string",
          "enum": [
            "action.devices.types.LIGHT",
            "action.devices.types.SWITCH",
            "action.devices.types.SCENE",
            "action.devices.types.OUTLET",
            "action.devices.types.THERMOSTAT",
            "action.devices.types.AC_UNIT",
            "action.devices.types.LOCK",
            "action.devices.types.SENSOR",
            "action.devices.types.HUMIDIFIER",
            "action.devices.types.SMOKE_DETECTOR",
            "action.devices.types.FAN",
            "action.devices.types.SECURITYSYSTEM",
            "action.devices.types.CAMERA",
            "action.devices.types.AIRPURIFIER",
            "action.devices.types.SPEAKER",
            "action.devices.types.AUDIO_VIDEO_RECEIVER",
            "action.devices.types.REMOTECONTROL",
            "action.devices.types.SETTOP",
            "action.devices.types.SOUNDBAR",
            "action.devices.types.STREAMING_BOX",
            "action.devices.types.STREAMING_SOUNDBAR",
            "action.devices.types.STREAMING_STICK",
            "action.devices.types.TV",
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
            "action.devices.types.WINDOW"
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
        "AsyncCommand": {
          "type": "object",
          "properties": {
            "command": {
              "type": "string"
            },
            "params": {
              "type": "object",
              "additionalProperties": {
                "type": [
                  "boolean",
                  "number",
                  "string"
                ]
              }
            }
          },
          "required": [
            "command",
            "params"
          ],
          "additionalProperties": false
        },
        "AsyncResponse": {
          "type": "object",
          "properties": {
            "result": {},
            "state": {},
            "errorCode": {
              "type": "string"
            }
          },
          "additionalProperties": false
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
          "$ref": "#/definitions/DeviceType"
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
            "turnOnWhenColorChanges": {
              "type": "boolean"
            },
            "disabled": {
              "type": "boolean"
            },
            "twoFactor": {
              "$ref": "#/definitions/TwoFactor"
            },
            "error": {
              "type": "object",
              "properties": {
                "msg": {
                  "type": "string"
                },
                "details": {}
              },
              "required": [
                "msg"
              ],
              "additionalProperties": false
            },
            "asyncCommandExecution": {
              "anyOf": [
                {
                  "type": "boolean"
                },
                {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                }
              ]
            },
            "commands": {
              "type": "object",
              "additionalProperties": {
                "$ref": "#/definitions/AsyncCommand"
              }
            },
            "responses": {
              "type": "object",
              "additionalProperties": {
                "$ref": "#/definitions/AsyncResponse"
              }
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
        "DeviceType": {
          "type": "string",
          "enum": [
            "action.devices.types.LIGHT",
            "action.devices.types.SWITCH",
            "action.devices.types.SCENE",
            "action.devices.types.OUTLET",
            "action.devices.types.THERMOSTAT",
            "action.devices.types.AC_UNIT",
            "action.devices.types.LOCK",
            "action.devices.types.SENSOR",
            "action.devices.types.HUMIDIFIER",
            "action.devices.types.SMOKE_DETECTOR",
            "action.devices.types.FAN",
            "action.devices.types.SECURITYSYSTEM",
            "action.devices.types.CAMERA",
            "action.devices.types.AIRPURIFIER",
            "action.devices.types.SPEAKER",
            "action.devices.types.AUDIO_VIDEO_RECEIVER",
            "action.devices.types.REMOTECONTROL",
            "action.devices.types.SETTOP",
            "action.devices.types.SOUNDBAR",
            "action.devices.types.STREAMING_BOX",
            "action.devices.types.STREAMING_SOUNDBAR",
            "action.devices.types.STREAMING_STICK",
            "action.devices.types.TV",
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
            "action.devices.types.WINDOW"
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
        "AsyncCommand": {
          "type": "object",
          "properties": {
            "command": {
              "type": "string"
            },
            "params": {
              "type": "object",
              "additionalProperties": {
                "type": [
                  "boolean",
                  "number",
                  "string"
                ]
              }
            }
          },
          "required": [
            "command",
            "params"
          ],
          "additionalProperties": false
        },
        "AsyncResponse": {
          "type": "object",
          "properties": {
            "result": {},
            "state": {},
            "errorCode": {
              "type": "string"
            }
          },
          "additionalProperties": false
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
          "$ref": "#/definitions/DeviceType"
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
            "returnOnOffErrorCodeIfStateAlreadySet": {
              "type": "boolean"
            },
            "disabled": {
              "type": "boolean"
            },
            "twoFactor": {
              "$ref": "#/definitions/TwoFactor"
            },
            "error": {
              "type": "object",
              "properties": {
                "msg": {
                  "type": "string"
                },
                "details": {}
              },
              "required": [
                "msg"
              ],
              "additionalProperties": false
            },
            "asyncCommandExecution": {
              "anyOf": [
                {
                  "type": "boolean"
                },
                {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                }
              ]
            },
            "commands": {
              "type": "object",
              "additionalProperties": {
                "$ref": "#/definitions/AsyncCommand"
              }
            },
            "responses": {
              "type": "object",
              "additionalProperties": {
                "$ref": "#/definitions/AsyncResponse"
              }
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
        "DeviceType": {
          "type": "string",
          "enum": [
            "action.devices.types.LIGHT",
            "action.devices.types.SWITCH",
            "action.devices.types.SCENE",
            "action.devices.types.OUTLET",
            "action.devices.types.THERMOSTAT",
            "action.devices.types.AC_UNIT",
            "action.devices.types.LOCK",
            "action.devices.types.SENSOR",
            "action.devices.types.HUMIDIFIER",
            "action.devices.types.SMOKE_DETECTOR",
            "action.devices.types.FAN",
            "action.devices.types.SECURITYSYSTEM",
            "action.devices.types.CAMERA",
            "action.devices.types.AIRPURIFIER",
            "action.devices.types.SPEAKER",
            "action.devices.types.AUDIO_VIDEO_RECEIVER",
            "action.devices.types.REMOTECONTROL",
            "action.devices.types.SETTOP",
            "action.devices.types.SOUNDBAR",
            "action.devices.types.STREAMING_BOX",
            "action.devices.types.STREAMING_SOUNDBAR",
            "action.devices.types.STREAMING_STICK",
            "action.devices.types.TV",
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
            "action.devices.types.WINDOW"
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
        "AsyncCommand": {
          "type": "object",
          "properties": {
            "command": {
              "type": "string"
            },
            "params": {
              "type": "object",
              "additionalProperties": {
                "type": [
                  "boolean",
                  "number",
                  "string"
                ]
              }
            }
          },
          "required": [
            "command",
            "params"
          ],
          "additionalProperties": false
        },
        "AsyncResponse": {
          "type": "object",
          "properties": {
            "result": {},
            "state": {},
            "errorCode": {
              "type": "string"
            }
          },
          "additionalProperties": false
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
          "$ref": "#/definitions/DeviceType"
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
            "returnLockUnlockErrorCodeIfStateAlreadySet": {
              "type": "boolean"
            },
            "disabled": {
              "type": "boolean"
            },
            "twoFactor": {
              "$ref": "#/definitions/TwoFactor"
            },
            "error": {
              "type": "object",
              "properties": {
                "msg": {
                  "type": "string"
                },
                "details": {}
              },
              "required": [
                "msg"
              ],
              "additionalProperties": false
            },
            "asyncCommandExecution": {
              "anyOf": [
                {
                  "type": "boolean"
                },
                {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                }
              ]
            },
            "commands": {
              "type": "object",
              "additionalProperties": {
                "$ref": "#/definitions/AsyncCommand"
              }
            },
            "responses": {
              "type": "object",
              "additionalProperties": {
                "$ref": "#/definitions/AsyncResponse"
              }
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
        "DeviceType": {
          "type": "string",
          "enum": [
            "action.devices.types.LIGHT",
            "action.devices.types.SWITCH",
            "action.devices.types.SCENE",
            "action.devices.types.OUTLET",
            "action.devices.types.THERMOSTAT",
            "action.devices.types.AC_UNIT",
            "action.devices.types.LOCK",
            "action.devices.types.SENSOR",
            "action.devices.types.HUMIDIFIER",
            "action.devices.types.SMOKE_DETECTOR",
            "action.devices.types.FAN",
            "action.devices.types.SECURITYSYSTEM",
            "action.devices.types.CAMERA",
            "action.devices.types.AIRPURIFIER",
            "action.devices.types.SPEAKER",
            "action.devices.types.AUDIO_VIDEO_RECEIVER",
            "action.devices.types.REMOTECONTROL",
            "action.devices.types.SETTOP",
            "action.devices.types.SOUNDBAR",
            "action.devices.types.STREAMING_BOX",
            "action.devices.types.STREAMING_SOUNDBAR",
            "action.devices.types.STREAMING_STICK",
            "action.devices.types.TV",
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
            "action.devices.types.WINDOW"
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
        "AsyncCommand": {
          "type": "object",
          "properties": {
            "command": {
              "type": "string"
            },
            "params": {
              "type": "object",
              "additionalProperties": {
                "type": [
                  "boolean",
                  "number",
                  "string"
                ]
              }
            }
          },
          "required": [
            "command",
            "params"
          ],
          "additionalProperties": false
        },
        "AsyncResponse": {
          "type": "object",
          "properties": {
            "result": {},
            "state": {},
            "errorCode": {
              "type": "string"
            }
          },
          "additionalProperties": false
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
          "$ref": "#/definitions/DeviceType"
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
            },
            "error": {
              "type": "object",
              "properties": {
                "msg": {
                  "type": "string"
                },
                "details": {}
              },
              "required": [
                "msg"
              ],
              "additionalProperties": false
            },
            "asyncCommandExecution": {
              "anyOf": [
                {
                  "type": "boolean"
                },
                {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                }
              ]
            },
            "commands": {
              "type": "object",
              "additionalProperties": {
                "$ref": "#/definitions/AsyncCommand"
              }
            },
            "responses": {
              "type": "object",
              "additionalProperties": {
                "$ref": "#/definitions/AsyncResponse"
              }
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
        "DeviceType": {
          "type": "string",
          "enum": [
            "action.devices.types.LIGHT",
            "action.devices.types.SWITCH",
            "action.devices.types.SCENE",
            "action.devices.types.OUTLET",
            "action.devices.types.THERMOSTAT",
            "action.devices.types.AC_UNIT",
            "action.devices.types.LOCK",
            "action.devices.types.SENSOR",
            "action.devices.types.HUMIDIFIER",
            "action.devices.types.SMOKE_DETECTOR",
            "action.devices.types.FAN",
            "action.devices.types.SECURITYSYSTEM",
            "action.devices.types.CAMERA",
            "action.devices.types.AIRPURIFIER",
            "action.devices.types.SPEAKER",
            "action.devices.types.AUDIO_VIDEO_RECEIVER",
            "action.devices.types.REMOTECONTROL",
            "action.devices.types.SETTOP",
            "action.devices.types.SOUNDBAR",
            "action.devices.types.STREAMING_BOX",
            "action.devices.types.STREAMING_SOUNDBAR",
            "action.devices.types.STREAMING_STICK",
            "action.devices.types.TV",
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
            "action.devices.types.WINDOW"
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
        "AsyncCommand": {
          "type": "object",
          "properties": {
            "command": {
              "type": "string"
            },
            "params": {
              "type": "object",
              "additionalProperties": {
                "type": [
                  "boolean",
                  "number",
                  "string"
                ]
              }
            }
          },
          "required": [
            "command",
            "params"
          ],
          "additionalProperties": false
        },
        "AsyncResponse": {
          "type": "object",
          "properties": {
            "result": {},
            "state": {},
            "errorCode": {
              "type": "string"
            }
          },
          "additionalProperties": false
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
          "$ref": "#/definitions/DeviceType"
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
              "$ref": "#/definitions/PreviousMode"
            },
            "defaultMode": {
              "$ref": "#/definitions/PreviousMode"
            },
            "disabled": {
              "type": "boolean"
            },
            "twoFactor": {
              "$ref": "#/definitions/TwoFactor"
            },
            "error": {
              "type": "object",
              "properties": {
                "msg": {
                  "type": "string"
                },
                "details": {}
              },
              "required": [
                "msg"
              ],
              "additionalProperties": false
            },
            "asyncCommandExecution": {
              "anyOf": [
                {
                  "type": "boolean"
                },
                {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                }
              ]
            },
            "commands": {
              "type": "object",
              "additionalProperties": {
                "$ref": "#/definitions/AsyncCommand"
              }
            },
            "responses": {
              "type": "object",
              "additionalProperties": {
                "$ref": "#/definitions/AsyncResponse"
              }
            }
          }
        },
        "state": {
          "type": "object",
          "additionalProperties": false,
          "properties": {
            "activeThermostatMode": {
              "$ref": "#/definitions/ThermostatActiveMode"
            },
            "targetTempReachedEstimateUnixTimestampSec": {
              "type": "number"
            },
            "thermostatMode": {
              "$ref": "#/definitions/ThermostatActiveMode"
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
        "DeviceType": {
          "type": "string",
          "enum": [
            "action.devices.types.LIGHT",
            "action.devices.types.SWITCH",
            "action.devices.types.SCENE",
            "action.devices.types.OUTLET",
            "action.devices.types.THERMOSTAT",
            "action.devices.types.AC_UNIT",
            "action.devices.types.LOCK",
            "action.devices.types.SENSOR",
            "action.devices.types.HUMIDIFIER",
            "action.devices.types.SMOKE_DETECTOR",
            "action.devices.types.FAN",
            "action.devices.types.SECURITYSYSTEM",
            "action.devices.types.CAMERA",
            "action.devices.types.AIRPURIFIER",
            "action.devices.types.SPEAKER",
            "action.devices.types.AUDIO_VIDEO_RECEIVER",
            "action.devices.types.REMOTECONTROL",
            "action.devices.types.SETTOP",
            "action.devices.types.SOUNDBAR",
            "action.devices.types.STREAMING_BOX",
            "action.devices.types.STREAMING_SOUNDBAR",
            "action.devices.types.STREAMING_STICK",
            "action.devices.types.TV",
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
            "action.devices.types.WINDOW"
          ]
        },
        "PreviousMode": {
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
        "AsyncCommand": {
          "type": "object",
          "properties": {
            "command": {
              "type": "string"
            },
            "params": {
              "type": "object",
              "additionalProperties": {
                "type": [
                  "boolean",
                  "number",
                  "string"
                ]
              }
            }
          },
          "required": [
            "command",
            "params"
          ],
          "additionalProperties": false
        },
        "AsyncResponse": {
          "type": "object",
          "properties": {
            "result": {},
            "state": {},
            "errorCode": {
              "type": "string"
            }
          },
          "additionalProperties": false
        },
        "ThermostatActiveMode": {
          "anyOf": [
            {
              "$ref": "#/definitions/ThermostatMode"
            },
            {
              "type": "string",
              "const": "none"
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
          "$ref": "#/definitions/DeviceType"
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
            },
            "error": {
              "type": "object",
              "properties": {
                "msg": {
                  "type": "string"
                },
                "details": {}
              },
              "required": [
                "msg"
              ],
              "additionalProperties": false
            },
            "asyncCommandExecution": {
              "anyOf": [
                {
                  "type": "boolean"
                },
                {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                }
              ]
            },
            "commands": {
              "type": "object",
              "additionalProperties": {
                "$ref": "#/definitions/AsyncCommand"
              }
            },
            "responses": {
              "type": "object",
              "additionalProperties": {
                "$ref": "#/definitions/AsyncResponse"
              }
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
        "DeviceType": {
          "type": "string",
          "enum": [
            "action.devices.types.LIGHT",
            "action.devices.types.SWITCH",
            "action.devices.types.SCENE",
            "action.devices.types.OUTLET",
            "action.devices.types.THERMOSTAT",
            "action.devices.types.AC_UNIT",
            "action.devices.types.LOCK",
            "action.devices.types.SENSOR",
            "action.devices.types.HUMIDIFIER",
            "action.devices.types.SMOKE_DETECTOR",
            "action.devices.types.FAN",
            "action.devices.types.SECURITYSYSTEM",
            "action.devices.types.CAMERA",
            "action.devices.types.AIRPURIFIER",
            "action.devices.types.SPEAKER",
            "action.devices.types.AUDIO_VIDEO_RECEIVER",
            "action.devices.types.REMOTECONTROL",
            "action.devices.types.SETTOP",
            "action.devices.types.SOUNDBAR",
            "action.devices.types.STREAMING_BOX",
            "action.devices.types.STREAMING_SOUNDBAR",
            "action.devices.types.STREAMING_STICK",
            "action.devices.types.TV",
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
            "action.devices.types.WINDOW"
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
        "AsyncCommand": {
          "type": "object",
          "properties": {
            "command": {
              "type": "string"
            },
            "params": {
              "type": "object",
              "additionalProperties": {
                "type": [
                  "boolean",
                  "number",
                  "string"
                ]
              }
            }
          },
          "required": [
            "command",
            "params"
          ],
          "additionalProperties": false
        },
        "AsyncResponse": {
          "type": "object",
          "properties": {
            "result": {},
            "state": {},
            "errorCode": {
              "type": "string"
            }
          },
          "additionalProperties": false
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
          "$ref": "#/definitions/DeviceType"
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
            "returnOpenCloseErrorCodeIfStateAlreadySet": {
              "type": "boolean"
            },
            "disabled": {
              "type": "boolean"
            },
            "twoFactor": {
              "$ref": "#/definitions/TwoFactor"
            },
            "error": {
              "type": "object",
              "properties": {
                "msg": {
                  "type": "string"
                },
                "details": {}
              },
              "required": [
                "msg"
              ],
              "additionalProperties": false
            },
            "asyncCommandExecution": {
              "anyOf": [
                {
                  "type": "boolean"
                },
                {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                }
              ]
            },
            "commands": {
              "type": "object",
              "additionalProperties": {
                "$ref": "#/definitions/AsyncCommand"
              }
            },
            "responses": {
              "type": "object",
              "additionalProperties": {
                "$ref": "#/definitions/AsyncResponse"
              }
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
        "DeviceType": {
          "type": "string",
          "enum": [
            "action.devices.types.LIGHT",
            "action.devices.types.SWITCH",
            "action.devices.types.SCENE",
            "action.devices.types.OUTLET",
            "action.devices.types.THERMOSTAT",
            "action.devices.types.AC_UNIT",
            "action.devices.types.LOCK",
            "action.devices.types.SENSOR",
            "action.devices.types.HUMIDIFIER",
            "action.devices.types.SMOKE_DETECTOR",
            "action.devices.types.FAN",
            "action.devices.types.SECURITYSYSTEM",
            "action.devices.types.CAMERA",
            "action.devices.types.AIRPURIFIER",
            "action.devices.types.SPEAKER",
            "action.devices.types.AUDIO_VIDEO_RECEIVER",
            "action.devices.types.REMOTECONTROL",
            "action.devices.types.SETTOP",
            "action.devices.types.SOUNDBAR",
            "action.devices.types.STREAMING_BOX",
            "action.devices.types.STREAMING_SOUNDBAR",
            "action.devices.types.STREAMING_STICK",
            "action.devices.types.TV",
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
            "action.devices.types.WINDOW"
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
        "AsyncCommand": {
          "type": "object",
          "properties": {
            "command": {
              "type": "string"
            },
            "params": {
              "type": "object",
              "additionalProperties": {
                "type": [
                  "boolean",
                  "number",
                  "string"
                ]
              }
            }
          },
          "required": [
            "command",
            "params"
          ],
          "additionalProperties": false
        },
        "AsyncResponse": {
          "type": "object",
          "properties": {
            "result": {},
            "state": {},
            "errorCode": {
              "type": "string"
            }
          },
          "additionalProperties": false
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
          "$ref": "#/definitions/DeviceType"
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
            },
            "error": {
              "type": "object",
              "properties": {
                "msg": {
                  "type": "string"
                },
                "details": {}
              },
              "required": [
                "msg"
              ],
              "additionalProperties": false
            },
            "asyncCommandExecution": {
              "anyOf": [
                {
                  "type": "boolean"
                },
                {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                }
              ]
            },
            "commands": {
              "type": "object",
              "additionalProperties": {
                "$ref": "#/definitions/AsyncCommand"
              }
            },
            "responses": {
              "type": "object",
              "additionalProperties": {
                "$ref": "#/definitions/AsyncResponse"
              }
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
            "online"
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
        "DeviceType": {
          "type": "string",
          "enum": [
            "action.devices.types.LIGHT",
            "action.devices.types.SWITCH",
            "action.devices.types.SCENE",
            "action.devices.types.OUTLET",
            "action.devices.types.THERMOSTAT",
            "action.devices.types.AC_UNIT",
            "action.devices.types.LOCK",
            "action.devices.types.SENSOR",
            "action.devices.types.HUMIDIFIER",
            "action.devices.types.SMOKE_DETECTOR",
            "action.devices.types.FAN",
            "action.devices.types.SECURITYSYSTEM",
            "action.devices.types.CAMERA",
            "action.devices.types.AIRPURIFIER",
            "action.devices.types.SPEAKER",
            "action.devices.types.AUDIO_VIDEO_RECEIVER",
            "action.devices.types.REMOTECONTROL",
            "action.devices.types.SETTOP",
            "action.devices.types.SOUNDBAR",
            "action.devices.types.STREAMING_BOX",
            "action.devices.types.STREAMING_SOUNDBAR",
            "action.devices.types.STREAMING_STICK",
            "action.devices.types.TV",
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
            "action.devices.types.WINDOW"
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
        "AsyncCommand": {
          "type": "object",
          "properties": {
            "command": {
              "type": "string"
            },
            "params": {
              "type": "object",
              "additionalProperties": {
                "type": [
                  "boolean",
                  "number",
                  "string"
                ]
              }
            }
          },
          "required": [
            "command",
            "params"
          ],
          "additionalProperties": false
        },
        "AsyncResponse": {
          "type": "object",
          "properties": {
            "result": {},
            "state": {},
            "errorCode": {
              "type": "string"
            }
          },
          "additionalProperties": false
        }
      }
    },
    "transportcontrol": {
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
          "$ref": "#/definitions/DeviceType"
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
            "pendingTransportControlCommand": {
              "$ref": "#/definitions/TransportControlIncomingCommand"
            },
            "disabled": {
              "type": "boolean"
            },
            "twoFactor": {
              "$ref": "#/definitions/TwoFactor"
            },
            "error": {
              "type": "object",
              "properties": {
                "msg": {
                  "type": "string"
                },
                "details": {}
              },
              "required": [
                "msg"
              ],
              "additionalProperties": false
            },
            "asyncCommandExecution": {
              "anyOf": [
                {
                  "type": "boolean"
                },
                {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                }
              ]
            },
            "commands": {
              "type": "object",
              "additionalProperties": {
                "$ref": "#/definitions/AsyncCommand"
              }
            },
            "responses": {
              "type": "object",
              "additionalProperties": {
                "$ref": "#/definitions/AsyncResponse"
              }
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
            "transportControlSupportedCommands": {
              "type": "array",
              "items": {
                "$ref": "#/definitions/SupportedTransportControlCommand"
              },
              "minItems": 1
            }
          },
          "required": [
            "transportControlSupportedCommands"
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
            "action.devices.traits.TransportControl"
          ]
        },
        "DeviceType": {
          "type": "string",
          "enum": [
            "action.devices.types.LIGHT",
            "action.devices.types.SWITCH",
            "action.devices.types.SCENE",
            "action.devices.types.OUTLET",
            "action.devices.types.THERMOSTAT",
            "action.devices.types.AC_UNIT",
            "action.devices.types.LOCK",
            "action.devices.types.SENSOR",
            "action.devices.types.HUMIDIFIER",
            "action.devices.types.SMOKE_DETECTOR",
            "action.devices.types.FAN",
            "action.devices.types.SECURITYSYSTEM",
            "action.devices.types.CAMERA",
            "action.devices.types.AIRPURIFIER",
            "action.devices.types.SPEAKER",
            "action.devices.types.AUDIO_VIDEO_RECEIVER",
            "action.devices.types.REMOTECONTROL",
            "action.devices.types.SETTOP",
            "action.devices.types.SOUNDBAR",
            "action.devices.types.STREAMING_BOX",
            "action.devices.types.STREAMING_SOUNDBAR",
            "action.devices.types.STREAMING_STICK",
            "action.devices.types.TV",
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
            "action.devices.types.WINDOW"
          ]
        },
        "TransportControlIncomingCommand": {
          "anyOf": [
            {
              "type": "object",
              "properties": {
                "command": {
                  "type": "string",
                  "const": "Stop"
                }
              },
              "required": [
                "command"
              ],
              "additionalProperties": false
            },
            {
              "type": "object",
              "properties": {
                "command": {
                  "type": "string",
                  "const": "Next"
                }
              },
              "required": [
                "command"
              ],
              "additionalProperties": false
            },
            {
              "type": "object",
              "properties": {
                "command": {
                  "type": "string",
                  "const": "Previous"
                }
              },
              "required": [
                "command"
              ],
              "additionalProperties": false
            },
            {
              "type": "object",
              "properties": {
                "command": {
                  "type": "string",
                  "const": "Pause"
                }
              },
              "required": [
                "command"
              ],
              "additionalProperties": false
            },
            {
              "type": "object",
              "properties": {
                "command": {
                  "type": "string",
                  "const": "Resume"
                }
              },
              "required": [
                "command"
              ],
              "additionalProperties": false
            },
            {
              "type": "object",
              "properties": {
                "command": {
                  "type": "string",
                  "const": "SeekRelative"
                },
                "relativePositionMs": {
                  "type": "number"
                }
              },
              "required": [
                "command",
                "relativePositionMs"
              ],
              "additionalProperties": false
            },
            {
              "type": "object",
              "properties": {
                "command": {
                  "type": "string",
                  "const": "SeekToPosition"
                },
                "absPositionMs": {
                  "type": "number"
                }
              },
              "required": [
                "command",
                "absPositionMs"
              ],
              "additionalProperties": false
            },
            {
              "type": "object",
              "properties": {
                "command": {
                  "type": "string",
                  "const": "RepeatMode"
                },
                "isOn": {
                  "type": "boolean"
                },
                "isSingle": {
                  "type": "boolean"
                }
              },
              "required": [
                "command",
                "isOn"
              ],
              "additionalProperties": false
            },
            {
              "type": "object",
              "properties": {
                "command": {
                  "type": "string",
                  "const": "Shuffle"
                }
              },
              "required": [
                "command"
              ],
              "additionalProperties": false
            },
            {
              "type": "object",
              "properties": {
                "command": {
                  "type": "string",
                  "const": "ClosedCaptioningOn"
                },
                "closedCaptioningLanguage": {
                  "type": "string"
                },
                "userQueryLanguage": {
                  "type": "string"
                }
              },
              "required": [
                "command"
              ],
              "additionalProperties": false
            },
            {
              "type": "object",
              "properties": {
                "command": {
                  "type": "string",
                  "const": "ClosedCaptioningOff"
                }
              },
              "required": [
                "command"
              ],
              "additionalProperties": false
            }
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
        "AsyncCommand": {
          "type": "object",
          "properties": {
            "command": {
              "type": "string"
            },
            "params": {
              "type": "object",
              "additionalProperties": {
                "type": [
                  "boolean",
                  "number",
                  "string"
                ]
              }
            }
          },
          "required": [
            "command",
            "params"
          ],
          "additionalProperties": false
        },
        "AsyncResponse": {
          "type": "object",
          "properties": {
            "result": {},
            "state": {},
            "errorCode": {
              "type": "string"
            }
          },
          "additionalProperties": false
        },
        "SupportedTransportControlCommand": {
          "type": "string",
          "enum": [
            "NEXT",
            "PAUSE",
            "PREVIOUS",
            "RESUME",
            "SHUFFLE",
            "STOP",
            "SEEK_RELATIVE",
            "SEEK_TO_POSITION",
            "SET_REPEAT",
            "CAPTION_CONTROL"
          ]
        }
      }
    },
    "inputselector": {
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
          "$ref": "#/definitions/DeviceType"
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
            },
            "error": {
              "type": "object",
              "properties": {
                "msg": {
                  "type": "string"
                },
                "details": {}
              },
              "required": [
                "msg"
              ],
              "additionalProperties": false
            },
            "asyncCommandExecution": {
              "anyOf": [
                {
                  "type": "boolean"
                },
                {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                }
              ]
            },
            "commands": {
              "type": "object",
              "additionalProperties": {
                "$ref": "#/definitions/AsyncCommand"
              }
            },
            "responses": {
              "type": "object",
              "additionalProperties": {
                "$ref": "#/definitions/AsyncResponse"
              }
            }
          }
        },
        "state": {
          "type": "object",
          "additionalProperties": false,
          "properties": {
            "currentInput": {
              "type": "string"
            },
            "online": {
              "type": "boolean"
            }
          },
          "required": [
            "currentInput",
            "online"
          ]
        },
        "attributes": {
          "type": "object",
          "properties": {
            "availableInputs": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "key": {
                    "type": "string"
                  },
                  "names": {
                    "type": "array",
                    "items": {
                      "type": "object",
                      "properties": {
                        "lang": {
                          "$ref": "#/definitions/Language"
                        },
                        "name_synonym": {
                          "type": "array",
                          "items": {
                            "type": "string"
                          }
                        }
                      },
                      "required": [
                        "lang",
                        "name_synonym"
                      ],
                      "additionalProperties": false
                    }
                  }
                },
                "required": [
                  "key",
                  "names"
                ],
                "additionalProperties": false
              }
            },
            "commandOnlyInputSelector": {
              "type": "boolean"
            },
            "orderedInputs": {
              "type": "boolean"
            }
          },
          "required": [
            "availableInputs"
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
            "action.devices.traits.InputSelector"
          ]
        },
        "DeviceType": {
          "type": "string",
          "enum": [
            "action.devices.types.LIGHT",
            "action.devices.types.SWITCH",
            "action.devices.types.SCENE",
            "action.devices.types.OUTLET",
            "action.devices.types.THERMOSTAT",
            "action.devices.types.AC_UNIT",
            "action.devices.types.LOCK",
            "action.devices.types.SENSOR",
            "action.devices.types.HUMIDIFIER",
            "action.devices.types.SMOKE_DETECTOR",
            "action.devices.types.FAN",
            "action.devices.types.SECURITYSYSTEM",
            "action.devices.types.CAMERA",
            "action.devices.types.AIRPURIFIER",
            "action.devices.types.SPEAKER",
            "action.devices.types.AUDIO_VIDEO_RECEIVER",
            "action.devices.types.REMOTECONTROL",
            "action.devices.types.SETTOP",
            "action.devices.types.SOUNDBAR",
            "action.devices.types.STREAMING_BOX",
            "action.devices.types.STREAMING_SOUNDBAR",
            "action.devices.types.STREAMING_STICK",
            "action.devices.types.TV",
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
            "action.devices.types.WINDOW"
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
        "AsyncCommand": {
          "type": "object",
          "properties": {
            "command": {
              "type": "string"
            },
            "params": {
              "type": "object",
              "additionalProperties": {
                "type": [
                  "boolean",
                  "number",
                  "string"
                ]
              }
            }
          },
          "required": [
            "command",
            "params"
          ],
          "additionalProperties": false
        },
        "AsyncResponse": {
          "type": "object",
          "properties": {
            "result": {},
            "state": {},
            "errorCode": {
              "type": "string"
            }
          },
          "additionalProperties": false
        },
        "Language": {
          "type": "string",
          "enum": [
            "da",
            "nl",
            "en",
            "fr",
            "de",
            "hi",
            "id",
            "it",
            "ja",
            "ko",
            "no",
            "pt-BR",
            "es",
            "sv",
            "th"
          ]
        }
      }
    },
    "channel": {
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
          "$ref": "#/definitions/DeviceType"
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
            "pendingChannelChangeCommand": {
              "anyOf": [
                {
                  "type": "object",
                  "properties": {
                    "command": {
                      "type": "string",
                      "const": "SelectChannel"
                    },
                    "channelCode": {
                      "type": "string"
                    },
                    "channelName": {
                      "type": "string"
                    },
                    "channelNumber": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "command",
                    "channelCode"
                  ],
                  "additionalProperties": false
                },
                {
                  "type": "object",
                  "properties": {
                    "command": {
                      "type": "string",
                      "const": "SelectChannel"
                    },
                    "channelNumber": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "command",
                    "channelNumber"
                  ],
                  "additionalProperties": false
                },
                {
                  "type": "object",
                  "properties": {
                    "command": {
                      "type": "string",
                      "const": "RelativeChannel"
                    },
                    "relativeChannelChange": {
                      "type": "number"
                    }
                  },
                  "required": [
                    "command",
                    "relativeChannelChange"
                  ],
                  "additionalProperties": false
                },
                {
                  "type": "object",
                  "properties": {
                    "command": {
                      "type": "string",
                      "const": "ReturnChannel"
                    }
                  },
                  "required": [
                    "command"
                  ],
                  "additionalProperties": false
                }
              ]
            },
            "disabled": {
              "type": "boolean"
            },
            "twoFactor": {
              "$ref": "#/definitions/TwoFactor"
            },
            "error": {
              "type": "object",
              "properties": {
                "msg": {
                  "type": "string"
                },
                "details": {}
              },
              "required": [
                "msg"
              ],
              "additionalProperties": false
            },
            "asyncCommandExecution": {
              "anyOf": [
                {
                  "type": "boolean"
                },
                {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                }
              ]
            },
            "commands": {
              "type": "object",
              "additionalProperties": {
                "$ref": "#/definitions/AsyncCommand"
              }
            },
            "responses": {
              "type": "object",
              "additionalProperties": {
                "$ref": "#/definitions/AsyncResponse"
              }
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
            "availableChannels": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "key": {
                    "type": "string"
                  },
                  "names": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    }
                  },
                  "number": {
                    "type": "string"
                  }
                },
                "required": [
                  "key",
                  "names"
                ],
                "additionalProperties": false
              }
            },
            "commandOnlyChannels": {
              "type": "boolean"
            }
          },
          "required": [
            "availableChannels"
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
            "action.devices.traits.Channel"
          ]
        },
        "DeviceType": {
          "type": "string",
          "enum": [
            "action.devices.types.LIGHT",
            "action.devices.types.SWITCH",
            "action.devices.types.SCENE",
            "action.devices.types.OUTLET",
            "action.devices.types.THERMOSTAT",
            "action.devices.types.AC_UNIT",
            "action.devices.types.LOCK",
            "action.devices.types.SENSOR",
            "action.devices.types.HUMIDIFIER",
            "action.devices.types.SMOKE_DETECTOR",
            "action.devices.types.FAN",
            "action.devices.types.SECURITYSYSTEM",
            "action.devices.types.CAMERA",
            "action.devices.types.AIRPURIFIER",
            "action.devices.types.SPEAKER",
            "action.devices.types.AUDIO_VIDEO_RECEIVER",
            "action.devices.types.REMOTECONTROL",
            "action.devices.types.SETTOP",
            "action.devices.types.SOUNDBAR",
            "action.devices.types.STREAMING_BOX",
            "action.devices.types.STREAMING_SOUNDBAR",
            "action.devices.types.STREAMING_STICK",
            "action.devices.types.TV",
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
            "action.devices.types.WINDOW"
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
        "AsyncCommand": {
          "type": "object",
          "properties": {
            "command": {
              "type": "string"
            },
            "params": {
              "type": "object",
              "additionalProperties": {
                "type": [
                  "boolean",
                  "number",
                  "string"
                ]
              }
            }
          },
          "required": [
            "command",
            "params"
          ],
          "additionalProperties": false
        },
        "AsyncResponse": {
          "type": "object",
          "properties": {
            "result": {},
            "state": {},
            "errorCode": {
              "type": "string"
            }
          },
          "additionalProperties": false
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
          "$ref": "#/definitions/DeviceType"
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
            },
            "error": {
              "type": "object",
              "properties": {
                "msg": {
                  "type": "string"
                },
                "details": {}
              },
              "required": [
                "msg"
              ],
              "additionalProperties": false
            },
            "asyncCommandExecution": {
              "anyOf": [
                {
                  "type": "boolean"
                },
                {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                }
              ]
            },
            "commands": {
              "type": "object",
              "additionalProperties": {
                "$ref": "#/definitions/AsyncCommand"
              }
            },
            "responses": {
              "type": "object",
              "additionalProperties": {
                "$ref": "#/definitions/AsyncResponse"
              }
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
        "DeviceType": {
          "type": "string",
          "enum": [
            "action.devices.types.LIGHT",
            "action.devices.types.SWITCH",
            "action.devices.types.SCENE",
            "action.devices.types.OUTLET",
            "action.devices.types.THERMOSTAT",
            "action.devices.types.AC_UNIT",
            "action.devices.types.LOCK",
            "action.devices.types.SENSOR",
            "action.devices.types.HUMIDIFIER",
            "action.devices.types.SMOKE_DETECTOR",
            "action.devices.types.FAN",
            "action.devices.types.SECURITYSYSTEM",
            "action.devices.types.CAMERA",
            "action.devices.types.AIRPURIFIER",
            "action.devices.types.SPEAKER",
            "action.devices.types.AUDIO_VIDEO_RECEIVER",
            "action.devices.types.REMOTECONTROL",
            "action.devices.types.SETTOP",
            "action.devices.types.SOUNDBAR",
            "action.devices.types.STREAMING_BOX",
            "action.devices.types.STREAMING_SOUNDBAR",
            "action.devices.types.STREAMING_STICK",
            "action.devices.types.TV",
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
            "action.devices.types.WINDOW"
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
        "AsyncCommand": {
          "type": "object",
          "properties": {
            "command": {
              "type": "string"
            },
            "params": {
              "type": "object",
              "additionalProperties": {
                "type": [
                  "boolean",
                  "number",
                  "string"
                ]
              }
            }
          },
          "required": [
            "command",
            "params"
          ],
          "additionalProperties": false
        },
        "AsyncResponse": {
          "type": "object",
          "properties": {
            "result": {},
            "state": {},
            "errorCode": {
              "type": "string"
            }
          },
          "additionalProperties": false
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
          "$ref": "#/definitions/DeviceType"
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
            },
            "error": {
              "type": "object",
              "properties": {
                "msg": {
                  "type": "string"
                },
                "details": {}
              },
              "required": [
                "msg"
              ],
              "additionalProperties": false
            },
            "asyncCommandExecution": {
              "anyOf": [
                {
                  "type": "boolean"
                },
                {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                }
              ]
            },
            "commands": {
              "type": "object",
              "additionalProperties": {
                "$ref": "#/definitions/AsyncCommand"
              }
            },
            "responses": {
              "type": "object",
              "additionalProperties": {
                "$ref": "#/definitions/AsyncResponse"
              }
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
            "online"
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
        "DeviceType": {
          "type": "string",
          "enum": [
            "action.devices.types.LIGHT",
            "action.devices.types.SWITCH",
            "action.devices.types.SCENE",
            "action.devices.types.OUTLET",
            "action.devices.types.THERMOSTAT",
            "action.devices.types.AC_UNIT",
            "action.devices.types.LOCK",
            "action.devices.types.SENSOR",
            "action.devices.types.HUMIDIFIER",
            "action.devices.types.SMOKE_DETECTOR",
            "action.devices.types.FAN",
            "action.devices.types.SECURITYSYSTEM",
            "action.devices.types.CAMERA",
            "action.devices.types.AIRPURIFIER",
            "action.devices.types.SPEAKER",
            "action.devices.types.AUDIO_VIDEO_RECEIVER",
            "action.devices.types.REMOTECONTROL",
            "action.devices.types.SETTOP",
            "action.devices.types.SOUNDBAR",
            "action.devices.types.STREAMING_BOX",
            "action.devices.types.STREAMING_SOUNDBAR",
            "action.devices.types.STREAMING_STICK",
            "action.devices.types.TV",
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
            "action.devices.types.WINDOW"
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
        "AsyncCommand": {
          "type": "object",
          "properties": {
            "command": {
              "type": "string"
            },
            "params": {
              "type": "object",
              "additionalProperties": {
                "type": [
                  "boolean",
                  "number",
                  "string"
                ]
              }
            }
          },
          "required": [
            "command",
            "params"
          ],
          "additionalProperties": false
        },
        "AsyncResponse": {
          "type": "object",
          "properties": {
            "result": {},
            "state": {},
            "errorCode": {
              "type": "string"
            }
          },
          "additionalProperties": false
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
          "$ref": "#/definitions/DeviceType"
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
            },
            "error": {
              "type": "object",
              "properties": {
                "msg": {
                  "type": "string"
                },
                "details": {}
              },
              "required": [
                "msg"
              ],
              "additionalProperties": false
            },
            "asyncCommandExecution": {
              "anyOf": [
                {
                  "type": "boolean"
                },
                {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                }
              ]
            },
            "commands": {
              "type": "object",
              "additionalProperties": {
                "$ref": "#/definitions/AsyncCommand"
              }
            },
            "responses": {
              "type": "object",
              "additionalProperties": {
                "$ref": "#/definitions/AsyncResponse"
              }
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
        "DeviceType": {
          "type": "string",
          "enum": [
            "action.devices.types.LIGHT",
            "action.devices.types.SWITCH",
            "action.devices.types.SCENE",
            "action.devices.types.OUTLET",
            "action.devices.types.THERMOSTAT",
            "action.devices.types.AC_UNIT",
            "action.devices.types.LOCK",
            "action.devices.types.SENSOR",
            "action.devices.types.HUMIDIFIER",
            "action.devices.types.SMOKE_DETECTOR",
            "action.devices.types.FAN",
            "action.devices.types.SECURITYSYSTEM",
            "action.devices.types.CAMERA",
            "action.devices.types.AIRPURIFIER",
            "action.devices.types.SPEAKER",
            "action.devices.types.AUDIO_VIDEO_RECEIVER",
            "action.devices.types.REMOTECONTROL",
            "action.devices.types.SETTOP",
            "action.devices.types.SOUNDBAR",
            "action.devices.types.STREAMING_BOX",
            "action.devices.types.STREAMING_SOUNDBAR",
            "action.devices.types.STREAMING_STICK",
            "action.devices.types.TV",
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
            "action.devices.types.WINDOW"
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
        "AsyncCommand": {
          "type": "object",
          "properties": {
            "command": {
              "type": "string"
            },
            "params": {
              "type": "object",
              "additionalProperties": {
                "type": [
                  "boolean",
                  "number",
                  "string"
                ]
              }
            }
          },
          "required": [
            "command",
            "params"
          ],
          "additionalProperties": false
        },
        "AsyncResponse": {
          "type": "object",
          "properties": {
            "result": {},
            "state": {},
            "errorCode": {
              "type": "string"
            }
          },
          "additionalProperties": false
        }
      }
    },
    "fanspeed": {
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
          "$ref": "#/definitions/DeviceType"
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
            },
            "error": {
              "type": "object",
              "properties": {
                "msg": {
                  "type": "string"
                },
                "details": {}
              },
              "required": [
                "msg"
              ],
              "additionalProperties": false
            },
            "asyncCommandExecution": {
              "anyOf": [
                {
                  "type": "boolean"
                },
                {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                }
              ]
            },
            "commands": {
              "type": "object",
              "additionalProperties": {
                "$ref": "#/definitions/AsyncCommand"
              }
            },
            "responses": {
              "type": "object",
              "additionalProperties": {
                "$ref": "#/definitions/AsyncResponse"
              }
            }
          }
        },
        "state": {
          "anyOf": [
            {
              "type": "object",
              "additionalProperties": false,
              "properties": {
                "currentFanSpeedSetting": {
                  "type": "string"
                },
                "online": {
                  "type": "boolean"
                }
              },
              "required": [
                "currentFanSpeedSetting",
                "online"
              ]
            },
            {
              "type": "object",
              "additionalProperties": false,
              "properties": {
                "currentFanSpeedPercent": {
                  "type": "number",
                  "minimum": 0,
                  "maximum": 100
                },
                "online": {
                  "type": "boolean"
                }
              },
              "required": [
                "currentFanSpeedPercent",
                "online"
              ]
            }
          ]
        },
        "attributes": {
          "anyOf": [
            {
              "type": "object",
              "additionalProperties": false,
              "properties": {
                "availableFanSpeeds": {
                  "type": "object",
                  "properties": {
                    "speeds": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "speed_name": {
                            "type": "string"
                          },
                          "speed_values": {
                            "type": "array",
                            "items": {
                              "type": "object",
                              "properties": {
                                "speed_synonym": {
                                  "type": "array",
                                  "items": {
                                    "type": "string"
                                  }
                                },
                                "lang": {
                                  "$ref": "#/definitions/Language"
                                }
                              },
                              "required": [
                                "speed_synonym",
                                "lang"
                              ],
                              "additionalProperties": false
                            }
                          }
                        },
                        "required": [
                          "speed_name",
                          "speed_values"
                        ],
                        "additionalProperties": false
                      }
                    },
                    "ordered": {
                      "type": "boolean"
                    }
                  },
                  "required": [
                    "speeds",
                    "ordered"
                  ],
                  "additionalProperties": false
                },
                "supportsFanSpeedPercent": {
                  "type": "boolean",
                  "const": false
                },
                "reversible": {
                  "type": "boolean"
                },
                "commandOnlyFanSpeed": {
                  "type": "boolean"
                }
              },
              "required": [
                "availableFanSpeeds"
              ]
            },
            {
              "type": "object",
              "additionalProperties": false,
              "properties": {
                "supportsFanSpeedPercent": {
                  "type": "boolean",
                  "const": true
                },
                "reversible": {
                  "type": "boolean"
                },
                "commandOnlyFanSpeed": {
                  "type": "boolean"
                }
              },
              "required": [
                "supportsFanSpeedPercent"
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
            "action.devices.traits.FanSpeed"
          ]
        },
        "DeviceType": {
          "type": "string",
          "enum": [
            "action.devices.types.LIGHT",
            "action.devices.types.SWITCH",
            "action.devices.types.SCENE",
            "action.devices.types.OUTLET",
            "action.devices.types.THERMOSTAT",
            "action.devices.types.AC_UNIT",
            "action.devices.types.LOCK",
            "action.devices.types.SENSOR",
            "action.devices.types.HUMIDIFIER",
            "action.devices.types.SMOKE_DETECTOR",
            "action.devices.types.FAN",
            "action.devices.types.SECURITYSYSTEM",
            "action.devices.types.CAMERA",
            "action.devices.types.AIRPURIFIER",
            "action.devices.types.SPEAKER",
            "action.devices.types.AUDIO_VIDEO_RECEIVER",
            "action.devices.types.REMOTECONTROL",
            "action.devices.types.SETTOP",
            "action.devices.types.SOUNDBAR",
            "action.devices.types.STREAMING_BOX",
            "action.devices.types.STREAMING_SOUNDBAR",
            "action.devices.types.STREAMING_STICK",
            "action.devices.types.TV",
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
            "action.devices.types.WINDOW"
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
        "AsyncCommand": {
          "type": "object",
          "properties": {
            "command": {
              "type": "string"
            },
            "params": {
              "type": "object",
              "additionalProperties": {
                "type": [
                  "boolean",
                  "number",
                  "string"
                ]
              }
            }
          },
          "required": [
            "command",
            "params"
          ],
          "additionalProperties": false
        },
        "AsyncResponse": {
          "type": "object",
          "properties": {
            "result": {},
            "state": {},
            "errorCode": {
              "type": "string"
            }
          },
          "additionalProperties": false
        },
        "Language": {
          "type": "string",
          "enum": [
            "da",
            "nl",
            "en",
            "fr",
            "de",
            "hi",
            "id",
            "it",
            "ja",
            "ko",
            "no",
            "pt-BR",
            "es",
            "sv",
            "th"
          ]
        }
      }
    },
    "statusreport": {
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
          "$ref": "#/definitions/DeviceType"
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
            },
            "error": {
              "type": "object",
              "properties": {
                "msg": {
                  "type": "string"
                },
                "details": {}
              },
              "required": [
                "msg"
              ],
              "additionalProperties": false
            },
            "asyncCommandExecution": {
              "anyOf": [
                {
                  "type": "boolean"
                },
                {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                }
              ]
            },
            "commands": {
              "type": "object",
              "additionalProperties": {
                "$ref": "#/definitions/AsyncCommand"
              }
            },
            "responses": {
              "type": "object",
              "additionalProperties": {
                "$ref": "#/definitions/AsyncResponse"
              }
            }
          }
        },
        "state": {
          "type": "object",
          "additionalProperties": false,
          "properties": {
            "currentStatusReport": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "blocking": {
                    "type": "boolean"
                  },
                  "deviceTarget": {
                    "type": "string",
                    "maxLength": 40
                  },
                  "priority": {
                    "type": "number",
                    "minimum": 0
                  },
                  "statusCode": {
                    "$ref": "#/definitions/ErrorCode"
                  }
                },
                "additionalProperties": false
              }
            },
            "online": {
              "type": "boolean"
            }
          },
          "required": [
            "currentStatusReport",
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
            "action.devices.traits.StatusReport"
          ]
        },
        "DeviceType": {
          "type": "string",
          "enum": [
            "action.devices.types.LIGHT",
            "action.devices.types.SWITCH",
            "action.devices.types.SCENE",
            "action.devices.types.OUTLET",
            "action.devices.types.THERMOSTAT",
            "action.devices.types.AC_UNIT",
            "action.devices.types.LOCK",
            "action.devices.types.SENSOR",
            "action.devices.types.HUMIDIFIER",
            "action.devices.types.SMOKE_DETECTOR",
            "action.devices.types.FAN",
            "action.devices.types.SECURITYSYSTEM",
            "action.devices.types.CAMERA",
            "action.devices.types.AIRPURIFIER",
            "action.devices.types.SPEAKER",
            "action.devices.types.AUDIO_VIDEO_RECEIVER",
            "action.devices.types.REMOTECONTROL",
            "action.devices.types.SETTOP",
            "action.devices.types.SOUNDBAR",
            "action.devices.types.STREAMING_BOX",
            "action.devices.types.STREAMING_SOUNDBAR",
            "action.devices.types.STREAMING_STICK",
            "action.devices.types.TV",
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
            "action.devices.types.WINDOW"
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
        "AsyncCommand": {
          "type": "object",
          "properties": {
            "command": {
              "type": "string"
            },
            "params": {
              "type": "object",
              "additionalProperties": {
                "type": [
                  "boolean",
                  "number",
                  "string"
                ]
              }
            }
          },
          "required": [
            "command",
            "params"
          ],
          "additionalProperties": false
        },
        "AsyncResponse": {
          "type": "object",
          "properties": {
            "result": {},
            "state": {},
            "errorCode": {
              "type": "string"
            }
          },
          "additionalProperties": false
        },
        "ErrorCode": {
          "type": "string",
          "enum": [
            "aboveMaximumLightEffectsDuration",
            "aboveMaximumTimerDuration",
            "actionNotAvailable",
            "actionUnavailableWhileRunning",
            "alreadyArmed",
            "alreadyAtMax",
            "alreadyAtMin",
            "alreadyClosed",
            "alreadyDisarmed",
            "alreadyDocked",
            "alreadyInstalledApp",
            "alreadyInState",
            "alreadyLocked",
            "alreadyOff",
            "alreadyOn",
            "alreadyOpen",
            "alreadyPaused",
            "alreadyStarted",
            "alreadyStopped",
            "alreadyUnlocked",
            "ambiguousZoneName",
            "amountAboveLimit",
            "appLaunchFailed",
            "armFailure",
            "armLevelNeeded",
            "authFailure",
            "bagFull",
            "belowMinimumLightEffectsDuration",
            "belowMinimumTimerDuration",
            "binFull",
            "cancelArmingRestricted",
            "cancelTooLate",
            "channelSwitchFailed",
            "chargerIssue",
            "commandInsertFailed",
            "deadBattery",
            "degreesOutOfRange",
            "deviceAlertNeedsAssistance",
            "deviceAtExtremeTemperature",
            "deviceBusy",
            "deviceCharging",
            "deviceClogged",
            "deviceCurrentlyDispensing",
            "deviceDoorOpen",
            "deviceHandleClosed",
            "deviceJammingDetected",
            "deviceLidOpen",
            "deviceNeedsRepair",
            "deviceNotDocked",
            "deviceNotFound",
            "deviceNotMounted",
            "deviceNotReady",
            "deviceStuck",
            "deviceTampered",
            "deviceThermalShutdown",
            "directResponseOnlyUnreachable",
            "disarmFailure",
            "discreteOnlyOpenClose",
            "dispenseAmountAboveLimit",
            "dispenseAmountBelowLimit",
            "dispenseAmountRemainingExceeded",
            "dispenseFractionalAmountNotSupported",
            "dispenseFractionalUnitNotSupported",
            "dispenseUnitNotSupported",
            "doorClosedTooLong",
            "emergencyHeatOn",
            "faultyBattery",
            "floorUnreachable",
            "functionNotSupported",
            "genericDispenseNotSupported",
            "hardError",
            "inAutoMode",
            "inAwayMode",
            "inDryMode",
            "inEcoMode",
            "inFanOnlyMode",
            "inHeatOrCool",
            "inHumidifierMode",
            "inOffMode",
            "inPurifierMode",
            "inSleepMode",
            "inSoftwareUpdate",
            "lockFailure",
            "lockedState",
            "lockedToRange",
            "lowBattery",
            "maxSettingReached",
            "maxSpeedReached",
            "minSettingReached",
            "minSpeedReached",
            "monitoringServiceConnectionLost",
            "needsAttachment",
            "needsBin",
            "needsPads",
            "needsSoftwareUpdate",
            "needsWater",
            "networkProfileNotRecognized",
            "networkSpeedTestInProgress",
            "noAvailableApp",
            "noAvailableChannel",
            "noChannelSubscription",
            "noTimerExists",
            "notSupported",
            "obstructionDetected",
            "offline",
            "deviceOffline",
            "onRequiresMode",
            "passphraseIncorrect",
            "percentOutOfRange",
            "pinIncorrect",
            "rainDetected",
            "rangeTooClose",
            "relinkRequired",
            "roomsOnDifferentFloors",
            "safetyShutOff",
            "sceneCannotBeApplied",
            "securityRestriction",
            "softwareUpdateNotAvailable",
            "startRequiresTime",
            "stillCoolingDown",
            "stillWarmingUp",
            "streamUnavailable",
            "streamUnplayable",
            "tankEmpty",
            "targetAlreadyReached",
            "timerValueOutOfRange",
            "tooManyFailedAttempts",
            "transientError",
            "turnedOff",
            "unableToLocateDevice",
            "unknownFoodPreset",
            "unlockFailure",
            "unpausableState",
            "userCancelled",
            "valueOutOfRange"
          ]
        }
      }
    },
    "camerastream": {
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
          "$ref": "#/definitions/DeviceType"
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
            "cameraStreamProtocols": {
              "type": "array",
              "items": {
                "$ref": "#/definitions/CameraStreamResult"
              },
              "minItems": 1
            },
            "disabled": {
              "type": "boolean"
            },
            "twoFactor": {
              "$ref": "#/definitions/TwoFactor"
            },
            "error": {
              "type": "object",
              "properties": {
                "msg": {
                  "type": "string"
                },
                "details": {}
              },
              "required": [
                "msg"
              ],
              "additionalProperties": false
            },
            "asyncCommandExecution": {
              "anyOf": [
                {
                  "type": "boolean"
                },
                {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                }
              ]
            },
            "commands": {
              "type": "object",
              "additionalProperties": {
                "$ref": "#/definitions/AsyncCommand"
              }
            },
            "responses": {
              "type": "object",
              "additionalProperties": {
                "$ref": "#/definitions/AsyncResponse"
              }
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
            "cameraStreamSupportedProtocols": {
              "type": "array",
              "items": {
                "$ref": "#/definitions/CameraStreamProtocol"
              },
              "minItems": 1
            },
            "cameraStreamNeedAuthToken": {
              "type": "boolean"
            }
          },
          "required": [
            "cameraStreamSupportedProtocols",
            "cameraStreamNeedAuthToken"
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
            "action.devices.traits.CameraStream"
          ]
        },
        "DeviceType": {
          "type": "string",
          "enum": [
            "action.devices.types.LIGHT",
            "action.devices.types.SWITCH",
            "action.devices.types.SCENE",
            "action.devices.types.OUTLET",
            "action.devices.types.THERMOSTAT",
            "action.devices.types.AC_UNIT",
            "action.devices.types.LOCK",
            "action.devices.types.SENSOR",
            "action.devices.types.HUMIDIFIER",
            "action.devices.types.SMOKE_DETECTOR",
            "action.devices.types.FAN",
            "action.devices.types.SECURITYSYSTEM",
            "action.devices.types.CAMERA",
            "action.devices.types.AIRPURIFIER",
            "action.devices.types.SPEAKER",
            "action.devices.types.AUDIO_VIDEO_RECEIVER",
            "action.devices.types.REMOTECONTROL",
            "action.devices.types.SETTOP",
            "action.devices.types.SOUNDBAR",
            "action.devices.types.STREAMING_BOX",
            "action.devices.types.STREAMING_SOUNDBAR",
            "action.devices.types.STREAMING_STICK",
            "action.devices.types.TV",
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
            "action.devices.types.WINDOW"
          ]
        },
        "CameraStreamResult": {
          "anyOf": [
            {
              "type": "object",
              "additionalProperties": false,
              "properties": {
                "cameraStreamProtocol": {
                  "type": "string",
                  "const": "webrtc"
                },
                "cameraStreamSignalingUrl": {
                  "type": "string"
                },
                "cameraStreamOffer": {
                  "type": "string"
                },
                "cameraStreamIceServers": {
                  "type": "string"
                },
                "cameraStreamAuthToken": {
                  "type": "string"
                }
              },
              "required": [
                "cameraStreamProtocol",
                "cameraStreamSignalingUrl"
              ]
            },
            {
              "type": "object",
              "additionalProperties": false,
              "properties": {
                "cameraStreamProtocol": {
                  "type": "string",
                  "enum": [
                    "hls",
                    "dash",
                    "smooth_stream",
                    "progressive_mp4"
                  ]
                },
                "cameraStreamAccessUrl": {
                  "type": "string"
                },
                "cameraStreamReceiverAppId": {
                  "type": "string"
                },
                "cameraStreamAuthToken": {
                  "type": "string"
                }
              },
              "required": [
                "cameraStreamAccessUrl",
                "cameraStreamProtocol"
              ]
            }
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
        "AsyncCommand": {
          "type": "object",
          "properties": {
            "command": {
              "type": "string"
            },
            "params": {
              "type": "object",
              "additionalProperties": {
                "type": [
                  "boolean",
                  "number",
                  "string"
                ]
              }
            }
          },
          "required": [
            "command",
            "params"
          ],
          "additionalProperties": false
        },
        "AsyncResponse": {
          "type": "object",
          "properties": {
            "result": {},
            "state": {},
            "errorCode": {
              "type": "string"
            }
          },
          "additionalProperties": false
        },
        "CameraStreamProtocol": {
          "type": "string",
          "enum": [
            "hls",
            "dash",
            "smooth_stream",
            "progressive_mp4",
            "webrtc"
          ]
        }
      }
    },
    "appselector": {
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
          "$ref": "#/definitions/DeviceType"
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
            "pendingAppSelectorCommand": {
              "anyOf": [
                {
                  "type": "object",
                  "properties": {
                    "command": {
                      "type": "string",
                      "const": "AppInstall"
                    },
                    "newApplication": {
                      "type": "string"
                    },
                    "newApplicationName": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "command",
                    "newApplication",
                    "newApplicationName"
                  ],
                  "additionalProperties": false
                },
                {
                  "type": "object",
                  "properties": {
                    "command": {
                      "type": "string",
                      "const": "AppSearch"
                    },
                    "newApplication": {
                      "type": "string"
                    },
                    "newApplicationName": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "command",
                    "newApplication",
                    "newApplicationName"
                  ],
                  "additionalProperties": false
                }
              ]
            },
            "disabled": {
              "type": "boolean"
            },
            "twoFactor": {
              "$ref": "#/definitions/TwoFactor"
            },
            "error": {
              "type": "object",
              "properties": {
                "msg": {
                  "type": "string"
                },
                "details": {}
              },
              "required": [
                "msg"
              ],
              "additionalProperties": false
            },
            "asyncCommandExecution": {
              "anyOf": [
                {
                  "type": "boolean"
                },
                {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                }
              ]
            },
            "commands": {
              "type": "object",
              "additionalProperties": {
                "$ref": "#/definitions/AsyncCommand"
              }
            },
            "responses": {
              "type": "object",
              "additionalProperties": {
                "$ref": "#/definitions/AsyncResponse"
              }
            }
          }
        },
        "state": {
          "type": "object",
          "additionalProperties": false,
          "properties": {
            "currentApplication": {
              "type": "string"
            },
            "online": {
              "type": "boolean"
            }
          },
          "required": [
            "currentApplication",
            "online"
          ]
        },
        "attributes": {
          "type": "object",
          "properties": {
            "availableApplications": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "key": {
                    "type": "string"
                  },
                  "names": {
                    "type": "array",
                    "items": {
                      "type": "object",
                      "properties": {
                        "name_synonym": {
                          "type": "array",
                          "items": {
                            "type": "string"
                          }
                        },
                        "lang": {
                          "$ref": "#/definitions/Language"
                        }
                      },
                      "required": [
                        "name_synonym",
                        "lang"
                      ],
                      "additionalProperties": false
                    }
                  }
                },
                "required": [
                  "key",
                  "names"
                ],
                "additionalProperties": false
              }
            }
          },
          "required": [
            "availableApplications"
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
            "action.devices.traits.AppSelector"
          ]
        },
        "DeviceType": {
          "type": "string",
          "enum": [
            "action.devices.types.LIGHT",
            "action.devices.types.SWITCH",
            "action.devices.types.SCENE",
            "action.devices.types.OUTLET",
            "action.devices.types.THERMOSTAT",
            "action.devices.types.AC_UNIT",
            "action.devices.types.LOCK",
            "action.devices.types.SENSOR",
            "action.devices.types.HUMIDIFIER",
            "action.devices.types.SMOKE_DETECTOR",
            "action.devices.types.FAN",
            "action.devices.types.SECURITYSYSTEM",
            "action.devices.types.CAMERA",
            "action.devices.types.AIRPURIFIER",
            "action.devices.types.SPEAKER",
            "action.devices.types.AUDIO_VIDEO_RECEIVER",
            "action.devices.types.REMOTECONTROL",
            "action.devices.types.SETTOP",
            "action.devices.types.SOUNDBAR",
            "action.devices.types.STREAMING_BOX",
            "action.devices.types.STREAMING_SOUNDBAR",
            "action.devices.types.STREAMING_STICK",
            "action.devices.types.TV",
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
            "action.devices.types.WINDOW"
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
        "AsyncCommand": {
          "type": "object",
          "properties": {
            "command": {
              "type": "string"
            },
            "params": {
              "type": "object",
              "additionalProperties": {
                "type": [
                  "boolean",
                  "number",
                  "string"
                ]
              }
            }
          },
          "required": [
            "command",
            "params"
          ],
          "additionalProperties": false
        },
        "AsyncResponse": {
          "type": "object",
          "properties": {
            "result": {},
            "state": {},
            "errorCode": {
              "type": "string"
            }
          },
          "additionalProperties": false
        },
        "Language": {
          "type": "string",
          "enum": [
            "da",
            "nl",
            "en",
            "fr",
            "de",
            "hi",
            "id",
            "it",
            "ja",
            "ko",
            "no",
            "pt-BR",
            "es",
            "sv",
            "th"
          ]
        }
      }
    }
  },
  "state": {
    "armdisarm": {
      "$schema": "http://json-schema.org/draft-07/schema#",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "isArmed": {
          "type": "boolean"
        },
        "currentArmLevel": {
          "type": "string"
        },
        "exitAllowance": {
          "type": "number"
        },
        "online": {
          "type": "boolean"
        }
      },
      "required": [
        "isArmed",
        "online"
      ],
      "definitions": {}
    },
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
        "activeThermostatMode": {
          "$ref": "#/definitions/ThermostatActiveMode"
        },
        "targetTempReachedEstimateUnixTimestampSec": {
          "type": "number"
        },
        "thermostatMode": {
          "$ref": "#/definitions/ThermostatActiveMode"
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
        "ThermostatActiveMode": {
          "anyOf": [
            {
              "$ref": "#/definitions/ThermostatMode"
            },
            {
              "type": "string",
              "const": "none"
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
        "online"
      ],
      "definitions": {}
    },
    "transportcontrol": {
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
    "inputselector": {
      "$schema": "http://json-schema.org/draft-07/schema#",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "currentInput": {
          "type": "string"
        },
        "online": {
          "type": "boolean"
        }
      },
      "required": [
        "currentInput",
        "online"
      ],
      "definitions": {}
    },
    "channel": {
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
        "online"
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
        "online"
      ],
      "definitions": {}
    },
    "fanspeed": {
      "$schema": "http://json-schema.org/draft-07/schema#",
      "anyOf": [
        {
          "type": "object",
          "additionalProperties": false,
          "properties": {
            "currentFanSpeedSetting": {
              "type": "string"
            },
            "online": {
              "type": "boolean"
            }
          },
          "required": [
            "currentFanSpeedSetting",
            "online"
          ]
        },
        {
          "type": "object",
          "additionalProperties": false,
          "properties": {
            "currentFanSpeedPercent": {
              "type": "number",
              "minimum": 0,
              "maximum": 100
            },
            "online": {
              "type": "boolean"
            }
          },
          "required": [
            "currentFanSpeedPercent",
            "online"
          ]
        }
      ],
      "definitions": {}
    },
    "statusreport": {
      "$schema": "http://json-schema.org/draft-07/schema#",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "currentStatusReport": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "blocking": {
                "type": "boolean"
              },
              "deviceTarget": {
                "type": "string",
                "maxLength": 40
              },
              "priority": {
                "type": "number",
                "minimum": 0
              },
              "statusCode": {
                "$ref": "#/definitions/ErrorCode"
              }
            },
            "additionalProperties": false
          }
        },
        "online": {
          "type": "boolean"
        }
      },
      "required": [
        "currentStatusReport",
        "online"
      ],
      "definitions": {
        "ErrorCode": {
          "type": "string",
          "enum": [
            "aboveMaximumLightEffectsDuration",
            "aboveMaximumTimerDuration",
            "actionNotAvailable",
            "actionUnavailableWhileRunning",
            "alreadyArmed",
            "alreadyAtMax",
            "alreadyAtMin",
            "alreadyClosed",
            "alreadyDisarmed",
            "alreadyDocked",
            "alreadyInstalledApp",
            "alreadyInState",
            "alreadyLocked",
            "alreadyOff",
            "alreadyOn",
            "alreadyOpen",
            "alreadyPaused",
            "alreadyStarted",
            "alreadyStopped",
            "alreadyUnlocked",
            "ambiguousZoneName",
            "amountAboveLimit",
            "appLaunchFailed",
            "armFailure",
            "armLevelNeeded",
            "authFailure",
            "bagFull",
            "belowMinimumLightEffectsDuration",
            "belowMinimumTimerDuration",
            "binFull",
            "cancelArmingRestricted",
            "cancelTooLate",
            "channelSwitchFailed",
            "chargerIssue",
            "commandInsertFailed",
            "deadBattery",
            "degreesOutOfRange",
            "deviceAlertNeedsAssistance",
            "deviceAtExtremeTemperature",
            "deviceBusy",
            "deviceCharging",
            "deviceClogged",
            "deviceCurrentlyDispensing",
            "deviceDoorOpen",
            "deviceHandleClosed",
            "deviceJammingDetected",
            "deviceLidOpen",
            "deviceNeedsRepair",
            "deviceNotDocked",
            "deviceNotFound",
            "deviceNotMounted",
            "deviceNotReady",
            "deviceStuck",
            "deviceTampered",
            "deviceThermalShutdown",
            "directResponseOnlyUnreachable",
            "disarmFailure",
            "discreteOnlyOpenClose",
            "dispenseAmountAboveLimit",
            "dispenseAmountBelowLimit",
            "dispenseAmountRemainingExceeded",
            "dispenseFractionalAmountNotSupported",
            "dispenseFractionalUnitNotSupported",
            "dispenseUnitNotSupported",
            "doorClosedTooLong",
            "emergencyHeatOn",
            "faultyBattery",
            "floorUnreachable",
            "functionNotSupported",
            "genericDispenseNotSupported",
            "hardError",
            "inAutoMode",
            "inAwayMode",
            "inDryMode",
            "inEcoMode",
            "inFanOnlyMode",
            "inHeatOrCool",
            "inHumidifierMode",
            "inOffMode",
            "inPurifierMode",
            "inSleepMode",
            "inSoftwareUpdate",
            "lockFailure",
            "lockedState",
            "lockedToRange",
            "lowBattery",
            "maxSettingReached",
            "maxSpeedReached",
            "minSettingReached",
            "minSpeedReached",
            "monitoringServiceConnectionLost",
            "needsAttachment",
            "needsBin",
            "needsPads",
            "needsSoftwareUpdate",
            "needsWater",
            "networkProfileNotRecognized",
            "networkSpeedTestInProgress",
            "noAvailableApp",
            "noAvailableChannel",
            "noChannelSubscription",
            "noTimerExists",
            "notSupported",
            "obstructionDetected",
            "offline",
            "deviceOffline",
            "onRequiresMode",
            "passphraseIncorrect",
            "percentOutOfRange",
            "pinIncorrect",
            "rainDetected",
            "rangeTooClose",
            "relinkRequired",
            "roomsOnDifferentFloors",
            "safetyShutOff",
            "sceneCannotBeApplied",
            "securityRestriction",
            "softwareUpdateNotAvailable",
            "startRequiresTime",
            "stillCoolingDown",
            "stillWarmingUp",
            "streamUnavailable",
            "streamUnplayable",
            "tankEmpty",
            "targetAlreadyReached",
            "timerValueOutOfRange",
            "tooManyFailedAttempts",
            "transientError",
            "turnedOff",
            "unableToLocateDevice",
            "unknownFoodPreset",
            "unlockFailure",
            "unpausableState",
            "userCancelled",
            "valueOutOfRange"
          ]
        }
      }
    },
    "camerastream": {
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
    "appselector": {
      "$schema": "http://json-schema.org/draft-07/schema#",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "currentApplication": {
          "type": "string"
        },
        "online": {
          "type": "boolean"
        }
      },
      "required": [
        "currentApplication",
        "online"
      ],
      "definitions": {}
    }
  },
  "state-update": {
    "armdisarm": {
      "$schema": "http://json-schema.org/draft-07/schema#",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "isArmed": {
          "type": "boolean"
        },
        "currentArmLevel": {
          "type": "string"
        },
        "exitAllowance": {
          "type": "number"
        },
        "online": {
          "type": "boolean"
        }
      },
      "definitions": {}
    },
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
        "activeThermostatMode": {
          "$ref": "#/definitions/ThermostatActiveMode"
        },
        "targetTempReachedEstimateUnixTimestampSec": {
          "type": "number"
        },
        "thermostatMode": {
          "$ref": "#/definitions/ThermostatActiveMode"
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
        "ThermostatActiveMode": {
          "anyOf": [
            {
              "$ref": "#/definitions/ThermostatMode"
            },
            {
              "type": "string",
              "const": "none"
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
    "transportcontrol": {
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
    "inputselector": {
      "$schema": "http://json-schema.org/draft-07/schema#",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "currentInput": {
          "type": "string"
        },
        "online": {
          "type": "boolean"
        }
      },
      "definitions": {}
    },
    "channel": {
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
    },
    "fanspeed": {
      "$schema": "http://json-schema.org/draft-07/schema#",
      "anyOf": [
        {
          "type": "object",
          "additionalProperties": false,
          "properties": {
            "currentFanSpeedSetting": {
              "type": "string"
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
            "currentFanSpeedPercent": {
              "type": "number",
              "minimum": 0,
              "maximum": 100
            },
            "online": {
              "type": "boolean"
            }
          }
        }
      ],
      "definitions": {}
    },
    "statusreport": {
      "$schema": "http://json-schema.org/draft-07/schema#",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "currentStatusReport": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "blocking": {
                "type": "boolean"
              },
              "deviceTarget": {
                "type": "string",
                "maxLength": 40
              },
              "priority": {
                "type": "number",
                "minimum": 0
              },
              "statusCode": {
                "$ref": "#/definitions/ErrorCode"
              }
            },
            "additionalProperties": false
          }
        },
        "online": {
          "type": "boolean"
        }
      },
      "definitions": {
        "ErrorCode": {
          "type": "string",
          "enum": [
            "aboveMaximumLightEffectsDuration",
            "aboveMaximumTimerDuration",
            "actionNotAvailable",
            "actionUnavailableWhileRunning",
            "alreadyArmed",
            "alreadyAtMax",
            "alreadyAtMin",
            "alreadyClosed",
            "alreadyDisarmed",
            "alreadyDocked",
            "alreadyInstalledApp",
            "alreadyInState",
            "alreadyLocked",
            "alreadyOff",
            "alreadyOn",
            "alreadyOpen",
            "alreadyPaused",
            "alreadyStarted",
            "alreadyStopped",
            "alreadyUnlocked",
            "ambiguousZoneName",
            "amountAboveLimit",
            "appLaunchFailed",
            "armFailure",
            "armLevelNeeded",
            "authFailure",
            "bagFull",
            "belowMinimumLightEffectsDuration",
            "belowMinimumTimerDuration",
            "binFull",
            "cancelArmingRestricted",
            "cancelTooLate",
            "channelSwitchFailed",
            "chargerIssue",
            "commandInsertFailed",
            "deadBattery",
            "degreesOutOfRange",
            "deviceAlertNeedsAssistance",
            "deviceAtExtremeTemperature",
            "deviceBusy",
            "deviceCharging",
            "deviceClogged",
            "deviceCurrentlyDispensing",
            "deviceDoorOpen",
            "deviceHandleClosed",
            "deviceJammingDetected",
            "deviceLidOpen",
            "deviceNeedsRepair",
            "deviceNotDocked",
            "deviceNotFound",
            "deviceNotMounted",
            "deviceNotReady",
            "deviceStuck",
            "deviceTampered",
            "deviceThermalShutdown",
            "directResponseOnlyUnreachable",
            "disarmFailure",
            "discreteOnlyOpenClose",
            "dispenseAmountAboveLimit",
            "dispenseAmountBelowLimit",
            "dispenseAmountRemainingExceeded",
            "dispenseFractionalAmountNotSupported",
            "dispenseFractionalUnitNotSupported",
            "dispenseUnitNotSupported",
            "doorClosedTooLong",
            "emergencyHeatOn",
            "faultyBattery",
            "floorUnreachable",
            "functionNotSupported",
            "genericDispenseNotSupported",
            "hardError",
            "inAutoMode",
            "inAwayMode",
            "inDryMode",
            "inEcoMode",
            "inFanOnlyMode",
            "inHeatOrCool",
            "inHumidifierMode",
            "inOffMode",
            "inPurifierMode",
            "inSleepMode",
            "inSoftwareUpdate",
            "lockFailure",
            "lockedState",
            "lockedToRange",
            "lowBattery",
            "maxSettingReached",
            "maxSpeedReached",
            "minSettingReached",
            "minSpeedReached",
            "monitoringServiceConnectionLost",
            "needsAttachment",
            "needsBin",
            "needsPads",
            "needsSoftwareUpdate",
            "needsWater",
            "networkProfileNotRecognized",
            "networkSpeedTestInProgress",
            "noAvailableApp",
            "noAvailableChannel",
            "noChannelSubscription",
            "noTimerExists",
            "notSupported",
            "obstructionDetected",
            "offline",
            "deviceOffline",
            "onRequiresMode",
            "passphraseIncorrect",
            "percentOutOfRange",
            "pinIncorrect",
            "rainDetected",
            "rangeTooClose",
            "relinkRequired",
            "roomsOnDifferentFloors",
            "safetyShutOff",
            "sceneCannotBeApplied",
            "securityRestriction",
            "softwareUpdateNotAvailable",
            "startRequiresTime",
            "stillCoolingDown",
            "stillWarmingUp",
            "streamUnavailable",
            "streamUnplayable",
            "tankEmpty",
            "targetAlreadyReached",
            "timerValueOutOfRange",
            "tooManyFailedAttempts",
            "transientError",
            "turnedOff",
            "unableToLocateDevice",
            "unknownFoodPreset",
            "unlockFailure",
            "unpausableState",
            "userCancelled",
            "valueOutOfRange"
          ]
        }
      }
    },
    "camerastream": {
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
    "appselector": {
      "$schema": "http://json-schema.org/draft-07/schema#",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "currentApplication": {
          "type": "string"
        },
        "online": {
          "type": "boolean"
        }
      },
      "definitions": {}
    }
  }
} as const;

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
          },
          "defaultAction": {
            "type": "string",
            "description": "Used to set a default action for clicking this notification."
          }
        },
        "additionalProperties": false
      }
    },
    "additionalProperties": false,
    "definitions": {}
  },
  "camera-result": {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "anyOf": [
      {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "cameraStreamProtocol": {
            "type": "string",
            "const": "webrtc"
          },
          "cameraStreamSignalingUrl": {
            "type": "string"
          },
          "cameraStreamOffer": {
            "type": "string"
          },
          "cameraStreamIceServers": {
            "type": "string"
          },
          "cameraStreamAuthToken": {
            "type": "string"
          }
        },
        "required": [
          "cameraStreamProtocol",
          "cameraStreamSignalingUrl"
        ]
      },
      {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "cameraStreamProtocol": {
            "type": "string",
            "enum": [
              "hls",
              "dash",
              "smooth_stream",
              "progressive_mp4"
            ]
          },
          "cameraStreamAccessUrl": {
            "type": "string"
          },
          "cameraStreamReceiverAppId": {
            "type": "string"
          },
          "cameraStreamAuthToken": {
            "type": "string"
          }
        },
        "required": [
          "cameraStreamAccessUrl",
          "cameraStreamProtocol"
        ]
      }
    ],
    "definitions": {}
  }
} as const;
