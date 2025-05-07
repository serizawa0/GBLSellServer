import { PrismaClient } from "../src/generated/prisma";

const prisma = new PrismaClient()


// async function clearUsers() {
//     await prisma.user.deleteMany();
//     console.log('🚮 Table `User` vidée avec succès');
//   }
  
//   clearUsers()
//     .finally(() => prisma.$disconnect());
  
async function main() {
  await prisma.user.createMany({
    data:[
        {
            email:'naina@gmail.com',
            name:'Naina',
            idUserCat:4,
            password:'naina'
        },
        {
            email:'rakotomangatsilavina@gmail.com',
            name:'Serizawa',
            idUserCat:5,
            password:'serizawa'
        },
        {
            email:'hasina@gbline.mg',
            name:'Hasina',
            idUserCat:6,
            password:'hasina'
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