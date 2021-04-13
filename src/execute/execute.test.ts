import * as chai from 'chai';
import { TemperatureSettingDevice } from '../device';
import { executeCommand } from '.';

const expect = chai.expect;
describe('executeCommand', () => {

    describe('action.devices.commands.ThermostatSetMode', () => {

        it('should use a previous mode if available when new mode is on', () => {
            const thermostat: TemperatureSettingDevice = {
                id: 'new',
                name: {
                    name: 'Test Thermostat',
                },
                type: 'action.devices.types.THERMOSTAT',
                traits: ['action.devices.traits.TemperatureSetting'],
                willReportState: true,
                attributes: {
                    availableThermostatModes: ['cool', 'on', 'off', 'heat'],
                    thermostatTemperatureUnit: 'C',
                },
                noraSpecific: {
                    previousMode: 'cool',
                },
                state: {
                    online: true,
                    thermostatMode: 'off',
                    thermostatTemperatureAmbient: 12,
                    thermostatTemperatureSetpoint: 13,
                },
            };

            const changes = executeCommand({
                command: 'action.devices.commands.ThermostatSetMode',
                device: thermostat,
                params: {
                    thermostatMode: 'on',
                },
            });

            expect(changes?.updateState?.thermostatMode).to.be.equal('cool');
        });
    });
});
