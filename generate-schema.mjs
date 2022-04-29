import { readFileSync, writeFileSync, unlinkSync } from "fs";

import * as tjs from "ts-json-schema-generator";

const deviceFile = './src/device.ts';

const individualSchemas = {
    'notification': {
        type: 'WebpushNotification',
        path: './src/notification.ts',
    },
    'camera-result': {
        type: 'CameraStreamResult',
        path: './src/device.ts',
    },
    'object-detection': {
        type: 'ObjectDetection',
        path: './src/object-detection.ts',
    },
};

const PROPS_TO_REMOVE = ['required', 'minProperties'];

console.log(`loading all traits`);
const traitSchema = tjs.createGenerator({ path: deviceFile }).createSchema('Trait');
const traitNames = traitSchema.definitions['Trait'].enum.map(trait => trait.substring(trait.lastIndexOf('.') + 1));
console.log(`${traitNames.join(', ')}`);

console.log(`creating temp source file`);
let file = readFileSync(deviceFile).toString();
traitNames.forEach(traitName => file += `\nexport type ${traitName}State = ${traitName}Device['state'];\n`);
const tempFile = 'device-temp.ts';
writeFileSync(tempFile, file);
console.log(`created`);
try {
    const generator = tjs.createGenerator({ path: tempFile, topRef: false });
    const schemas = { device: {}, state: {}, 'state-update': {} };
    for (const traitName of traitNames) {
        console.log(`generating schema for trait: ${traitName}`)
        const deviceSchema = deepClone(generator.createSchema(`${traitName}Device`));
        deviceSchema.definitions['Trait'].enum = deviceSchema.definitions['Trait'].enum.filter(f => f.endsWith(traitName));
        schemas.device[traitName.toLowerCase()] = removePropertiesFromSchema(deviceSchema);

        const stateSchema = deepClone(generator.createSchema(`${traitName}State`));
        const updateStateSchema = removePropertiesFromStateUpdateSchema(deepClone(stateSchema));
        schemas.state[traitName.toLowerCase()] = removePropertiesFromSchema(stateSchema);
        schemas["state-update"][traitName.toLowerCase()] = updateStateSchema;
    }

    const individualSchema = Object.entries(individualSchemas).reduce((dict, [key, value]) => {
        dict[key] = tjs
            .createGenerator({ path: value.path, topRef: false })
            .createSchema(value.type);
        return dict;
    }, {});

    const schema = `
/* This file is auto-generated during build. Don't modify it! any changes will be overwritten. */
/* tslint:disable */

export type SchemaType = keyof typeof Schema;

export type IndividualSchemaType = keyof typeof IndividualSchema;

export type TraitName = keyof typeof Schema['device'];

export const Schema = ${JSON.stringify(schemas, undefined, 2)} as const;

export const IndividualSchema = ${JSON.stringify(individualSchema, undefined, 2)} as const;
`;

    writeFileSync('./src/schema.ts', schema);
} finally {
    unlinkSync(tempFile)
}

function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

function removeRecursive(obj, remover) {
    if (typeof obj === 'object') {
        if (Array.isArray(obj)) {
            for (const child of obj) {
                removeRecursive(child, remover);
            }
        } else {
            remover(obj);

            for (const [_, child] of Object.entries(obj)) {
                removeRecursive(child, remover);
            }
        }
    }
    return obj;
}

function removePropertiesFromSchema(obj) {
    return removeRecursive(obj, item => {
        if (item.type !== 'object' && 'minProperties' in item) {
            delete item.minProperties;
        }
    });
}

function removePropertiesFromStateUpdateSchema(obj) {
    return removeRecursive(obj, item => {
        for (const toRemove of PROPS_TO_REMOVE) {
            if (toRemove in item) {
                delete item[toRemove];
            }
        }
    });
}
