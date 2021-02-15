
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
            "action.devices.types.VALVE"
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
            "action.devices.types.VALVE"
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
                  "additionalProperties": false,
                  "properties": {
                    "spectrumRgb": {
                      "type": "number"
                    },
                    "temperatureK": {
                      "type": "number"
                    }
                  },
                  "required": [
                    "spectrumRgb"
                  ]
                },
                {
                  "type": "object",
                  "additionalProperties": false,
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
                    },
                    "temperatureK": {
                      "type": "number"
                    }
                  },
                  "required": [
                    "spectrumHsv"
                  ]
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
            "action.devices.types.VALVE"
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
            "action.devices.types.VALVE"
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
            "action.devices.types.VALVE"
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
            "action.devices.types.VALVE"
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
            "action.devices.types.VALVE"
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
            "action.devices.types.VALVE"
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
            "action.devices.types.VALVE"
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
    }
  },
  "state": {
    "brightness": {
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
    "colorsetting": {
      "$schema": "http://json-schema.org/draft-07/schema#",
      "type": "object",
      "properties": {
        "online": {
          "type": "boolean"
        },
        "color": {
          "anyOf": [
            {
              "type": "object",
              "additionalProperties": false,
              "properties": {
                "spectrumRgb": {
                  "type": "number"
                },
                "temperatureK": {
                  "type": "number"
                }
              },
              "required": [
                "spectrumRgb"
              ]
            },
            {
              "type": "object",
              "additionalProperties": false,
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
                },
                "temperatureK": {
                  "type": "number"
                }
              },
              "required": [
                "spectrumHsv"
              ]
            }
          ]
        }
      },
      "additionalProperties": false,
      "definitions": {}
    },
    "onoff": {
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
    "lockunlock": {
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
    "scene": {
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
    "temperaturesetting": {
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
    "volume": {
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
    "openclose": {
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
    "mediastate": {
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
        "description": "An array of notification actions representing the actions\r available to the user when the notification is presented."
      },
      "badge": {
        "type": "string",
        "description": "URL of the image used to represent the notification when there is\r not enough space to display the notification itself."
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
        "description": "The direction in which to display the notification. Must be one\r of `auto`, `ltr` or `rtl`."
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
        "description": "A boolean specifying whether the user should be notified after a\r new notification replaces an old one. Defaults to false."
      },
      "requireInteraction": {
        "type": "boolean",
        "description": "Indicates that a notification should remain active until the user\r clicks or dismisses it, rather than closing automatically.\r Defaults to false."
      },
      "silent": {
        "type": "boolean",
        "description": "A boolean specifying whether the notification should be silent.\r Defaults to false."
      },
      "tag": {
        "type": "string",
        "description": "An identifying tag for the notification."
      },
      "timestamp": {
        "type": "number",
        "description": "Timestamp of the notification. Refer to\r https://developer.mozilla.org/en-US/docs/Web/API/notification/timestamp\r for details."
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
        "description": "A vibration pattern for the device's vibration hardware to emit\r when the notification fires."
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
