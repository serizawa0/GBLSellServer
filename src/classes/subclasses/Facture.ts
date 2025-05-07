import Utilisateur from "../Utilisateur"
import FactureElement from "./FactureElement"

export default class facture{
    id:number
    titre:string
    demandant:Utilisateur
    elements:FactureElement[]
    total:number
    state:string
    constructor(titre:string, demandant:Utilisateur, elements:FactureElement[]){
        this.id = 0
        this.titre = titre
        this.demandant = demandant 
        this.elements = elements
        let total  = 0
        this.elements.forEach(element => {
            total+=element.montant
        });
        this.total = total
        this.state = 'en attente'
    }
}