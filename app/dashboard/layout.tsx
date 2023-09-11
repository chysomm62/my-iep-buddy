"use client";

import { ReactNode, useState } from "react";
import DashboardHeader from "../components/Dashboard/DashboardHeader";
import Drawer from "../components/Dashboard/DashboardDrawer";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="bg-blue-2 flex items-stretch max-w-[100%] overflow-x-hidden font-book py-3">
      <Drawer isOpen={isOpen} toggleMenu={toggleMenu} />
      <div className="p-2 md:p-10 w-full md:pr-32 bg-white rounded-s-[40px]">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
