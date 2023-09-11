"use client";

import Image from "next/image";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import Logo from "@/public/images/dashboard_logo.png";
import { usePathname } from "next/navigation";
import User from "@/public/images/logo.png";
import { MdArrowDropDown } from "react-icons/md";
import { FaBell } from "react-icons/fa";
import { FC, MouseEventHandler, useState } from "react";

interface HeaderProps {
  toggleMenu: MouseEventHandler<HTMLButtonElement> | undefined;
}

const DashboardHeader: FC<HeaderProps> = ({ toggleMenu }) => {
  const [showUser, setShowUser] = useState(false);
  const path = usePathname();
  let basePath = "";

  try {
    basePath = path.split("/")[2];
  } catch (error) {}

  return (
    <nav className=" font-book max-w-screen-xl mx-auto flex justify-between items-center h-20 text-white lg:hidden px-4 z-10">
      <div>
        <Link href="/">
          <Image src={Logo} alt="My-Iep-Buddy logo" />
        </Link>
      </div>

      <div>
        <button className="z-10 " onClick={toggleMenu}>
          <FaBars fontSize="25px" />
        </button>
      </div>
    </nav>
  );
};

export default DashboardHeader;
