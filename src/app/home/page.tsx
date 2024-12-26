import BlogsCard from "@/components/BlogCards";
import InterviewSchedulerCard from "@/components/InterviewScheduler";
import PetMartCard from "@/components/PetMartCard";
import { PrismaClient, Totalblogs } from "@prisma/client";

export default async function DashboardPage() {
  const prisma = new PrismaClient();
  const totalBlogs = await prisma.totalblogs.findMany();

  return (
    <div className="container  mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Multi-App Dashboard</h1>
      <div className="grid w-full  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <BlogsCard blogs={totalBlogs} />
        <InterviewSchedulerCard />
        <PetMartCard />
      </div>
    </div>
  );
}
