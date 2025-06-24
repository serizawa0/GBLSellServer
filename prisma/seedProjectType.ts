import { log } from "node:console";
import { PrismaClient } from "../src/generated/prisma";

const prisma = new PrismaClient()

async function create(){
    await prisma.projectType.createMany({
        data:[
            {
                typeName:'Rehab'
            },
            {
                typeName:'BTS'
            },
            {
                typeName:'PCS'
            },
            {
                typeName:'Strengthing'
            },
            {
                typeName:'Colloc'
            },
            {
                typeName:'BASS'
            }
        ]
    })
}

create().finally(
    ()=> {
        prisma.$disconnect()
    }
)

// async function main(){
//     await prisma.projectType.deleteMany()
//     console.log('Table ProjectType vidée avec succès');
    
// }
// main().finally(
//     ()=> {
//         prisma.$disconnect()
//     }
// )