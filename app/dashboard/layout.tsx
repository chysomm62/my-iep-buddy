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
    <div className="bg-blue-2 ">
      <DashboardHeader toggleMenu={toggleMenu} />
      <div className="flex items-stretch max-w-[100%] overflow-x-hidden font-book py-3">
        <Drawer isOpen={isOpen} toggleMenu={toggleMenu} />
        <div className="p-4 lg:p-8 px-4 lg:px-0 w-full bg-white lg:rounded-s-[40px] rounded-e-lg">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
