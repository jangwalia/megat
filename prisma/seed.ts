import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Clear existing data
  await prisma.totalPets.deleteMany({});

  // Pet sales data
  const petData = [
    {
      month: "Jan",
      pets: { dogs: 400, cats: 240, birds: 150, rabbits: 100, hamsters: 80 },
    },
    {
      month: "Feb",
      pets: { dogs: 300, cats: 139, birds: 180, rabbits: 90, hamsters: 95 },
    },
    {
      month: "Mar",
      pets: { dogs: 200, cats: 980, birds: 160, rabbits: 120, hamsters: 75 },
    },
    {
      month: "Apr",
      pets: { dogs: 278, cats: 390, birds: 140, rabbits: 110, hamsters: 85 },
    },
    {
      month: "May",
      pets: { dogs: 189, cats: 480, birds: 170, rabbits: 95, hamsters: 90 },
    },
    {
      month: "Jun",
      pets: { dogs: 239, cats: 380, birds: 190, rabbits: 105, hamsters: 70 },
    },
  ];

  // Transform and seed the pet data
  for (const monthData of petData) {
    const { month, pets } = monthData;

    // Create entries for each pet type
    for (const [petType, count] of Object.entries(pets)) {
      await prisma.totalPets.create({
        data: {
          month,
          petType,
          count,
        },
      });
    }
  }

  console.log("Database has been seeded with pet sales data");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
