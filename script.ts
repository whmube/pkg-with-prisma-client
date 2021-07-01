import { PrismaClient } from "@prisma/client";
require("dotenv").config();

const prisma = new PrismaClient();

// A `main` function so that you can use async/await
async function main() {
  // ... you will write your Prisma Client queries here

  let users = await prisma.user.findMany({ include: { posts: true } });
  console.log(users);

}

main()
  .catch(e => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
