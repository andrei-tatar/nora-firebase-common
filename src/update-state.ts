export function updateState(update: any, state: any) {
    const updatedState = deepClone(state);
    const hasChanges = updateStateInternal(update, updatedState);
    return {
        hasChanges,
        state: updatedState,
    };
}

export function deepClone<T>(o: T): T {
    return JSON.parse(JSON.stringify(o));
}

const arrayItemKeyMap = new Map<string, string>([
    ['openState', 'openDirection'],
    ['currentSensorStateData', 'name'],
]);

// https://github.com/andrei-tatar/nora-firebase-common/issues/9
const ignoreKeys: any[] = ['__proto__', 'constructor', 'prototype'];

function updateArrayState(update: any[], state: any[], path = ''): boolean {
    let hasChanges = false;

    const key = arrayItemKeyMap.get(path);
    if (key) {
        for (const [index, item] of update.entries()) {
            const keyValue = item[key];
            const stateItem = state.find(stateChild => stateChild[key] === keyValue);
            if (stateItem) {
                if (updateStateInternal(item, stateItem, `${path}[${index}]`)) {
                    hasChanges = true;
                }
            } else {
                // TODO: not sure what to do. safest for now is to ignore
            }
        }
    } else {
        // TODO: check if there is a difference between the state and the update
        state.splice(0, state.length, ...update);
        return true;
    }

    return hasChanges;
}

function updateStateInternal(update: any, state: any, path = ''): boolean {
    if (Array.isArray(update)) {
        if (!Array.isArray(state)) {
            throw new Error(`${path} is not an array in state`);
        }
        return updateArrayState(update, state, path);
    }

    let hasChanges = false;
    for (const [key, newValue] of entries(update)) {
        if (ignoreKeys.includes(key)) { continue; }

        const oldValue = state[key];
        const newType = typeof newValue;
        const oldType = typeof oldValue;

        if (newType !== oldType) {
            if (newType === 'object' && oldType === 'undefined' && Object.keys(newValue).length === 0) {
                continue;
            }
        }

        if (newType === 'object' && oldType === 'object') {
            const keyString = String(key);
            const currentPath = path && path.endsWith('.') ? `${path}.${keyString}` : `${path}${keyString}`;
            if (updateStateInternal(newValue, oldValue as any, currentPath)) {
                hasChanges = true;
            }
            continue;
        }

        if (newValue !== oldValue) {
            state[key] = newValue;
            hasChanges = true;
            continue;
        }
    }
    return hasChanges;
}

function entries<T extends object>(o: T): [keyof T, any][] {
    return Object.entries(o) as any;
}
