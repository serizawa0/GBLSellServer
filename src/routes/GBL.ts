import { Request, Response, Router } from "express";
import { Socket, Server as SocketIOServer } from 'socket.io';
import { createGroup, getGroupsOfUser, getUsers, logInApp, submtUser } from "../controllers/GBLController";
import { approuverFacture, getFactures, submitfacture, validateFacture } from "../controllers/subControllers/CaisseController";
import { PrismaClient, PrivateMessage } from "../generated/prisma";
import User from "../classes/User";
import { ok } from "assert";
import { getPrivateMessages } from "../controllers/subControllers/ChatController";
import Utilisateur from "../classes/Utilisateur";

let users:User[] = []

const prisma = new PrismaClient()

export function getUsersConnected(){
    return users
}
export function disconnect(socketId:string){
    const usrs = users.filter(usr => usr.socketId!= socketId)
    users = usrs
    return true
}

export function registerUserConnected(user:User){
    users.push(user)
}

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
                let resultat:string|Utilisateur = ''
                if (typeof(element)!= 'string') {
                    console.log(element.id);
                    const target = users.find((u) => u.userId === element.id);
                    if (!target) {
                        resultat=element
                    }
                }
                res.json(resultat)
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
    router.post('/approuverFacture',(req:Request,res:Response) => {
        approuverFacture(req.body).then(fac=> {
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
    router.post('/getGroups', (req:Request,res:Response)=> {
        const userId = req.body
        getGroupsOfUser(userId).then(
            element => {
                res.json(element)
            }
        )
    })
    router.post('/createGroup', (req:Request,res:Response)=> {
        const userId = req.body.userId
        const name = req.body.name
        createGroup(userId,name).then(data=> {
            res.json(data)
        })
    })

    router.post('/getPrivateMessages', (req:Request,res:Response)=> {
        const couple = req.body
        getPrivateMessages(couple).then(
            element => {
                res.json({
                    data:element
                })
            }
        )
    })

    router.post('/createFileGroup', (req:Request,res:Response)=> {
        console.log(req.body);
        res.json({
            data:'okay'
        })
    })
    return router;
}