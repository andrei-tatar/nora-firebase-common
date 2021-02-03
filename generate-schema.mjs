import { readFileSync, writeFileSync, unlinkSync } from "fs";

import * as tjs from "ts-json-schema-generator";

const deviceFile = './src/device.ts';

const individualSchemas = {
    'notification': {
        type: 'WebpushNotification',
        path: './src/notification.ts',
    },
};

console.log(`loading all traits`);
const traitSchema = tjs.createGenerator({ path: deviceFile }).createSchema('Trait');
const traitNames = traitSchema.definitions['Trait'].enum.map(trait => trait.substr(trait.lastIndexOf('.') + 1));
console.log(`${traitNames.join(', ')}`);

console.log(`creating temp source file`);
let file = readFileSync(deviceFile).toString();
traitNames.forEach(traitName => file += `\nexport type ${traitName}State = Partial<${traitName}Device['state']>;\n`);
const tempFile = 'device-temp.ts';
writeFileSync(tempFile, file);
console.log(`created`);
try {
    const generator = tjs.createGenerator({ path: tempFile, topRef: false });
    const schemas = [];
    for (const traitName of traitNames) {
        console.log(`generating schema for trait: ${traitName}`)
        const deviceSchema = deepClone(generator.createSchema(`${traitName}Device`));
        const stateSchema = deepClone(generator.createSchema(`${traitName}State`));
        deviceSchema.definitions['Trait'].enum = deviceSchema.definitions['Trait'].enum.filter(f => f.endsWith(traitName));
        schemas.push({
            device: JSON.stringify(deviceSchema, undefined, 2),
            state: JSON.stringify(stateSchema, undefined, 2),
            traitName: traitName.toLowerCase(),
        });
    }

    const individualSchemaKeys = Object.keys(individualSchemas);

    const schema = `
/* tslint:disable */
export type SchemaType = 'device' | 'state';
export type IndividualSchemaType = ${individualSchemaKeys.map(k => `'${k}'`).join(' | ')};
export type TraitName = ${schemas.map(s => `'${s.traitName}'`).join(' | ')};
export const Schema = {
    device: {
        ${schemas.map(s => `${s.traitName}: ${s.device},`).join('\n')}
    },
    state: {
        ${schemas.map(s => `${s.traitName}: ${s.state},`).join('\n')}
    },
};
export const IndividualSchema = {
    ${individualSchemaKeys.map(key => {
        const schema = tjs.createGenerator({ path: individualSchemas[key].path, topRef: false }).createSchema(individualSchemas[key].type);
        return `
    '${key}': ${JSON.stringify(schema, undefined, 2)},\n`
    })}
};
    `;

    writeFileSync('./src/schema.ts', schema);
} finally {
    unlinkSync(tempFile)
}

function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}