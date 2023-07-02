export const ppjson = (obj: any): string => {
    if (obj instanceof Error) {
        return JSON.stringify(obj, transformErrorToPojo, 4)
    } else if (obj instanceof Map) {
        return JSON.stringify(obj, transformMapToPojo, 4)
    } else if (obj instanceof Buffer) {
        return obj.toString()
    } else {
        return typeof obj === "object" ?
            JSON.stringify(obj, null, 4) :
            obj as unknown as string
    }
}

const transformErrorToPojo = (key: string, value: any) => {
    if (value instanceof Error) {
        var error: Record<string, any> = {};

        Object.getOwnPropertyNames(value).forEach(function (key) {
            //@ts-ignore
            error[key] = value[key];
        });

        return error;
    }

    return value;
}
//?TODO where is the key param and how that signature fits with the above calling
export const transformMapToPojo = (value: any) => {
    if (value instanceof Map) {
        return Array.from(value.entries()).reduce<Record<string, any>>((accum, curr) => {
            accum[curr[0]] = curr[1]
            return accum
        }, {})
    }
    return value;
}