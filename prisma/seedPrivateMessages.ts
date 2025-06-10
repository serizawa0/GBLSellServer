import { log } from "node:console";
import { PrismaClient } from "../src/generated/prisma";

const prisma = new PrismaClient()

async function main(){
    await prisma.privateMessage.deleteMany()
    console.log('Table PrivateMessages vidée avec succès');
    
}
main().finally(
    ()=> {
        prisma.$disconnect()
    }
)