import React from "react";
import { SidebarTrigger } from "./ui/sidebar";

function Header() {
  return (
    <div className="flex flex-row justify-between  items-center bg-cyan-300 p-4 ">
      <SidebarTrigger />
      <h1 className="text-xl font-bold">Multi-App Dashboard</h1>
    </div>
  );
}

export default Header;
