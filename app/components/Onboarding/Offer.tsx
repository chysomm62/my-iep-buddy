import Image from "next/image";
import OfferImage from "@/public/images/offer_image.png";

const Offer = () => {
  return (
    <section className="px-5 py-12 md:py-20 text-black-1 max-w-screen-xl mx-auto  bg-grey-1">
      <div className="header-border"></div>
      <h2 className="uppercase text-center">
        What We <span className="text-blue-1">Offer</span>
      </h2>
      <div className="md:flex md:justify-between md:items-center py-6 gap-5">
        <div className="flex-1">
          <h3 className=" font-semibold mb-4">
            Dear Special{" "}
            <span className="text-blue-1">Education Teachers,</span>
          </h3>
          <p className="font-book mb-10 text-black-2 text-justify">
            We know how hard you work to create a supportive, inclusive learning
            environment for your students. Your dedication goes beyond the
            classroom, as you navigate the complexities of Individualized
            Education Programs (IEPs). That&apos;s why we&apos;re introducing
            MyIEP Buddy, a game-changing solution designed to simplify and
            streamline the IEP process — so you can focus on what matters most:
            your students.
          </p>
        </div>
        <div className="flex-1 md:flex items-center justify-end">
          <Image src={OfferImage} alt="teacher demonstrating on a board" />
        </div>{" "}
      </div>
    </section>
  );
};

export default Offer;
