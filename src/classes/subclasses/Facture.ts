import Utilisateur from "../Utilisateur"
import FactureElement from "./FactureElement"

export default class facture{
    id:number
    titre:string
    user:Utilisateur
    elements:FactureElement[]
    total:number
    state:string
    categorie:string
    constructor(titre:string, user:Utilisateur, elements:FactureElement[],categorie:string){
        this.id = 0
        this.titre = titre
        this.user = user 
        this.elements = elements
        let total  = 0
        this.elements.forEach(element => {
            total+=element.montant
        });
        this.total = total
        this.state = 'en attente'
        this.categorie = categorie
    }
}