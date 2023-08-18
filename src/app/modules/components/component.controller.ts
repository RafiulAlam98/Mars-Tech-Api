import { Request, Response } from 'express'
import { catchAsync } from '../../../shared/catchAsync'
import httpStatus from 'http-status'
import sendResponse from '../../../shared/sendResponse'
import { ComponentService } from './component.service'

const addComponent = catchAsync(async (req: Request, res: Response) => {
  const { ...data } = req.body
  const result = await ComponentService.addComponent(data)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'pc component added successfully!',
    data: result,
  })
})
const getAllComponent = catchAsync(async (req: Request, res: Response) => {
  const result = await ComponentService.getAllComponent()

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'pc component retrieved successfully!',
    data: result,
  })
})

export const ComponentController = {
  addComponent,
  getAllComponent,
}
