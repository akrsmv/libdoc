import { inspect } from "util"
import { get_correlation_token } from "./correlation-id"

const logLevels = ["DEBUG", "INFO", "WARN", "ERROR", "CRIT"]
export const allowedLogLevels = (logLevel: string | undefined) => logLevels.slice(logLevels.indexOf(logLevel || "WARN"))

function withLevel(this: string, logFn: Function, ...data: any) {
    if (allowedLogLevels(process.env.LOGLEVEL).includes(String(this))) {
        logFn.call(null, this, { loglevel: this, correlation: get_correlation_token(), logdata: [...data.map((d: any) => inspect(d, false, 10, false))] })
    }
}

export const loginfo = withLevel.bind("INFO", console.info)
export const logdebug = withLevel.bind("DEBUG", console.log)
export const logwarn = withLevel.bind("WARN", console.warn)
export const logcrit = withLevel.bind("CRIT", console.error)
export const logerror = withLevel.bind("ERROR", console.error)
