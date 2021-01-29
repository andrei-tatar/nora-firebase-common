import * as chai from 'chai';
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

});

