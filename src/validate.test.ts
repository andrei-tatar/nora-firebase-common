import * as chai from 'chai';
import { Trait } from './device';
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

    it('should return true for invalid states', () => {
        const result = validate(['action.devices.traits.Brightness'], 'state', {
            invalidProperty: 'value',
        });

        expect(result.valid).to.be.false;
    });

    it('should return true for valid states for multiple traits', () => {
        const result = validate(['action.devices.traits.Brightness', 'action.devices.traits.OnOff'], 'state', {
            online: false,
            brightness: 95,
            on: true,
        });

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

    it('should return true for complete children', () => {
        const result = validate(['action.devices.traits.ColorSetting'], 'state', {
            color: {
                spectrumHsv: {
                    hue: 230,
                    saturation: .5,
                    value: .5,
                },
            },
        });

        expect(result.valid).to.be.true;
    });

    it('should merge anyOf schemas and validate ok', () => {
        const device = {
            id: '3fa1fb5:3a24c04',
            type: 'action.devices.types.CURTAIN',
            traits: [
                'action.devices.traits.OpenClose',
                'action.devices.traits.LockUnlock'
            ],
            name: { name: 'Test' },
            roomHint: '',
            willReportState: true,
            state: { online: true, openPercent: 0, isLocked: false, isJammed: false },
            noraSpecific: {},
            attributes: {
                discreteOnlyOpenClose: true,
                commandOnlyOpenClose: false,
                queryOnlyOpenClose: false
            },
            structureHint: 'Test'
        };

        const result = validate(device.traits as Trait[], 'device', device);
        expect(result.valid).to.be.true;
    })
});

