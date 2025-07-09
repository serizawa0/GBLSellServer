import { PrismaClient } from "../src/generated/prisma";

const prisma = new PrismaClient()
const main = async ()=> {
    await prisma.project.deleteMany()
    console.log('Table Project vidée avec succès');
}
main().finally(
    ()=> {
        prisma.$disconnect()
    }
)