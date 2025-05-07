import { Request, Response, Router } from "express";
import { Socket, Server as SocketIOServer } from 'socket.io';
import { getUsers, logInApp, submtUser } from "../controllers/GBLController";
import { getFactures, submitfacture, validateFacture } from "../controllers/subControllers/CaisseController";
import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient()

export default function Gblrouter(io: SocketIOServer) {
    const router = Router();
    router.get('/users', (req:Request,res:Response) => {
        getUsers().then(
            users => {
                res.json({
                    data:users
                })
            }
        )
    })

    router.post('/logInApp',(req:Request,res:Response) => {
        // console.log(req.body);
        
        logInApp(req.body).then(
            element => {
                console.log(element);
                
                res.json(element)
            }
        )
    })
    router.post('/test', (req:Request,res:Response)=> {
        console.log(req.body);
        
    })

    router.get('/demandeCaisse',(req:Request,res:Response) => {
        getFactures().then(fac=> {
            res.json({data:fac})
        })
    })

    router.post('/subDemandeCaisse', (req:Request,res:Response) => {
        console.log(req.body);
        
        submitfacture(req.body).then(fac=> {
            io.emit('new-demande-caisse',fac)
            res.json({data:fac})
        })
    })
    router.post('/validerFacture',(req:Request,res:Response) => {
        validateFacture(req.body).then(fac=> {
            io.emit('new-demande-caisse',fac)
            res.json({data:fac})
        })
    })

    router.post('submitUser', (req:Request,res:Response)=> {
        const user = req.body
        submtUser(user).then(
            element => {
                res.json({
                    data:element
                })
            }
        )
    })
    return router;
}