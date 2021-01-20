export * from './execute';
export * from './device';
export * from './checks';
import { promises } from 'fs';
import { join } from 'path';
import { Trait } from './device';

const cache: { [trait: string]: object } = {};

export async function loadSchema(schemaType: 'device' | 'state', traits: Trait[]) {
    const traitNames = traits.map(t => {
        return t.substr(t.lastIndexOf('.') + 1).toLowerCase();
    });
    const key = `${schemaType}:${traitNames.sort().join(':')}`;

    let cachedSchema = cache[key];
    if (!cachedSchema) {
        const schemasForTraits = await Promise.all(traitNames.map(t => loadSchemaFromFile(`${schemaType}-${t}`)));
        cachedSchema = cache[key] = mergeDeep(...schemasForTraits);
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
