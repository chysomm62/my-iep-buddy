import Image from "next/image";
import GeneratorImage from "@/public/images/generator_image.png";

const PresentLevels = () => {
  return (
    <section className="px-5 py-20 text-black-1 max-w-screen-xl mx-auto  bg-grey-1">
      <div className="md:flex md:justify-between md:items-center py-6 gap-5">
        <div className="flex-1">
          <h3 className=" font-semibold mb-4">
            Present Levels
            <span className="text-blue-1"> Generator</span>
          </h3>
          <p className="font-book mb-10 text-black-2 text-justify">
            MyIEP Buddy&apos;s cutting-edge AI technology can craft Present
            Level statements to provide a solid foundation for your IEPs. Use
            these statements as a starting point and modify them to accurately
            reflect your students&apos; current performance and progress.
          </p>
        </div>
        <div className="flex-1 md:flex items-center justify-end">
          <Image
            src={GeneratorImage}
            alt="man and woman with laptop and tablet"
          />
        </div>{" "}
      </div>
    </section>
  );
};

export default PresentLevels;
