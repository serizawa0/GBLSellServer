import { Request, Response, Router } from "express";
import { getCommands, submitCommand,} from "../controllers/GravityController";
import { Socket, Server as SocketIOServer } from 'socket.io';


// const Gravityrouter = Router();
//  Gravityrouter.get('/', (req:Request,res:Response) => {
//     getCommands(req,res)
//  });

//  Gravityrouter.post('/submit', (req:Request,res:Response) => {
//    submitCommand(req,res)
//  })

// export default Gravityrouter

export default function Gravityrouter(io: SocketIOServer) {
  const router = Router();

  router.get('/', (req:Request,res:Response) => {
    getCommands(req,res)
  });

  router.post('/submit', (req: Request, res: Response) => {
    const data = req.body;
    
    submitCommand(req,res).then(
      element =>{
        res.json({data:element})
        io.emit('gravityCommand', element);
      }
    )
    // res.send({ message: 'Événement envoyé via socket.io' });
  });

  return router;
}