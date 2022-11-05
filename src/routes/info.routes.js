import { Router } from 'express';
import { getInfo, getInfoHabeas, getInfoHabeasMenor, createHabeas,createHabeasMenor, getInfoMDById, updateHabeasMenor, createInfo } from '../controllers/info.controllers'

const router = Router()

router.get('/info', getInfo)

router.get('/infoMD/:id', getInfoMDById)

router.get('/infoHabeas', getInfoHabeas )

router.get('/infoHabeasMenor', getInfoHabeasMenor )

router.post('/createHabeas', createHabeas )

router.post('/createHabeasMenor', createHabeasMenor )

router.post('/createInfo', createInfo )

router.put('/updateHabeasMenor/:id', updateHabeasMenor)


export default router
