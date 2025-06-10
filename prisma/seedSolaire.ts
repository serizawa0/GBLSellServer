import { PrismaClient } from "../src/generated/prisma";

const prisma = new PrismaClient()


// async function clearItems() {
//     await prisma.itemSolaire.deleteMany();
//     console.log('🚮 Table `ItemSolaire` vidée avec succès');
//   }
  
//   clearItems()
//     .finally(() => prisma.$disconnect());
  
async function main() {
  await prisma.itemSolaire.createMany({
    data:[
        {
            intitule:'Kit Complet',
            image:'kitcomplet.jpg'
        },
        {
            intitule:'Lampadaire',
            image:'lampadaire.jpg'
        },
        {
            intitule:'Led Isolée',
            image:'ledIsolee.jpg'
        },
        {
            intitule:'Projecteur',
            image:'projecteur.jpg'
        },
        {
            intitule:'radio',
            image:'radio.jpg'
        },
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