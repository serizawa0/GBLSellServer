import { PrismaClient } from "../src/generated/prisma"

const prisma = new PrismaClient()


async function clearUsers() {
    await prisma.fileGroup.deleteMany();
    console.log('🚮 Table `Documents` vidée avec succès');
  }
  
  clearUsers()
    .finally(() => prisma.$disconnect());