import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

function Loading() {
  return (
    <div className="w-full">
      <Skeleton className="w-[300px] h-[500px] rounded-md" />
    </div>
  );
}

export default Loading;
