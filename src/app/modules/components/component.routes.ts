import express from 'express'
import { ComponentController } from './component.controller'

const router = express.Router()

router.post('/add_component', ComponentController.addComponent)
router.get('/', ComponentController.getAllComponent)

export const ComponentRoutes = {
  router,
}
