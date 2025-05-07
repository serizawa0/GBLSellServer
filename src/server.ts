import express, { Request, Response } from 'express';
import cors from 'cors'
import path from 'path';
import http from 'http';
import { Socket, Server as SocketIOServer } from 'socket.io';

import Gravityrouter from './routes/Gravity';
import User from './classes/User';
import Panier from './classes/Panier';
import SolaireRouter from './routes/Solaire';
import Gblrouter from './routes/GBL';



const app = express();

const PORT = 3000;


// Middleware
app.use(express.json());
app.use(cors());

// Servir les images depuis un dossier "images"

const users:User[] = []

const server = http.createServer(app)
// Démarrer le serveur
// app.listen(PORT, () => {
//     console.log(`Serveur démarré sur http://localhost:${PORT}`);
// });

const io = new SocketIOServer(server, {
    cors: {
      origin: '*', // à adapter en prod
      methods: ['GET', 'POST']
    }
  });
  
  // 👉 Gestion des connexions WebSocket
  io.on('connection', (socket:Socket) => {
    console.log(`✅ Client connecté : ${socket.id}`);
  
    socket.on('register', (userId: string) => {
      users.push({ userId, socketId: socket.id });
      console.log(`👤 Utilisateur ${userId} enregistré avec socket ${socket.id}`);
    });

    socket.on('private-message', ({ from, to, message }) => {
      const target = users.find((u) => u.userId === to);
      if (target) {
        io.to(target.socketId).emit('private-message', { from, message });
        console.log(`📩 ${from} → ${to}: ${message}`);
      }
    });

    socket.on('message', (data) => {
      console.log(`📨 Message reçu :`, data);
      // Exemple : émettre à tous les clients sauf l’émetteur
      socket.broadcast.emit('message', data);
    });

    socket.on('gravityCommand', (data:Panier) => {
      console.log(`📨 Commande reçue :`, data);

      socket.broadcast.emit('gravityCommand', data);
    });
  
    socket.on('disconnect', () => {
      console.log(`❌ Client déconnecté : ${socket.id}`);
    }); 
  });


  
  
  app.use('/images', express.static(path.join(__dirname, 'images')));

  app.use('/Gravity', Gravityrouter(io))
  app.use('/Solaire', SolaireRouter(io))
  app.use('/GBL', Gblrouter(io))
  
  // Route pour tester avec une image spécifique
  app.get('/image', (req: Request, res: Response) => {
      res.sendFile(path.join(__dirname, 'images', 'exemple.jpg'));
  });
  
  app.get('/test', (req: Request, res: Response) => {
      console.log(__dirname);  
      res.send('Test OK');
  });
  
  app.post('/data', (req: Request, res: Response) => {
      console.log('Données reçues :', req.body); // affiche les données envoyées
      res.json({ received: 'okay' });
  });
  
  app.post('/postGravityPanier', (req: Request, res: Response) => {
      const panier = req.body;
      console.log(panier);
      io.emit('gravityCommand', panier)
      res.json({ received: 'okay' });
  });
  
  app.post('/postSolairePanier', (req: Request, res: Response) => {
      const panier = req.body;
      console.log(panier);
      res.json({ received: 'okay' });
  });

server.listen(PORT, () => {
    console.log(`🚀 Serveur HTTP & WebSocket lancé sur http://localhost:${PORT}`);
});
