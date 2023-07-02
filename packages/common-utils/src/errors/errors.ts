export class NotAuthenticatedError extends Error { }
export class NotAuthorizedError extends Error { }
export class ValidationError extends Error { }
export class DdbError extends Error { }

export interface ICommandResult {
    status: number,
    errors?: [{errorType:string, message:string, errorStack?: string}]
}

export const digestResult = (err?: Error | any): ICommandResult => {
    const result: ICommandResult = {
        status: 200,
    }

    if (err) {
        if (err instanceof DdbError) {
            result.status = 403
            result.errors = [{
                errorType: 'DdbError',
                message: err.message,
                errorStack: process.env.NODE_ENV !== 'production' ? JSON.stringify(err.stack?.split('\n'), null, 4) : undefined
            }]
        }
        else if (err instanceof NotAuthenticatedError) {
            result.status = 401
            result.errors = [{
                errorType: 'NotAuthenticatedError',
                message: err.message,
                errorStack: process.env.NODE_ENV !== 'production' ? JSON.stringify(err.stack?.split('\n'), null, 4) : undefined
            }]
        }
        else if (err instanceof NotAuthorizedError) {
            result.status = 403
            result.errors = [{
                errorType: 'NotAuthorizedError',
                message: err.message,
                errorStack: process.env.NODE_ENV !== 'production' ? JSON.stringify(err.stack?.split('\n'), null, 4) : undefined
            }]
        }
        else if (err instanceof ValidationError) {
            result.status = 403
            result.errors = [{
                errorType: 'ValidationError',
                message: err.message,
                errorStack: process.env.NODE_ENV !== 'production' ? JSON.stringify(err.stack?.split('\n'), null, 4) : undefined
            }]
        }
        else {
            result.status = 500
            result.errors = [{
                errorType: 'ServerError',
                message: err.message,
                errorStack: process.env.NODE_ENV !== 'production' ? JSON.stringify(err.stack?.split('\n'), null, 4) : undefined
            }]
        }
    }
    return result
}