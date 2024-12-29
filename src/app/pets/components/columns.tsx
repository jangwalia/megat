"use client";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import defaultImage from "@/assets/blog.png";

export type Pet = {
  id: number;
  Name: string;
  Breed: string;
  Age: number;
  Weight: number;
  petImage: string | null;
};

export const columns: ColumnDef<Pet>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "petImage",
    header: "Pet Image",
    cell: (tableRow) => (
      <div className="relative h-[100px] w-[100px]">
        <Image
          src={tableRow.row.original.petImage || defaultImage}
          alt={tableRow.row.original.Name}
          fill
          className="object-cover rounded-md"
        />
      </div>
    ),
  },
  {
    accessorKey: "Name",
    header: "Name",
  },
  {
    accessorKey: "Breed",
    header: "Breed",
  },
  {
    accessorKey: "Age",
    header: "Age",
  },
  {
    accessorKey: "Weight",
    header: "Weight",
  },
];
