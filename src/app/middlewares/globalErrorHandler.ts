/* eslint-disable @typescript-eslint/no-unused-vars */
import { ErrorRequestHandler, NextFunction, Request, Response } from 'express'
import config from '../../config'
import ApiError from '../error/ApiError'

import { handleCastError } from '../error/handleCastError'
import { IGenericErrorMessage } from '../interfaces/error'

const globalErrorHandler: ErrorRequestHandler = (
  err,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let statusCode = 500
  let message = 'Something went wrong !'
  let errorMessage: IGenericErrorMessage[] = []

  //handling cast error
  if (err?.name === 'CastError') {
    const simplifiedError = handleCastError(err)
    simplifiedError.statusCode = statusCode
    simplifiedError.message = message
  }

  //handling Apierror
  else if (err instanceof ApiError) {
    statusCode = err?.statusCode
    message = err.message
    errorMessage = err?.message
      ? [
          {
            path: '',
            message: err.message,
          },
        ]
      : []
  }
  res.status(statusCode).json({
    success: false,
    message,
    errorMessage,
    stack: config.env === 'development' ? err?.stack : undefined,
  })
}

export default globalErrorHandler
