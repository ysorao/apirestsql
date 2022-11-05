import { Router} from 'express';
import { getInfo, getInfoHabeas, getInfoHabeasMenor, createHabeas,createHabeasMenor, getInfoMDById, updateHabeasMenor, createInfo } from '../controllers/info.controllers'

const jwt = require('jsonwebtoken')


const verifyToken = ((req, res, next)=>{
    let token = req.headers['x-access-token'] || req.headers['authorization'];
    // console.log(token)
    if(!token){
        res.sendStatus(401).send({
            error: 'Se requiere token para la autorizacion'
        })
        return
    }
    token = token.split(" ")[1]
    console.log(token)
    if(token){
        jwt.verify(token, 'secretkey', (error, decoded)=>{
            if(error){
                return res.json({
                    message: 'El token no es valido'
                });
            }else{
                req.decoded = decoded
                next();
            }
        })
    }
})


const router = Router()

router.get('/token', verifyToken, (req, res)=>{
    res.json({
        message: "Token Access",
        sendStatus: 200
    })
})

router.get('/info', getInfo)

router.get('/infoMD/:id', getInfoMDById)

router.get('/infoHabeas', getInfoHabeas )

router.get('/infoHabeasMenor', getInfoHabeasMenor )

router.post('/createHabeas', createHabeas )

router.post('/createHabeasMenor', createHabeasMenor )

router.post('/createInfo', createInfo )

router.put('/updateHabeasMenor/:id', updateHabeasMenor)


export default router
