import React from "react";
import { Blog, columns } from "./components/columns";
import { DataTable } from "./components/data-table";
import { PrismaClient } from "@prisma/client";
//create a promise for fetching mock data

async function BlogPage() {
  const prisma = new PrismaClient();
  const data = await prisma.blogs.findMany();
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}

export default BlogPage;
