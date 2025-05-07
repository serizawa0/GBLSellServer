import Panier from '../classes/Panier'

let commands:Panier[] = []

export const getCommandsFromService = async (): Promise<any> => {
    // Exemple de récupération de données (peut être depuis une DB, une API, etc.)
    return commands
};

export const submitCommandonService = async (data:Panier): Promise<Panier[]> => {
  // Exemple de récupération de données (peut être depuis une DB, une API, etc.)
  commands.push(data)
  return commands;
};