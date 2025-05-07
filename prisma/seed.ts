import { PrismaClient } from "../src/generated/prisma";

const prisma = new PrismaClient()


async function main() {
  await prisma.userCategorie.createMany({
    data:[
      {
        nomCat:'DG',
        autorisation:2
      },
      {
        nomCat:'IT',
        autorisation:0
      },
      {
        nomCat:'Finance',
        autorisation:1
      }
    ]
  })
}

main()
  .then(() => {
    console.log('🌱 Données insérées avec succès !');
    return prisma.$disconnect();
  })
  .catch((e) => {
    console.error(e);
    return prisma.$disconnect();
  });