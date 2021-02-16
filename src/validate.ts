import Ajv, { ValidateFunction } from 'ajv';
import { Trait } from './device';
import { IndividualSchema, IndividualSchemaType, Schema, SchemaType, TraitName } from './schema';

const cachedValidators: {
    [schemaName: string]: ValidateFunction;
} = {};

export function validate(traits: Trait[], schemaType: SchemaType, object: any) {
    const traitNames = traits.map(t => t.substr(t.lastIndexOf('.') + 1).toLowerCase() as TraitName);
    const key = `${schemaType}:${traitNames.sort().join(':')}`;

    let validator = cachedValidators[key];
    if (!validator) {
        const ajv = new Ajv();
        const schema = loadSchema(schemaType, traitNames, key);
        cachedValidators[key] = validator = ajv.compile(schema);
    }

    const valid = validator(object);
    return { valid, errors: validator.errors };
}

export function validateIndividual(schemaType: IndividualSchemaType, object: any) {
    const key = `individual:${schemaType}`;

    let validator = cachedValidators[key];
    if (!validator) {
        const ajv = new Ajv();
        const schema = IndividualSchema[schemaType];
        cachedValidators[key] = validator = ajv.compile(schema);
    }

    const valid = validator(object);
    return { valid, errors: validator.errors };
}

const composedTraitCache: { [trait: string]: object } = {};

function loadSchema(schemaType: SchemaType, traitNames: TraitName[], key: string) {
    let cachedSchema = composedTraitCache[key];
    if (!cachedSchema) {
        const schemasForTraits = traitNames.map(t => Schema[schemaType][t]);
        cachedSchema = composedTraitCache[key] = schemasForTraits.length > 1
            ? mergeSchemas(...schemasForTraits)
            : schemasForTraits[0];
    }
    return cachedSchema;
}

function mergeSchemas(...objects: any[]) {
    const isObject = (obj: any) => obj && typeof obj === 'object';

    return objects.reduce((prev, obj) => {
        Object.keys(obj).forEach(key => {
            const pVal = prev[key];
            const oVal = obj[key];

            if (Array.isArray(pVal) && Array.isArray(oVal)) {
                prev[key] = pVal.concat(...oVal).filter((val, index, self) => self.indexOf(val) === index);
            } else if (isObject(pVal) && isObject(oVal)) {
                if (isAnyOfSchema(pVal) && isAnyOfSchema(oVal)) {
                    prev[key] = {
                        anyOf: [],
                    };
                    for (const pAnyOf of pVal.anyOf) {
                        for (const oAnyOf of oVal.anyOf) {
                            prev[key].anyOf.push(mergeSchemas(pAnyOf, oAnyOf));
                        }
                    }
                } else if (isAnyOfSchema(pVal)) {
                    prev[key] = { anyOf: pVal.anyOf.map(o => mergeSchemas(o, oVal)) };
                } else if (isAnyOfSchema(oVal)) {
                    prev[key] = { anyOf: oVal.anyOf.map(o => mergeSchemas(o, pVal)) };
                } else {
                    prev[key] = mergeSchemas(pVal, oVal);
                }
            } else {
                prev[key] = oVal;
            }
        });

        return prev;
    }, {});
}

function isAnyOfSchema(s: any): s is { anyOf: any[] } {
    return 'anyOf' in s && Array.isArray(s.anyOf);
}
