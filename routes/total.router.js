import { Router } from 'express'
import totalController from './../controllers/total.controller'

const router = Router()

router.get('/', totalController.findAll)

router.get('/last', totalController.findLast)

router.post('/', totalController.create)

export default router