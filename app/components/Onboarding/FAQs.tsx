import React from "react";
import { MdMailOutline } from "react-icons/md";
import { AiOutlineFileText, AiOutlineHeart } from "react-icons/ai";
import { FiSlash } from "react-icons/fi";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";

const FAQs = () => {
  const faqs = [
    {
      icon: <MdMailOutline />,
      title: "Can I cancel my subscription?",
      details:
        "We strive to provide the best possible experience for our users. However, please note that we do not offer refunds for cancellations. However, we do offer a monthly subscription option if that better suits your needs!",
    },
    {
      icon: <AiOutlineFileText />,
      title: "Can I try MyIEP Buddy for free?",
      details:
        "We understand the importance of evaluating a tool before committing to a subscription. However, at this time, we do not offer a free version of MyIEP Buddy. Our platform's features, resources, and continuous updates require resources to maintain, and as such, we are unable to provide a free option. We encourage you to explore the features, benefits, and testimonials on our website to help you make an informed decision about subscribing to MyIEP Buddy.",
    },
    {
      icon: <AiOutlineHeart />,
      title: "How does MyIEP Buddy work?",
      details:
        "Using advanced artificial intelligence, MyIEP Buddy analyzes your input and generates customized IEP components, including goals, objectives, accommodations, present level statements, and progress monitoring ideas. You can review, edit, and save these components to create a comprehensive IEP for each student.",
    },
    {
      icon: <HiOutlineSwitchHorizontal />,
      title: "What is MyIEP Buddy?",
      details:
        "MyIEP Buddy is an IEP writing assistant designed to streamline the IEP writing process and reduce the amount of time and stress involved.",
    },
    {
      icon: <FiSlash />,
      title: "How do I sign up for MyIEP Buddy?",
      details:
        'Click the "Get Started" button below and let us take some work off your plate!',
    },
  ];
  return (
    <section className="px-5 py-20 text-black-1 max-w-screen-xl mx-auto  bg-grey-1">
      <div className="header-border"></div>
      <h2 className="uppercase text-center">
        Frequently Asked <span className="text-blue-1">Questions</span>
      </h2>

      <div className="mt-4 lg:mt-6 flex flex-wrap fold:grid-cols-1 grid-cols-2 lg:grid-cols-3 items-start justify-center">
        {faqs.map((faq) => (
          <div
            key={faq.title}
            className="flex items-center justify-center flex-col gap-3 p-3 lg:py-5 md:w-1/2 lg:w-1/3"
          >
            <div className="rounded-full p-2 bg-pink-2 text-pink-1 text-xl">
              {faq.icon}
            </div>
            <h4>{faq.title}</h4>
            <p className="font-book text-sm text-black-2 text-center">
              {faq.details}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQs;
