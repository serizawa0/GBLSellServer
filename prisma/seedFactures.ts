import { log } from "node:console";
import { PrismaClient } from "../src/generated/prisma";

const prisma = new PrismaClient()

async function main(){
    await prisma.facture.deleteMany()
    console.log('Table Facture vidée avec succès');
    
}
main().finally(
    ()=> {
        prisma.$disconnect()
    }
)