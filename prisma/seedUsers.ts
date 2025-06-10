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
            password:'naina',
            avatar:'avatar2.jpeg'
        },
        {
            email:'rakotomangatsilavina@gmail.com',
            name:'Serizawa',
            idUserCat:5,
            password:'serizawa',
            avatar:'avatar1.jpeg'
        },
        {
            email:'hasina@gbline.mg',
            name:'Hasina',
            idUserCat:6,
            password:'hasina',
            avatar:'avatar3.jpeg'
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