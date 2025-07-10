import { Request, Response, Router, Express } from "express";
import { Socket, Server as SocketIOServer } from 'socket.io';
import { createGroup, getGroupsOfUser, getUsers, logInApp, submtUser } from "../controllers/GBLController";
import { approuverFacture, getFactures, submitfacture, validateFacture } from "../controllers/subControllers/CaisseController";
import { PrismaClient, PrivateMessage } from "../generated/prisma";
import User from "../classes/User";
import { ok } from "assert";
import { getPrivateMessages } from "../controllers/subControllers/ChatController";
import Utilisateur from "../classes/Utilisateur";
import { createFileGroup, createProject, getFileGroups, getProjects, getProjectTypes } from "../controllers/subControllers/ProjectController";
import { entree, getArticles, sortie, subArticle } from "../controllers/subControllers/StockController";
import multer from "multer";
import { getFile, removeFile, subFiles } from "../controllers/subControllers/FileController";

let users:User[] = []

const upload = multer({ storage:multer.memoryStorage() })

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

    router.get('/getProjectTypes', (req:Request,res:Response) => {
        getProjectTypes().then(data => {
            res.json(data)
        })
    })
    router.get('/getProjects', (req:Request,res:Response) => {
        getProjects().then( data => res.json(data))
    })

    router.post('/createProject', (req:Request,res:Response)=> {
        console.log(req.body.typeId+' '+req.body.client);
        const ti = parseInt(req.body.typeId)
        createProject(ti, req.body.client).then(
            data => {
                res.json((data))
            }
        )
    })

    router.post('/getFileGroups', (req:Request,res:Response) => {
        console.log(req.body);
        getFileGroups(req.body.id).then(data => {
            res.json((data))
        })
    })

    router.post('/createFileGroup', (req:Request,res:Response)=> {
        console.log(req.body);
        createFileGroup(req.body.projectId, req.body.name).then(data => {
            res.json((data))
        })
    })

    router.get('/getArticles', (req:Request,res:Response)=> {
        getArticles().then(data => {
            res.json((data))
        })
    })
    router.post('/subArticle', (req:Request,res:Response)=> {
        console.log(req.body);
        subArticle(req.body.libele,req.body.nombre,req.body.unite).then(
            data => res.json((data))
        )
    })
    router.post('/entreeArticle', (req:Request,res:Response)=> {
        console.log(req.body);
        const liste:{id:number,nombre:number}[] = req.body
        const promises = liste.map(element=> entree(element.id,element.nombre))
        Promise.all(promises).then(results=> {
            results.forEach(data => console.log(data))
            return getArticles()
        }).then(data => res.json((data)))
        .catch(error=> {
            console.log(error);
            res.status(500).send('error')
        })
    })
    router.post('/sortieArticle', (req:Request,res:Response)=> {
        console.log(req.body);
        const liste:{id:number,nombre:number}[] = req.body
        const promises = liste.map(element=> sortie(element.id,element.nombre))
        Promise.all(promises).then(results=> {
            results.forEach(data => console.log(data))
            return getArticles()
        }).then(data => res.json((data)))
        .catch(error => {
            console.log(error);
            res.status(500).send('erreur')
        })
    })
    router.post('/getFile', (req:Request,res:Response) => {
        console.log(req.body)
        const id = req.body.id
        getFileGroups(id).then(data => {
            // res.
        })
    })
    router.post('/subFiles', upload.array('files') , (req:Request,res:Response) => {
        try {
            const files = req.files as Express.Multer.File[]
            const groupid = parseInt(req.body.groupId)
            // console.log(files);
            // console.log(groupid);
            
            
            subFiles(files,groupid).then(data => {
                res.json((data))
            })
        } catch (error) {
            
        }
    })
    router.post('/afficheFile', (req:Request,res:Response) => {
        getFile(req.body.id).then(file => {
            if(file){
                res.setHeader('Content-Type', file.mimeType);
                res.setHeader('Content-Disposition', `inline; filename="${file.name}"`);
                res.send(file.data);
            }
            else{
                res.status(400)
            }
        })
    })

    router.post('/deleteFile', (req:Request,res:Response) => {
        const id = req.body.id
        const groupId = req.body.groupId
        removeFile(id,groupId).then(element => {
            res.json(element)
        })
    })

    return router;
}