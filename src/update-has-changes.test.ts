import * as chai from 'chai';
import { updateHasChanges } from './update-has-changes';

const expect = chai.expect;
describe('updateHasChanges', () => {

    it('should return false when update has no changes', () => {
        const hasChanges = updateHasChanges({
            on: true,
        }, {
            on: true,
        });

        expect(hasChanges).to.be.false;
    });

    it('should return false when update has no members', () => {
        const hasChanges = updateHasChanges({
        }, {
            on: true,
            online: true,
            value: 1234,
            string: 'Test',
        });

        expect(hasChanges).to.be.false;
    });

    it('should return true when update has changes', () => {
        const hasChanges = updateHasChanges({
            on: true,
        }, {
            on: false,
            value: 100,
        });

        expect(hasChanges).to.be.true;
    });

    it('should consider empty objects as missing', () => {
        const hasChanges = updateHasChanges({
            children: {},
        }, {
        });

        expect(hasChanges).to.be.false;
    });

    it('should look into children for changes', () => {
        const hasChanges = updateHasChanges({
            children: {
                value: 456,
            },
        }, {
            children: {
                value: 123,
            },
        });

        expect(hasChanges).to.be.true;
    });
});

