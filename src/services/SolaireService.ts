import Panier from '../classes/Panier'
import PanierSolaire from '../classes/PanierSolaire'

let commands:PanierSolaire[] = []


export const getCommandsFromService = async () => {
    return commands
}

export const submitCommandonService = async (data:PanierSolaire):Promise<PanierSolaire[]> => {
    commands.push(data)
    return commands
}