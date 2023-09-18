import React from "react";

function Steps() {
  return (
    <div className=" min-h-[50px] flex justify-between text-black text-[11px] lg:text-[20px] mb-[40px] px-[6%]">
      <p className=" grid lg:flex flex-wrap items-center ">
        <img
          className="mr-[12px] w-[20px] lg:w-[40px] h-[20px] lg:h-[40px] ml-[35%] lg:ml-0"
          src="/ejam/Group 1484578147.svg"
        />
        <span className=" hidden lg:flex">Step 1 :</span> Cart Review
      </p>
      <p className="  grid lg:flex flex-wrap items-center">
        <img
          className="mr-[12px] w-[20px] lg:w-[40px] h-[20px] lg:h-[40px] ml-[35%] lg:ml-0"
          src="/ejam/Group 1484578147.svg"
        />
        <span className=" hidden lg:flex">Step 2 :</span> Checkout
      </p>
      <div className=" grid lg:flex flex-wrap items-center font-[700]">
        <img
          className="mr-[12px] w-[20px] lg:w-[40px] h-[20px] lg:h-[40px] ml-[35%] lg:ml-0"
          src="/ejam/Group 1484578146.svg"
        />
        <span className=" hidden lg:flex">Step 3 :</span> Special Offer
      </div>
      <div className="  grid lg:flex lg:flex-wrap items-center ">
        <img
          className="mr-[12px] w-[20px] lg:w-[40px] h-[20px] lg:h-[40px] ml-[35%] lg:ml-0"
          src="/ejam/Group 1484578146 (1).svg"
        />
        <span className=" hidden lg:flex">Step 4 :</span> Confirmation
      </div>
    </div>
  );
}

export default Steps;
