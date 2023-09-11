import { FaBars, FaBook } from "react-icons/fa";
import Link from "next/link";
import Logo from "@/public/images/dashboard_logo.png";
import avatar from "@/public/images/Avatar.png";
import Image from "next/image";
import { FC, MouseEventHandler } from "react";
import { usePathname } from "next/navigation";

const Tabs = [
  {
    title: "Dashboard",
    id: "dashboard",
    icon: <FaBook />,
    link: "/dashboard",
    submenu: null,
  },
  {
    title: "Goals and Objectives Genarator",
    id: "goals-and-objectives",
    icon: <FaBook />,
    link: "/dashboard/goals-and-objectives",
    submenu: null,
  },
  {
    title: "Accommodations Generator",
    id: "accommodations",
    icon: <FaBook />,
    link: "/dashboard/accommodations",
    submenu: null,
  },
  {
    title: "Present Levels Generator",
    id: "present-levels",
    icon: <FaBook />,
    link: "/dashboard/present-levels",
    submenu: null,
  },
  {
    title: "Progress Monitoring Ideas",
    id: "progress-monitoring",
    icon: <FaBook />,
    link: "/dashboard/progress-monitoring",
    submenu: null,
  },
];

const Settings = [
  {
    title: "Support",
    id: "support",
    icon: <FaBook />,
    link: "/dashboard/support",
    submenu: null,
  },
  {
    title: "Settings",
    id: "settings",
    icon: <FaBook />,
    link: "/dashboard/settings",
    submenu: null,
  },
];

interface DrawerProps {
  isOpen: boolean;
  toggleMenu: MouseEventHandler<HTMLDivElement> | undefined;
}

const Drawer: FC<DrawerProps> = ({ isOpen, toggleMenu }) => {
  const path = usePathname();
  let basePath = "";

  try {
    basePath = path.split("/")[2];
    if (basePath == undefined) {
      basePath = "dashboard";
    }
  } catch (error) {}

  console.log(basePath);

  return (
    <div
      className={
        isOpen
          ? "fixed top-0 left-0 bottom-0 w-72 h-screen lg:static p-5 flex justify-between flex-col items-start gap-5 text-white bg-blue-2 z-20"
          : "w-72  h-[calc(100vh-24px)] fixed top-0 left-0 right-0 bottom-0 lg:static translate-x-screen lg:translate-x-0 p-5 flex justify-between flex-col items-start text-white bg-blue-2"
      }
    >
      <div>
        <div className="flex items-center justify-between">
          <Link href="/">
            <Image src={Logo} alt="My-Iep-Buddy logo" />
          </Link>
        </div>
        <div className="mt-4 lg:mt-7">
          {Tabs.map((tab, index) => (
            <Link href={tab.link} key={`${tab.id}-${index}`}>
              <div
                className={
                  basePath === tab.id
                    ? "flex items-center justify-start px-4 py-3 cursor-pointer gap-1 text-sm hover:bg-blue-1/10 bg-grey-6 text-white font-semibold  rounded-md whitespace-nowrap"
                    : "flex items-center justify-start py-3 cursor-pointer gap-1 text-sm hover:bg-blue-1/10 font-medium text-grey-7 rounded-md whitespace-nowrap"
                }
                onClick={toggleMenu}
              >
                <div className="w-5">{tab.icon}</div>
                {tab.title}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="py-4 w-full">
        <div>
          {Settings.map((setting, index) => (
            <Link href={setting.link} key={`${setting.id}-${index}`}>
              <div
                className={
                  basePath === setting.id
                    ? "flex items-center justify-start px-4 py-3 cursor-pointer gap-1 text-sm hover:bg-blue-1/10 bg-grey-6 text-white font-semibold  rounded-md whitespace-nowrap"
                    : "flex items-center justify-start py-3 cursor-pointer gap-1 text-sm hover:bg-blue-1/10 font-medium text-grey-7 rounded-md whitespace-nowrap"
                }
                onClick={toggleMenu}
              >
                <div className="w-5">{setting.icon}</div>
                {setting.title}
              </div>
            </Link>
          ))}
        </div>
        <div className="w-full border-t border-grey-8 py-2 mt-3"></div>
        <div className="flex items-start justify-between cursor-pointer">
          <div className="flex items-center gap-2">
            <Image src={avatar} alt="User avatar" />

            <div>
              <p className="text-sm font-semibold">Olivia Rhye</p>
              <p className="text-sm font-normal text-grey-7">
                olivia@example.com
              </p>
            </div>
          </div>
          <FaBook />
        </div>
      </div>
    </div>
  );
};

export default Drawer;
