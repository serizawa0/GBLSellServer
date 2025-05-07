import { Request, Response } from "express";
import { getCommandsFromService, submitCommandonService } from "../services/GravityService";
import Panier from "../classes/Panier";



export const getCommands = async (req: Request, res: Response): Promise<Response> => {
    try {
      const data = await getCommandsFromService()
      return res.json(data);
    } catch (error) {
      return res.status(500).json({ error: 'Erreur lors de la récupération des données' });
    }
};

export const submitCommand = async (req: Request, res: Response): Promise<Panier[]> => {
  try {
    const request = req.body
    const data = await submitCommandonService(request)
    return data;
  } catch (error) {
    // return res.status(500).json({ error: 'Erreur lors de la récupération des données' });
    return []
  }
};