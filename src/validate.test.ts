import * as chai from 'chai';
import { FanSpeedDevice, OnOffDevice, SensorStateDevice, Trait } from './device';
import { validate } from './validate';

const expect = chai.expect;
describe('validate', () => {
  it('should return true for valid states', () => {
    const result = validate(['action.devices.traits.Brightness'], 'state', {
      online: false,
      brightness: 95,
    });

    expect(result.valid).to.be.true;
  });

  it('should return false for invalid states', () => {
    const result = validate(['action.devices.traits.Brightness'], 'state', {
      invalidProperty: 'value',
    });

    expect(result.valid).to.be.false;
  });

  it('should return true for valid states for multiple traits', () => {
    const result = validate(
      ['action.devices.traits.Brightness', 'action.devices.traits.OnOff'],
      'state',
      {
        online: false,
        brightness: 95,
        on: true,
      }
    );

    expect(result.valid).to.be.true;
  });

  it('should return false for partial children', () => {
    const result = validate(['action.devices.traits.ColorSetting'], 'state', {
      color: {
        spectrumHsv: {
          hue: 230,
        },
      },
    });

    expect(result.valid).to.be.false;
  });

  it('complete state schema check should return true for complete children', () => {
    const result = validate(['action.devices.traits.ColorSetting'], 'state', {
      color: {
        spectrumHsv: {
          hue: 230,
          saturation: 0.5,
          value: 0.5,
        },
      },
      online: true,
    });

    expect(result.valid).to.be.true;
  });

  it('should return true for complete children', () => {
    const result = validate(
      ['action.devices.traits.ColorSetting'],
      'state-update',
      {
        color: {
          spectrumHsv: {
            hue: 230,
            saturation: 0.5,
            value: 0.5,
          },
        },
      }
    );

    expect(result.valid).to.be.true;
  });

  it('update should return true for partial children', () => {
    const result = validate(
      ['action.devices.traits.ColorSetting'],
      'state-update',
      {
        color: {
          spectrumHsv: {
            hue: 230,
          },
        },
      }
    );

    expect(result.valid).to.be.true;
  });

  it('should merge anyOf schemas and validate ok', () => {
    const device = {
      id: '3fa1fb5:3a24c04',
      type: 'action.devices.types.CURTAIN',
      traits: [
        'action.devices.traits.OpenClose',
        'action.devices.traits.LockUnlock',
      ],
      name: { name: 'Test' },
      roomHint: '',
      willReportState: true,
      state: { online: true, openPercent: 0, isLocked: false, isJammed: false },
      noraSpecific: {},
      attributes: {
        discreteOnlyOpenClose: true,
        commandOnlyOpenClose: false,
        queryOnlyOpenClose: false,
      },
      structureHint: 'Test',
    };

    const result = validate(device.traits as Trait[], 'device', device);
    expect(result.valid).to.be.true;
  });

  it('should merge anyOf partial state schemas and validate ok', () => {
    const result = validate(
      ['action.devices.traits.OpenClose', 'action.devices.traits.LockUnlock'],
      'state-update',
      {
        openState: [
          {
            openPercent: 50,
          },
        ],
      }
    );
    expect(result.valid).to.be.true;
  });

  it('should validate sensor attributes ok', () => {
    const device: SensorStateDevice = {
      id: '3fa1fb5:3a24c04',
      type: 'action.devices.types.SENSOR',
      traits: ['action.devices.traits.SensorState'],
      name: { name: 'Test' },
      roomHint: '',
      willReportState: true,
      state: {
        online: true,
        currentSensorStateData: [{
          name: 'AirQuality',
          currentSensorState: 'fair',
          rawValue: 13,
        }],
      },
      noraSpecific: {},
      attributes: {
        sensorStatesSupported: [
          {
            name: 'AirQuality',
            descriptiveCapabilities: {
              availableStates: ['fair', 'good'],
            },
            numericCapabilities: {
              rawValueUnit: 'AQI',
            },
          },
        ],
      },
      structureHint: 'Test',
    };

    const result = validate(device.traits, 'device', device);
    expect(result.valid).to.be.true;
  });

  it('should return false for sensor percentage outside of bounds', () => {
    const sensorState: SensorStateDevice['state'] = {
      online: true,
      currentSensorStateData: [{
        name: 'FilterLifeTime',
        currentSensorState: 'unknown',
        rawValue: 123,
      }],
    };

    const result = validate(['action.devices.traits.SensorState'], 'state', sensorState);
    expect(result.valid).to.be.false;
  });

  it('should validate FanSpeed&OnOff device', () => {
    const device: FanSpeedDevice & OnOffDevice = {
      id: 'some-id',
      traits: ['action.devices.traits.FanSpeed', 'action.devices.traits.OnOff'] as never,
      name: {
        name: 'test'
      },
      noraSpecific: {},
      attributes: {
        supportsFanSpeedPercent: true,
      },
      state: {
        currentFanSpeedPercent: 10,
        on: true,
        online: true,
      },
      type: 'action.devices.types.FAN',
      willReportState: true,
    };

    const result = validate(['action.devices.traits.FanSpeed', 'action.devices.traits.OnOff'], 'device', device);
    expect(result.valid).to.be.true;
  });

});
