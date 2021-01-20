import { join } from "path";
import { readFileSync, writeFileSync, unlinkSync } from "fs";

import * as tjs from "ts-json-schema-generator";

const deviceFile = './device.ts';

console.log(`loading all traits`);
const traitSchema = tjs.createGenerator({ path: deviceFile }).createSchema('Trait');
const traitNames = traitSchema.definitions['Trait'].enum.map(trait => trait.substr(trait.lastIndexOf('.') + 1));
console.log(`${traitNames.join(', ')}`);

console.log(`creating temp source file`);
let file = readFileSync(deviceFile).toString();
traitNames.forEach(traitName => file += `\nexport type ${traitName}State = ${traitName}Device['state'];\n`);
const tempFile = 'device-temp.ts';
writeFileSync(tempFile, file);
console.log(`created`);

try {
    const generator = tjs.createGenerator({ path: tempFile, topRef: false });

    for (const traitName of traitNames) {
        console.log(`generating schema for trait: ${traitName}`)
        const deviceSchema = deepClone(generator.createSchema(`${traitName}Device`));
        const stateSchema = deepClone(generator.createSchema(`${traitName}State`));
        deviceSchema.definitions['Trait'].enum = deviceSchema.definitions['Trait'].enum.filter(f => f.endsWith(traitName));
        writeFileSync(join('build', `schema-device-${traitName.toLowerCase()}.json`), JSON.stringify(deviceSchema, undefined, 2));
        writeFileSync(join('build', `schema-state-${traitName.toLowerCase()}.json`), JSON.stringify(stateSchema, undefined, 2));
    }
} finally {
    unlinkSync(tempFile)
}

function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}