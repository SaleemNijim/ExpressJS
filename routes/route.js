import express from 'express'
import { aboutController } from '../controllers/aboutControllers.js'
import { homeController } from '../controllers/homeControllers.js'



const router = express.Router()

router.get('/', homeController)
router.get('/about', aboutController)


export default router