import React from "react";

const CheckoutSteps = ({ active }) => {
  return (
    <div className="w-full flex justify-center py-8">
      <div className="flex items-center">

        {/* Step 1 */}
        <div className="flex items-center">
          <div
            className={`px-5 py-2 rounded-full text-sm font-semibold
            ${
              active >= 1
                ? "bg-[#2F3A33] text-white"
                : "bg-[#E5DED6] text-[#2F3A33]"
            }`}
          >
            1.Shipping
          </div>

          {/* Line */}
          <div
            className={`w-[40px] md:w-[60px] h-[4px]
            ${
              active > 1
                ? "bg-[#C59B6D]"
                : "bg-[#E5DED6]"
            }`}
          ></div>
        </div>

        {/* Step 2 */}
        <div className="flex items-center">
          <div
            className={`px-5 py-2 rounded-full text-sm font-semibold
            ${
              active >= 2
                ? "bg-[#2F3A33] text-white"
                : "bg-[#E5DED6] text-[#2F3A33]"
            }`}
          >
            2.Payment
          </div>

          {/* Line */}
          <div
            className={`w-[40px] md:w-[60px] h-[4px]
            ${
              active > 2
                ? "bg-[#C59B6D]"
                : "bg-[#E5DED6]"
            }`}
          ></div>
        </div>

        {/* Step 3 */}
        <div className="flex items-center">
          <div
            className={`px-5 py-2 rounded-full text-sm font-semibold
            ${
              active >= 3
                ? "bg-[#2F3A33] text-white"
                : "bg-[#E5DED6] text-[#2F3A33]"
            }`}
          >
            3.Success
          </div>
        </div>

      </div>
    </div>
  );
};

export default CheckoutSteps;
