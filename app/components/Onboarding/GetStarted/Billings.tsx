import { FC } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { MdOutlineLayers } from "react-icons/md";

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
  return (
    <div className="mx-auto max-w-md shadow-1 rounded-2xl p-4 my-4 relative pt-6">
      {billingInfo.map((info) => (
        <div
          key={info.duration}
          className="flex flex-col gap-3 bg-gray-2 items-center"
        >
          <div className="rounded-full p-2 bg-pink-2 text-pink-1 text-xl absolute top-[-20px]">
            <MdOutlineLayers />
          </div>
          <span>{info.duration}</span>
          <span>{info.amount}</span>
          <span>{info.method}</span>
          <div>
            {info.benefits.map((benefit) => (
              <div key={benefit}>
                <FaCheckCircle />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Billings;
