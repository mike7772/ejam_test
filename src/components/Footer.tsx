import React from "react";

function Footer() {
  return (
    <div className=" min-h-[88px] bg-[#252F3D] flex flex-wrap lg:justify-between justify-center text-white text-[11px] lg:text-[12px] lg:leading-3 px-[6%]">
      <p className=" w-full lg:w-[40%] flex items-center text-[11px] lg:text-[16px] justify-center lg:justify-start ">
        Copyright (c) 2023 | Clarifionsupport@clarifion.com
      </p>
      <p className=" flex items-center">
        <img
          className="mr-[12px] w-[13px] lg:w-[18px] h-[13px] lg:h-[18px]"
          src="/ejam/lock (7) 1.svg"
        />
        Secure 256-bit SSL encryption.
      </p>
    </div>
  );
}

export default Footer;
