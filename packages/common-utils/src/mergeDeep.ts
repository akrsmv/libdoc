import { isObject } from "./isObject";

export const mergeDeep = (__typename: any, source: any) => {
    let output = Object.assign({}, __typename);
    if (isObject(__typename) && isObject(source)) {
        Object.keys(source).forEach(key => {
            if (isObject(source[key])) {
                if (!(key in __typename))
                    Object.assign(output, { [key]: source[key] });
                else
                    output[key] = mergeDeep(__typename[key], source[key]);
            } else {
                Object.assign(output, { [key]: source[key] });
            }
        });
    }
    return output;
}