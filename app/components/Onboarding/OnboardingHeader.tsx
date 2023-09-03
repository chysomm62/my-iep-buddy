"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/images/logo.png";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

const OnBoardingHeader = () => {
  const links = [
    { href: "/", label: "Home", active: true },
    { href: "/", label: "About us", active: false },
    { href: "/", label: "Pricing", active: false },
    { href: "/", label: "Contact", active: false },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white">
      <nav className="max-w-screen-xl mx-auto flex justify-between items-center pl-0 pr-5 h-20">
        <Link href="/">
          <Image src={Logo} alt="My IEP Buddy logo" />
        </Link>

        <div
          className={
            isOpen
              ? "bg-white fixed top-0 left-0 right-0 bottom-0 w-full h-screen flex items-center justify-center flex-col lg:static lg:h-auto lg:flex-row lg:justify-between z-10"
              : "translate-y-screen lg:translate-y-0 bg-white fixed top-0 left-0 right-0 bottom-0 w-full h-screen flex items-center justify-center flex-col lg:static lg:h-auto lg:flex-row lg:justify-between"
          }
        >
          <ul className="flex flex-col space-y-5 mb-16 lg:space-y-0 lg:flex-row lg:mb-0 lg:space-x-16 lg:justify-evenly lg:flex-1 mx-16">
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  onClick={toggleMenu}
                  className={
                    link.active
                      ? "font-medium text-pink-1 hover:text-pink-1 relative before:absolute before:w-full before:h-0.5 before:bg-pink-1 before:left-0 before:top-10"
                      : "font-medium text-black-1 hover:text-pink-1"
                  }
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex flex-col space-y-3 lg:flex-row lg:space-y-0 lg:items-center">
            <>
              <Link
                href="/auth/login"
                onClick={toggleMenu}
                className="font-medium text-blue-1 text-center lg:mr-6 rounded-[10px] border border-blue-1 py-[10px] px-7 "
              >
                Sign in
              </Link>

              <Link
                href="/auth/register"
                onClick={toggleMenu}
                className="bg-blue-1 text-white font-medium py-[10px] px-7 rounded-[10px]"
              >
                Sign up
              </Link>
            </>
          </div>
        </div>

        <button className="relative z-10 lg:hidden" onClick={toggleMenu}>
          <FaBars color="#FE6EA3" fontSize="25px" />
        </button>
      </nav>
    </div>
  );
};

export default OnBoardingHeader;
