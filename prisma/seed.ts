import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Clear existing data
  await prisma.scheduler.deleteMany({});

  // Seed data matching your BlogCards component
  const seedData = [
    { day: "Monday", spots: 5 },
    { day: "Tuesday", spots: 3 },
    { day: "Wednesday", spots: 4 },
    { day: "Thursday", spots: 2 },
    { day: "Friday", spots: 6 },
  ];

  for (const data of seedData) {
    await prisma.scheduler.create({
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
