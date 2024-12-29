import React from "react";
import { Scheduler, columns } from "./components/columns";
import { DataTable } from "./components/data-table";

async function getData(): Promise<Scheduler[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return [
    {
      id: 1,
      InstructorImage: null,
      InstructorName: "John Doe",
      CourseName: "Introduction to React",
      CourseDate: "2024-03-20",
      CourseTime: "10:00 AM",
    },
    {
      id: 2,
      InstructorImage: null,
      InstructorName: "Jane Smith",
      CourseName: "Advanced JavaScript",
      CourseDate: "2024-03-19",
      CourseTime: "11:00 AM",
    },
    {
      id: 3,
      InstructorImage: null,
      InstructorName: "Alice Johnson",
      CourseName: "Modern CSS",
      CourseDate: "2024-03-18",
      CourseTime: "12:00 PM",
    },
    {
      id: 4,
      InstructorImage: null,
      InstructorName: "Bob Brown",
      CourseName: "React Native",
      CourseDate: "2024-03-17",
      CourseTime: "1:00 PM",
    },
    {
      id: 5,
      InstructorImage: null,
      InstructorName: "Eve Green",
      CourseName: "TypeScript Fundamentals",
      CourseDate: "2024-03-16",
      CourseTime: "2:00 PM",
    },
    {
      id: 6,
      InstructorImage: null,
      InstructorName: "Tom White",
      CourseName: "GraphQL Basics",
      CourseDate: "2024-03-15",
      CourseTime: "3:00 PM",
    },
  ];
}

async function SchedulerPage() {
  const data = await getData();
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}

export default SchedulerPage;
