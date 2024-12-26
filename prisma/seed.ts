import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Clear existing data
  await prisma.totalblogs.deleteMany({});

  // Seed data matching your BlogCards component
  const seedData = [
    { category: "Technology", month: "Jan", active: 20, scheduled: 10 },
    { category: "Technology", month: "Feb", active: 25, scheduled: 15 },
    { category: "Travel", month: "Jan", active: 15, scheduled: 5 },
    { category: "Travel", month: "Feb", active: 18, scheduled: 8 },
    { category: "Food", month: "Jan", active: 30, scheduled: 12 },
    { category: "Food", month: "Feb", active: 35, scheduled: 15 },
  ];

  for (const data of seedData) {
    await prisma.totalblogs.create({
      data: data,
    });
  }

  console.log("Database has been seeded");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
