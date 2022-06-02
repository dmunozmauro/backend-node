import express from 'express'
import {obtenerService} from '../service/obtener'

const app = express()
const router = express.Router()

app.use('/health', router)
router.get('/', (req, res) => {
    res.json({ health: 'OKi Doki ok' })
})

router.get('/obtener', obtenerService)

export default app

