import FichierGroup from "./subclasses/FichierGroup"


export default class Project{
    id:number|null
    type:string
    docs:FichierGroup[]
    constructor(id:number,type:string){
        this.type = type
        this.docs= []
        this.id = id
    }
}