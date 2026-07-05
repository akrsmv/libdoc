import { describe, jest, expect, test, beforeEach, afterEach } from '@jest/globals';
// ARRANGE
// mock console.error
console.error = jest.fn()
console.info = jest.fn()
console.log = jest.fn()
console.warn = jest.fn()

const testLogMessage = "this is test log message"
const testCorrToken = "this is correlation token"
const env = process.env

import { logcrit, logerror, logwarn, loginfo, logdebug } from './log';
import { set_correlation_token } from './correlation-id';
import { inspect } from 'util';

beforeEach(() => {
    jest.resetModules()
    jest.clearAllMocks()
    process.env = { ...env }
})

afterEach(() => {
    process.env = env
})

describe('log messages according to LOGLEVEL env var', () => {


    test.each`
LOGLEVEL    |expectedLogMethods 
${'DEBUG'}  |${['logdebug', 'loginfo', 'logwarn', 'logerror', 'logcrit']}
${'INFO'}   |${['loginfo', 'logwarn', 'logerror', 'logcrit']}
${'WARN'}   |${['logwarn', 'logerror', 'logcrit']}
${'ERROR'}  |${['logerror', 'logcrit']}
${'CRIT'}   |${['logcrit']}
    `("If LOGLEVEL=$LOGLEVEL then $expectedLogMethods methods are active",
        ({ LOGLEVEL, expectedLogMethods }) => {
            //ARRANGE
            process.env.LOGLEVEL = LOGLEVEL as string;
            set_correlation_token(testCorrToken);

            // ACT
            logdebug(testLogMessage);
            loginfo(testLogMessage);
            logwarn(testLogMessage);
            logerror(testLogMessage);
            logcrit(testLogMessage);

            // ASSERT logdebug
            if ((expectedLogMethods as string[]).includes('logdebug')) {
                expect(console.log).toBeCalledTimes(1)
                expect(console.log).toBeCalledWith({"0": `'${testLogMessage}'`, "correlation": "this is correlation token", "loglevel": "DEBUG"})
            } else {
                expect(console.log).toBeCalledTimes(0)
            }
            // ASSERT loginfo
            if ((expectedLogMethods as string[]).includes('loginfo')) {
                expect(console.info).toBeCalledTimes(1)
                expect(console.info).toBeCalledWith({"0": `'${testLogMessage}'`, "correlation": "this is correlation token", "loglevel": "INFO"})
            } else {
                expect(console.info).toBeCalledTimes(0)
            }

            // ASSERT logwarn
            if ((expectedLogMethods as string[]).includes('logwarn')) {
                expect(console.warn).toBeCalledTimes(1)
                expect(console.warn).toBeCalledWith({"0": `'${testLogMessage}'`, "correlation": "this is correlation token", "loglevel": "WARN"})
            } else {
                expect(console.warn).toBeCalledTimes(0)
            }

            // ASSERT logerror
            expect(console.error).toBeCalledTimes((expectedLogMethods as string[]).includes('logerror')
                && (expectedLogMethods as string[]).includes('logcrit') ? 2
                : (expectedLogMethods as string[]).includes('logerror') ? 1
                    : (expectedLogMethods as string[]).includes('logcrit') ? 1 : 0)
            if ((expectedLogMethods as string[]).includes('logerror')) {
                expect(console.error).toBeCalledWith({"0": `'${testLogMessage}'`, "correlation": "this is correlation token", "loglevel": "ERROR"})
            }
            // ASSERT logcrit
            if ((expectedLogMethods as string[]).includes('logcrit')) {
                expect(console.error).toBeCalledWith({"0": `'${testLogMessage}'`, "correlation": "this is correlation token", "loglevel": "CRIT"})
            }
        })
    test("if not set_correlation_token prior log* call 'UNDEFINED_CORR_ID' is used", () => {
        set_correlation_token(undefined)
        logwarn(testLogMessage)
        expect(console.warn).toBeCalledTimes(1)
        expect(console.warn).lastCalledWith({"0": `'${testLogMessage}'`, "correlation": "UNDEFINED_CORR_ID", "loglevel": "WARN"})
    })
    test("if not LOGLEVEL default loglevel is WARN", () => {
        set_correlation_token(undefined)
        process.env.LOGLEVEL = undefined

        logdebug(testLogMessage)
        loginfo(testLogMessage)
        logwarn(testLogMessage)
        logerror(testLogMessage)
        logcrit(testLogMessage)

        expect(console.info).toBeCalledTimes(0)
        expect(console.log).toBeCalledTimes(0)
        expect(console.warn).toBeCalledTimes(1)
        expect(console.error).toBeCalledTimes(2) //1 for error, 1 for crit
        expect(console.warn).nthCalledWith(1, {"0": `'${testLogMessage}'`, "correlation": "UNDEFINED_CORR_ID", "loglevel": "WARN"})
        expect(console.error).nthCalledWith(1, {"0": `'${testLogMessage}'`, "correlation": "UNDEFINED_CORR_ID", "loglevel": "ERROR"})
        expect(console.error).nthCalledWith(2, {"0": `'${testLogMessage}'`, "correlation": "UNDEFINED_CORR_ID", "loglevel": "CRIT"})
    })
});