import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Clear existing data
  await prisma.blogs.deleteMany({});

  // Blog seed data
  const blogData = [
    {
      title: "How to Create a Cozy Living Space",
      category: "Home Decor",
      createdAt: new Date("2024-03-20"),
      status: "published",
      author: "Emma Thompson",
      content:
        "Transform your living space into a cozy sanctuary with these modern minimalist design ideas. Learn about color psychology, furniture arrangement, and lighting techniques that can make your home both comfortable and stylish...",
      mainImage:
        "https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?q=80&w=2909&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Spring Gardening Tips",
      category: "Gardening",
      createdAt: new Date("2024-03-19"),
      status: "published",
      author: "James Wilson",
      content:
        "Get your garden ready for spring with these essential tips. From soil preparation to seed selection, learn everything you need to know about starting your garden right this season...",
      mainImage:
        "https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?q=80&w=2909&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "DIY Home Organization",
      category: "Home Decor",
      createdAt: new Date("2024-03-21"),
      status: "scheduled",
      author: "Sarah Parker",
      content:
        "Discover innovative storage solutions for small spaces. These DIY organization projects will help you maximize your living space while maintaining a clean and organized home...",
      mainImage:
        "https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?q=80&w=2909&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Pet-Friendly House Plants",
      category: "Pets",
      createdAt: new Date("2024-03-18"),
      status: "published",
      author: "Mike Roberts",
      content:
        "Keep your pets safe while maintaining a green home. Explore our curated list of pet-friendly plants that are both beautiful and safe for your furry friends...",
      mainImage:
        "https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?q=80&w=2909&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Urban Balcony Gardens",
      category: "Gardening",
      createdAt: new Date("2024-03-22"),
      status: "scheduled",
      author: "Lisa Chen",
      content:
        "Make the most of your small outdoor space with these urban gardening solutions. Learn about container gardening, vertical gardens, and space-saving techniques...",
      mainImage:
        "https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?q=80&w=2909&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Cat Behavior Explained",
      category: "Pets",
      createdAt: new Date("2024-03-17"),
      status: "published",
      author: "Dr. Emily White",
      content:
        "Understanding your feline friend's behavior is key to a happy relationship. Decode common cat behaviors and learn how to better communicate with your pet...",
      mainImage:
        "https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?q=80&w=2909&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Sustainable Home Improvements",
      category: "Home Decor",
      createdAt: new Date("2024-03-23"),
      status: "draft",
      author: "Alex Green",
      content:
        "Eco-friendly renovation ideas that can help reduce your carbon footprint while beautifying your home. Includes tips on materials selection and energy-efficient upgrades...",
      mainImage:
        "https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?q=80&w=2909&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Dog Training Basics",
      category: "Pets",
      createdAt: new Date("2024-03-16"),
      status: "published",
      author: "Mark Johnson",
      content:
        "Essential training tips for new dog owners. Learn the fundamentals of positive reinforcement training and how to establish good behavior patterns...",
      mainImage:
        "https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?q=80&w=2909&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Indoor Herb Garden Guide",
      category: "Gardening",
      createdAt: new Date("2024-03-24"),
      status: "scheduled",
      author: "Maria Rodriguez",
      content:
        "Start your own indoor herb garden and enjoy fresh herbs year-round. Includes information on lighting, watering, and the best herbs for indoor growing...",
      mainImage:
        "https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?q=80&w=2909&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Minimalist Home Office Design",
      category: "Home Decor",
      createdAt: new Date("2024-03-15"),
      status: "published",
      author: "Tom Anderson",
      content:
        "Create a productive and stylish home office with these minimalist design principles. Learn how to maximize focus while maintaining aesthetic appeal...",
      mainImage:
        "https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?q=80&w=2909&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  // Seed the blogs data
  for (const blog of blogData) {
    await prisma.blogs.create({
      data: blog,
    });
  }

  console.log("Database has been seeded with blog data");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
