import { IComponents } from './component.interface'
import { Component } from './component.model'

const addComponent = async (data: IComponents) => {
  const result = await Component.create(data)
  return result
}
const getAllComponent = async () => {
  const result = await Component.find()
  return result
}
const getSingleComponent = async (id: string) => {
  const result = await Component.findOne({ _id: id })
  return result
}
export const ComponentService = {
  addComponent,
  getAllComponent,
  getSingleComponent,
}
