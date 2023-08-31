import Image from "next/image";
import GoalsImage from "@/public/images/goals_image.png";

const GoalsAndObjectives = () => {
  return (
    <section className="px-5 py-20 text-black-1 max-w-screen-xl mx-auto  bg-grey-1">
      <div className="md:flex md:justify-between md:items-center py-6 gap-5">
        <div className="flex-1 md:flex items-center justify-start">
          <Image src={GoalsImage} alt="woman hitting the target" />
        </div>
        <div className="flex-1">
          <h3 className=" font-semibold mb-4">
            Goals and Objectives
            <span className="text-blue-1"> Generator</span>
          </h3>
          <p className="font-book mb-10 text-black-2 text-justify">
            MyIEP Buddy&apos;s intuitive platform offers a comprehensive library
            of suggested goals, objectives, and benchmarks tailored to your
            students’ unique needs. Explore and customize them to create the
            perfect IEP that aligns with your students&apos; strengths and areas
            for growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GoalsAndObjectives;
