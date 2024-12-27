"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

function TopBar() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter((segment) => segment);

  // Don't show duplicate "Home" if we're already on the home page
  if (segments[0] === "home") {
    segments.shift(); // Remove "home" from segments
  }

  return (
    <div className="bg-slate-300 mt-4 flex justify-center p-4">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            {pathname === "/home" ? (
              <BreadcrumbPage>Home</BreadcrumbPage>
            ) : (
              <BreadcrumbLink asChild>
                <Link href="/home">Home</Link>
              </BreadcrumbLink>
            )}
          </BreadcrumbItem>

          {segments.map((segment, index) => {
            const path = `/${["home", ...segments.slice(0, index + 1)].join(
              "/"
            )}`;
            const isLast = index === segments.length - 1;

            return (
              <React.Fragment key={path}>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  {isLast ? (
                    <BreadcrumbPage>
                      {segment.charAt(0).toUpperCase() + segment.slice(1)}
                    </BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink asChild>
                      <Link href={path}>
                        {segment.charAt(0).toUpperCase() + segment.slice(1)}
                      </Link>
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
              </React.Fragment>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}

export default TopBar;
