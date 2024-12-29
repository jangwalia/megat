"use client";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import defaultImage from "@/assets/blog.png";

export type Scheduler = {
  id: number;
  InstructorImage: string | null;
  InstructorName: string;
  CourseName: string;
  CourseDate: string;
  CourseTime: string;
};

export const columns: ColumnDef<Scheduler>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "InstructorImage",
    header: "Instructor Image",
    cell: (tableRow) => (
      <div className="relative h-[100px] w-[100px]">
        <Image
          src={tableRow.row.original.InstructorImage || defaultImage}
          alt={tableRow.row.original.InstructorName}
          fill
          className="object-cover rounded-md"
        />
      </div>
    ),
  },
  {
    accessorKey: "InstructorName",
    header: "Instructor Name",
  },
  {
    accessorKey: "CourseName",
    header: "Course Name",
  },
  {
    accessorKey: "CourseDate",
    header: "Course Date",
  },
  {
    accessorKey: "CourseTime",
    header: "Course Time",
  },
];
