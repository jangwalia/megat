import React from "react";
import { Blog, columns } from "./components/columns";
import { DataTable } from "./components/data-table";

//create a promise for fetching mock data

async function getData(): Promise<Blog[]> {
  // Simulating an API call delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return [
    {
      id: 1,
      title: "Modern Minimalist Living Room Design Ideas",
      Category: "Home Decor",
      Author: "Emma Thompson",
      createdAt: "2024-03-20",
      mainImage: null,
    },
    {
      id: 2,
      title: "30-Day Full Body Transformation Workout Plan",
      Category: "Fitness",
      Author: "Mike Johnson",
      createdAt: "2024-03-19",
      mainImage: null,
    },
    {
      id: 3,
      title: "Plant-Based Diet: A Beginner's Guide",
      Category: "Nutrition",
      Author: "Sarah Chen",
      createdAt: "2024-03-18",
      mainImage: null,
    },
    {
      id: 4,
      title: "Small Space Garden Ideas for Urban Homes",
      Category: "Gardening",
      Author: "David Wilson",
      createdAt: "2024-03-17",
      mainImage: null,
    },
    {
      id: 5,
      title: "Budget-Friendly Kitchen Renovation Tips",
      Category: "Home Improvement",
      Author: "Lisa Martinez",
      createdAt: "2024-03-16",
      mainImage: null,
    },
    {
      id: 6,
      title: "Mindful Meditation for Stress Relief",
      Category: "Wellness",
      Author: "Dr. James Lee",
      createdAt: "2024-03-15",
      mainImage: null,
    },
    {
      id: 7,
      title: "Sustainable Fashion: Building a Capsule Wardrobe",
      Category: "Fashion",
      Author: "Sophie Anderson",
      createdAt: "2024-03-14",
      mainImage: null,
    },
    {
      id: 8,
      title: "High-Intensity Interval Training for Busy Professionals",
      Category: "Fitness",
      Author: "Alex Rodriguez",
      createdAt: "2024-03-13",
      mainImage: null,
    },
    {
      id: 9,
      title: "Scandinavian Interior Design Principles",
      Category: "Home Decor",
      Author: "Nina Larsson",
      createdAt: "2024-03-12",
      mainImage: null,
    },
    {
      id: 10,
      title: "Meal Prep Strategies for Healthy Eating",
      Category: "Nutrition",
      Author: "Chris Parker",
      createdAt: "2024-03-11",
      mainImage: null,
    },
  ];
}

async function BlogPage() {
  const data = await getData();
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}

export default BlogPage;
