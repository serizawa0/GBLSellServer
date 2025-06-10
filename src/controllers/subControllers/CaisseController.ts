import { create } from "domain";
import facture from "../../classes/subclasses/Facture";
import { PrismaClient } from "../../generated/prisma";

interface FactureElement {
    libelle: string;
    nombre: number;
    montant:number
  }

let factures:facture[] = []
const prisma = new PrismaClient()

export const getFactures = async () => {
    const facts = await prisma.facture.findMany({
        select:{
            id:true,
            date:true,
            elements:true,
            titre:true,
            user:true,
            total:true,
            state:true,
            categorie:true
        },
        orderBy:{
            id:'desc'
        }
    })
    return facts
}

export const submitfacture = async (facture:facture) => {
    // factures.push(facture)
    let fact:FactureElement[] = []
    facture.elements.forEach(element => {
        fact.push({
            libelle:element.libelle,
            nombre:element.nombre,
            montant:element.montant
        })
    });
    await prisma.facture.create({
        data:{
            titre:facture.titre,
            state:facture.state,
            elements:{
                create:fact
            },
            total:facture.total,
            date:new Date(),
            user:{ connect:{ id:facture.user.id } },
            categorie:facture.categorie
        }
    })
    const factReturn = await prisma.facture.findMany({
        include:{
            user:{
                select:{
                    id:true,
                    email:true,
                    name:true,
                }
            },
            elements:{
                select:{
                    id:true,
                    libelle:true,
                    nombre:true,
                    montant:true
                }
            }
        },
        orderBy:{
            id:'desc'
        }
        // ,select:{
        //     id:true,
        //     date:true,
        //     elements:true,
        //     titre:true,
        //     user:true,
        //     total:true,
        //     state:true,
        //     categorie:true
        // },
        // orderBy:{
        //     id:'desc'
        // },
    })
    return factReturn
}
export const approuverFacture = async (facture:facture) => {
    // factures.push(facture)
    let fact:FactureElement[] = []
    facture.elements.forEach(element => {
        fact.push({
            libelle:element.libelle,
            nombre:element.nombre,
            montant:element.montant
        })
    });
    await prisma.facture.update({
        where:{id:facture.id},
        data:{
            state:'en attente de validation'
        }
    })
    const factReturn = await prisma.facture.findMany({
        include:{
            user:{
                select:{
                    id:true,
                    email:true,
                    name:true,
                }
            },
            elements:{
                select:{
                    id:true,
                    libelle:true,
                    nombre:true,
                    montant:true
                }
            }
        },
        orderBy:{
            id:'desc'
        }
    })
    return factReturn
}

export const validateFacture = async (facture:facture) => {
    const index = factures.findIndex(data => data.state=='en attente')
    await prisma.facture.update({
        where:{id:facture.id},
        data:{
            state:'validée'
        }
    })
    const fact = await prisma.facture.findMany({
        include:{
            user:{
                select:{
                    id:true,
                    email:true,
                    name:true,
                }
            },
            elements:{
                select:{
                    id:true,
                    libelle:true,
                    nombre:true,
                    montant:true
                }
            }
        },
        orderBy:{
            id:'desc'
        }
    })
    return fact
}