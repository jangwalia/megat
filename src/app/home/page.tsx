import BlogsCard from "@/components/BlogCards";
import InterviewSchedulerCard from "@/components/InterviewScheduler";
import PetMartCard from "@/components/PetMartCard";
import { PrismaClient } from "@prisma/client";
import { Suspense } from "react";
import Loading from "./loading";

export default async function DashboardPage() {
  const prisma = new PrismaClient();
  const totalBlogs = await prisma.totalblogs.findMany();
  const schedulerData = await prisma.scheduler.findMany();
  const totalPets = await prisma.totalPets.findMany();

  return (
    <div className="container  mx-auto p-4">
      <div className="grid w-full  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Suspense fallback={<Loading />}>
          <BlogsCard blogs={totalBlogs} />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <InterviewSchedulerCard data={schedulerData} />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <PetMartCard data={totalPets} />
        </Suspense>
      </div>
    </div>
  );
}
