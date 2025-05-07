import { log } from "node:console";
import { PrismaClient } from "../src/generated/prisma";

const prisma = new PrismaClient()

async function main(){
    await prisma.factureElement.deleteMany()
    console.log('Table FactureElements vidée avec succès');
    
}
main().finally(
    ()=> {
        prisma.$disconnect()
    }
)