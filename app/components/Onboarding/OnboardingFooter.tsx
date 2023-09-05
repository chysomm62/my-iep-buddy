import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/images/logo.png";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { BsXLg } from "react-icons/bs";

const OnboardingFooter: FC = ({}) => {
  const footerLinks1 = [
    { title: "Terms & Conditions", link: "/" },
    {
      title: "Privacy Policy",
      link: "/",
    },
  ];

  return (
    <footer className="max-w-screen-xl mx-auto text-white font-book bg-blue-3 py-3  px-5 overflow-x-hidden">
      <div className=" py-6 md:py-16">
        <div className="grid grid-cols-1 gap-3 md:gap-32 md:grid-cols-2 lg:grid-cols-3 ">
          <div className="py-4">
            <div className="mb-2 md:h-24 flex items-center ">
              <Link href="/">
                <Image src={Logo} alt="My Iep Buddy logo" />
              </Link>
            </div>
            <p className="text-grey-3 font-light">
              Your Ultimate Sidekick In Writing Exceptional IEPs.
            </p>
          </div>

          <div className="py-4">
            <div className="md:h-24 flex items-center ">
              <h4 className="text-black-1 mb-2 md:mb-4 font-medium text-xl md:text-2xl ">
                Quick Links
              </h4>
            </div>
            <ul>
              {footerLinks1.map((item, index) => (
                <li
                  key={index}
                  className="cursor-pointer text-base  font-normal mb-2 text-black-1"
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </div>

          <div className="py-4">
            <div className="md:h-24 flex items-center">
              <h4 className="text-black-1 mb-2 md:mb-4 font-medium text-xl md:text-2xl  ">
                Contact us
              </h4>
            </div>

            <p className="text-base font-normal mb-2 text-black-1">
              <Link href="mailTo:support@myiepbuddy.com">
                support@myiepbuddy.com
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-start md:items-center justify-between flex-col-reverse md:flex-row">
        <div>
          <p className="text-grey-3 font-light">Copyright © 2023 MyIEP Buddy</p>
        </div>
        <div className="flex justify-start gap-4 lg:gap-6 mb-5 items-center">
          <p className="text-grey-3 font-light">Follow Our Social Media</p>
          <a href="" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-grey-3 text-xs" />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="text-grey-3 text-xs" />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <BsXLg className="text-grey-3 text-xs" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default OnboardingFooter;
