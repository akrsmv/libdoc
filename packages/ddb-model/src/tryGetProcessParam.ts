export const tryGetProcessParam = (param: string) => {
    if (process.argv.includes(`--${param}`)) {
        return process.argv[process.argv.indexOf(`--${param}`) + 1]
    }
    return ""
}