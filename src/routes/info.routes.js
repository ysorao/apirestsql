import { Router } from 'express';
import { getInfo } from '../controllers/info.controllers'

const router = Router()

router.get('/info', getInfo)
// router.post('/info', )
// router.put('/info', )
// router.delete('/info', )

export default router