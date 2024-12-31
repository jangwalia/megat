"use client";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import defaultImage from "@/assets/blog.png";

export type Blog = {
  id: number;
  mainImage: string | null;
  title: string;
  category: string;
  author: string;
  createdAt: Date;
  content: string;
};

export const columns: ColumnDef<Blog>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "mainImage",
    header: "Main Image",
    cell: (tableRow) => (
      <div className="relative h-[100px] w-[100px]">
        <Image
          src={tableRow.row.original.mainImage || defaultImage}
          alt={tableRow.row.original.title}
          fill
          className="object-cover rounded-md"
        />
      </div>
    ),
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "author",
    header: "Author",
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
  },
  {
    accessorKey: "content",
    header: "Content",
  },
];
