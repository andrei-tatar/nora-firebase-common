export * from './execute';
export * from './device';
export * from './checks';
import Ajv, { ValidateFunction } from 'ajv';
import { promises } from 'fs';
import { join } from 'path';
import { Trait } from './device';

const cachedValidators: {
    [schemaName: string]: ValidateFunction;
} = {};

export type SchemaType = 'device' | 'state' | 'nora';

export async function validate(traits: Trait[], schemaType: SchemaType, object: any) {
    const traitNames = traits.map(t => t.substr(t.lastIndexOf('.') + 1).toLowerCase());
    const key = `${schemaType}:${traitNames.sort().join(':')}`;

    let validator = cachedValidators[key];
    if (!validator) {
        const ajv = new Ajv();
        const schema = await loadSchema(schemaType, traitNames, key);
        cachedValidators[key] = validator = ajv.compile(schema);
    }

    const valid = validator(object);
    return { valid, errors: validator.errors };
}


const composedTraitCache: { [trait: string]: object } = {};

async function loadSchema(schemaType: SchemaType, traitNames: string[], key: string) {
    let cachedSchema = composedTraitCache[key];
    if (!cachedSchema) {
        const schemasForTraits = await Promise.all(traitNames.map(t => loadSchemaFromFile(`${schemaType}-${t}`)));
        cachedSchema = composedTraitCache[key] = mergeDeep(...schemasForTraits);
    }

    return cachedSchema;
}

const singleTraitCache: { [trait: string]: string } = {};

async function loadSchemaFromFile(schemaName: string) {
    let cachedSchema = singleTraitCache[schemaName];
    if (!cachedSchema) {
        const buffer = await promises.readFile(join(__dirname, `schema-${schemaName}.json`));
        cachedSchema = singleTraitCache[schemaName] = buffer.toString();
    }
    return JSON.parse(cachedSchema);
}

function mergeDeep(...objects: any[]) {
    const isObject = (obj: any) => obj && typeof obj === 'object';

    return objects.reduce((prev, obj) => {
        Object.keys(obj).forEach(key => {
            const pVal = prev[key];
            const oVal = obj[key];

            if (Array.isArray(pVal) && Array.isArray(oVal)) {
                prev[key] = pVal.concat(...oVal).filter((val, index, self) => self.indexOf(val) === index);
            } else if (isObject(pVal) && isObject(oVal)) {
                prev[key] = mergeDeep(pVal, oVal);
            } else {
                prev[key] = oVal;
            }
        });

        return prev;
    }, {});
}
