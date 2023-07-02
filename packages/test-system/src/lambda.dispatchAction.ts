import { logdebug, loginfo, set_correlation_token } from "@incta/common-utils"
import { dispatchAction } from "@incta/dispatch-action"
import { injectDomainContext } from "./domain-context/injectDomainContext"
import { __domain } from "@incta/ddb-model"
import { digestResult } from "@incta/common-utils"

export const handler = async (evnt: any, context: any) => {
    logdebug("[handler] TEST SYSTEM RECEIVED EVENT", evnt)
    
    injectDomainContext()
    set_correlation_token(evnt)
        
    let result
    try {
        result = await dispatchAction(evnt, evnt.identity)
    } catch (err: any) {
        result = digestResult(err)
    }

    loginfo("[handler] TEST SYSTEM RETURNS", result)
    return result
}