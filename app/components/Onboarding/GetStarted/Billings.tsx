import { FC } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { MdOutlineLayers } from "react-icons/md";
import Button from "../../common/Button";

interface billingsProps {
  [x: string]: any;
  billingInfo: billing[];
}
interface billing {
  duration: string;
  amount: string;
  method: string;
  benefits: string[];
}

const Billings: FC<billingsProps> = ({ billingInfo }) => {
  const applyHandler = () => {
    console.log(true);
  };
  return (
    <div className="mx-auto max-w-md shadow-1 rounded-2xl p-4 mt-6 relative pt-7">
      {billingInfo.map((info) => (
        <div key={info.duration} className="flex flex-col gap-3  text-center">
          <div className="rounded-full p-2 bg-pink-2 text-pink-1 text-xl absolute top-[-18px] right-[48%]">
            <MdOutlineLayers />
          </div>
          <p className="text-xl font-semibold">{info.duration}</p>
          <p className="text-5xl font-semibold">{info.amount}</p>
          <p className="text-base font-normal text-black-2">{info.method}</p>
          <div className="flex flex-col gap-2">
            {info.benefits.map((benefit) => (
              <div
                key={benefit}
                className="text-blue-1 flex items-start gap-3 py-2"
              >
                <div>
                  <FaCheckCircle size={20} />
                </div>
                <p className="text-base font-normal text-black-2 text-left">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
          <Button action={applyHandler} className="btn-contained w-full mt-5">
            Get Started
          </Button>
        </div>
      ))}
    </div>
  );
};

export default Billings;
