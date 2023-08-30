"use client";

import HeroImage from "@/public/images/hero_image.png";
import Button from "../common/Button";
import { BsArrowRightShort } from "react-icons/bs";

import Image from "next/image";

const Hero = () => {
  const applyHandler = () => {
    console.log(true);
  };

  return (
    <section className="px-5 py-20 text-black-1 md:flex max-w-screen-xl mx-auto md:justify-between md:items-center">
      <div className="mb-20 md:mb-2 md:max-w-lg">
        <h1 className="text-6xl font-bold mb-8 md:text-4xl lg:text-5xl lg:leading-tight lg:tracking-tight">
          <span className="text-pink-1">Never struggle </span> with writing an
          IEP ever again.
        </h1>
        <p className="font-book mb-10 text-black-2 lg:mr-7">
          You have enough going on. Make your life easier with MyIEP Buddy–your
          own IEP writing assistant!
        </p>
        <div className="flex flex-col space-y-5 phone:flex-row phone:space-y-0 phone:space-x-8">
          <Button action={applyHandler} className="btn-contained">
            GET STARTED&nbsp;
            <BsArrowRightShort size={20} />
          </Button>
          <Button action={applyHandler} className="btn-outlined">
            LEARN MORE{" "}
          </Button>
        </div>
        <p className="text-blue-1 text-2xl font-semibold mt-7">
          All ages. All abilities. One Buddy.
        </p>
      </div>
      <div className="hero-image">
        <Image
          priority={true}
          src={HeroImage}
          alt="happy-teacher-sitting-her-desk"
        />
      </div>
    </section>
  );
};

export default Hero;
