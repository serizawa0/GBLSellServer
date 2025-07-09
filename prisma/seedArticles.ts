import { PrismaClient } from "../src/generated/prisma"

const prisma = new PrismaClient()


async function clearUsers() {
    await prisma.article.deleteMany();
    console.log('🚮 Table `Articles` vidée avec succès');
  }
  
  clearUsers()
    .finally(() => prisma.$disconnect());