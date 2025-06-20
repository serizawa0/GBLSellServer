import { Request, Response, Router } from "express";
import { Socket, Server as SocketIOServer } from 'socket.io';
import { getCommands, getItems, submitCommand } from "../controllers/SolaireController";


export default function SolaireRouter(io:SocketIOServer){
   const router = Router();
   router.get('', (req:Request, res:Response) => {
      getCommands(req,res)
   })
   router.get('/items', (req:Request, res:Response) => {
      getItems().then(items => {
         res.json(items)
      })
   })

   router.post('/submit', (req:Request, res:Response) => {
      submitCommand(req,res).then(
         element => {
            res.json({data:element})
            io.emit('solaireCommand', element)
         }
      )
   })
   return router
}