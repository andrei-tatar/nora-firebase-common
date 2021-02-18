import Ajv, { ValidateFunction } from 'ajv';
import { Trait } from './device';
import { IndividualSchema, IndividualSchemaType, Schema, SchemaType, TraitName } from './schema';
import { deepClone } from './update-state';

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
            ? mergeSchemas(schemasForTraits)
            : schemasForTraits[0];
    }
    return cachedSchema;
}

function mergeSchemas(objects: any[], level = 0): any {
    return objects.map(o => deepClone(o)).reduce((a, b) => {
        const isAnyA = isAnyOfSchema(a);
        const isAnyB = isAnyOfSchema(b);
        if (isAnyA && isAnyB) {
            const anyOf = [];
            for (const pAnyOf of a.anyOf) {
                for (const oAnyOf of b.anyOf) {
                    anyOf.push(mergeSchemas([pAnyOf, oAnyOf], level + 1));
                }
            }
            delete a.anyOf;
            delete b.anyOf;
            return {
                ...mergeSchemas([a, b]),
                anyOf,
            };
        } else if (isAnyA) {
            return {
                ...a,
                anyOf: a.anyOf.map((o: any) => mergeSchemas([o, b], level + 1)),
            };
        } else if (isAnyB) {
            return {
                ...b,
                anyOf: b.anyOf.map((o: any) => mergeSchemas([o, a], level + 1))
            };
        }

        for (const key of Object.keys(b)) {
            const aVal = a[key];
            const bVal = b[key];

            if (Array.isArray(aVal) && Array.isArray(bVal)) {
                a[key] = aVal.concat(...bVal).filter((val, index, self) => self.indexOf(val) === index);
            } else if (isObject(aVal) && isObject(bVal)) {
                a[key] = mergeSchemas([aVal, bVal], level + 1);
            } else {
                a[key] = bVal;
            }
        }

        const clone =  deepClone(a);
        if (level > 0) {
            delete clone['$schema'];
            delete clone['definitions'];
        }
        return clone;
    });
}

function isObject(obj: any) {
    return obj && typeof obj === 'object';
}

function isAnyOfSchema(s: any): s is { anyOf: any[] } {
    return 'anyOf' in s && Array.isArray(s.anyOf);
}
