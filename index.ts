export * from './execute';
export * from './device';
export * from './checks';
import { promises } from 'fs';
import { join } from 'path';

export async function loadSchema(name: 'device' | 'state' | 'update-state') {
    const buffer = await promises.readFile(join(__dirname, `schema-${name}.json`));
    return JSON.parse(buffer.toString());
}
