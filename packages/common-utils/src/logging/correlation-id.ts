import { uuid } from "../uuid"

let _correlation_token: string

export const get_correlation_token = () => _correlation_token || 'UNDEFINED_CORR_ID'
//@ts-ignore
export const set_correlation_token = (input) => {
    // reset _correlation_token
    if (!input) {
        _correlation_token = 'UNDEFINED_CORR_ID'
    }
    // in case someone passed `new String('correlation token')`
    else if (input instanceof String) {
        _correlation_token = String(input)
    }
    // in any other case where input is a string
    else if (typeof input === 'string') {
        _correlation_token = String(input)
    }
    else if (input?.correlation_token) {

        _correlation_token = input?.correlation_token
    }
    // if correlation token comes as sqs attribute
    else if (input?.messageAttributes?.correlation_token?.stringValue) {

        _correlation_token = input?.messageAttributes?.correlation_token?.stringValue
    }
    // try get correlation token from sqs message body
    else if (input?.body) {
        try {
            _correlation_token = JSON.parse(input?.body).correlation_token
        } catch (err) {
            // silently fail to set correlation token
        }
    }
    else {
        _correlation_token = uuid()
    }
}