import { faqs } from "@/lib/variables/faqs";

const FAQs = () => {
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
