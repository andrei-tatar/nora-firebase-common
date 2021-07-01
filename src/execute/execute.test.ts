import * as chai from 'chai';
import { TemperatureSettingDevice, ArmDisarmDevice } from '../device';
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

    describe('action.devices.commands.ArmDisarm', () => {

        const armdisarm: ArmDisarmDevice = {
            id: 'some-id',
            traits: ['action.devices.traits.ArmDisarm'] as never,
            name: {
              name: 'test'
            },
            noraSpecific: {},
            attributes: {
              availableArmLevels: {
                levels: [
                  {
                    level_name: 'L1',
                    level_values: [
                      {
                        level_synonym: ['L1'],
                        lang: 'de'
                      }
                    ]
                  }
                ],
                ordered: true
              }
            },
            state: {
              isArmed: false,
              currentArmLevel: 'L0',
              exitAllowance: 10,
              online: true
            },
            type: 'action.devices.types.SECURITYSYSTEM',
            willReportState: true,
        };

        it('should arm the security system', () => {
            const changes = executeCommand({
                command: 'action.devices.commands.ArmDisarm',
                device: armdisarm,
                params: {
                    arm: true
                },
            });

            expect(changes?.updateState?.isArmed).to.be.equal(true);
        });

        it('should assign the armLevel', () => {
            const changes = executeCommand({
                command: 'action.devices.commands.ArmDisarm',
                device: armdisarm,
                params: {
                    arm: true,
                    armLevel: 'L1',
                },
            });

            expect(changes?.updateState?.currentArmLevel).to.be.equal('L1');
        });
    });
});
