import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

function Loading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Skeleton className="w-[100px] h-[20px] rounded-full" />
      <Skeleton className="w-[100px] h-[20px] rounded-full" />
      <Skeleton className="w-[100px] h-[20px] rounded-full" />
    </div>
  );
}

export default Loading;
