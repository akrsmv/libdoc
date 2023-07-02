
export function convertDatesToIsoDateStrings(obj: Record<string, any>, obj_meadata: any): Record<string, any> {
    if (obj_meadata) {
        // if (!(obj instanceof Map)) { // TODO check why this condition was needed
        return Object.keys(obj)
            .reduce(
                (newObj, k) => obj[k] instanceof Date && obj_meadata?.keys?.get(k) === "Date"
                    ? { ...newObj, [k]: obj[k].toISOString() } // Recurse.
                    : { ...newObj, [k]: obj[k] }, // Copy value.
                {}
            )
        // }
    }
    else {
        return obj
    }
}

export function convertIsoDateStringsToDates(obj: Record<string, any>, obj_meadata: any): Record<string, any> {
    if (obj_meadata) {
        // if (!(obj instanceof Map)) { // TODO check why this condition was needed
        return Object.keys(obj)
            .reduce(
                (newObj, k) => typeof obj[k] === "string" && obj_meadata?.keys?.get(k) === "Date"
                    ? { ...newObj, [k]: new Date(obj[k]) } // Recurse.
                    : { ...newObj, [k]: obj[k] }, // Copy value.
                {}
            )
        // }
    }
    else {
        return obj
    }
}

export const addDays = (date: Date, days: number) => {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}