import { digestResult } from '@incta/common-utils';
import { NextFunction, Request, Response } from 'express';

export const handleErrors = (err: Error, req: Request, res: Response, next: NextFunction) => {

    if (res.headersSent) {
        return next(err)
    }

    const result = digestResult(err)

    res.status(result.status)
    res.send(result)
}