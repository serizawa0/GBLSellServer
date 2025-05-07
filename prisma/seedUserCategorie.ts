import { PrismaClient } from "../src/generated/prisma";

const prisma = new PrismaClient()

async function main(){
    await prisma.userCategorie.deleteMany()
    console.log('Table UserCategorie vidée avec succès');
    
}
main().finally(
    ()=> {
        prisma.$disconnect()
    }
)