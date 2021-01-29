export function updateHasChanges<T extends { [key: string]: any }>(update: Partial<T>, object: T): boolean {
    for (const [key, val] of Object.entries(update)) {
        const newValue = val;
        const oldValue = object[key];
        const newType = typeof newValue;
        const oldType = typeof oldValue;
        if (newType !== oldType) {
            if (newType !== 'object' || oldType !== 'undefined' || Object.keys(newValue).length !== 0) {
                return true;
            }
        }

        if (newType === 'object') {
            if (updateHasChanges(newValue, oldValue)) {
                return true;
            }
            continue;
        }

        if (newValue !== oldValue) {
            return true;
        }
    }
    return false;
}
