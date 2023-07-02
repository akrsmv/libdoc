export function removeEmpty(obj: Record<string, any>): Record<string, any> {
    if (!(obj instanceof Map)) {
        return Object.keys(obj)
            .filter(k => obj[k] != null) // Remove undef. and null.
            .filter(k => obj[k] !== undefined) // Remove undefined
            .filter(k => !Number.isNaN(obj[k])) // Remove NaN
            .filter(k => String(obj[k]).trim() !== '') // Remove empty strings
            .reduce(
                (newObj, k) =>
                    typeof obj[k] === "object" && !(obj[k] instanceof Date || Array.isArray(obj[k]))
                        ? { ...newObj, [k]: removeEmpty(obj[k]) } // Recurse.
                        : { ...newObj, [k]: obj[k] }, // Copy value.
                {}
            )
    } else {
        return obj
    }
}