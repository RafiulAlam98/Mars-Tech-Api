import express from 'express'
import { ComponentRoutes } from '../modules/components/component.routes'

const router = express.Router()

const moduleRoutes = [{ path: '/component', route: ComponentRoutes.router }]

moduleRoutes.forEach(route => router.use(route.path, route.route))
export default router
