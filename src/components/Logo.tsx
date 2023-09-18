import React from "react";

function Logo() {
  return (
    <div className=" mx-[6%] flex justify-between h-[96px] items-center">
      <img
        className=" w-[105px] lg:w-[192px] h-[20px] lg:h-[36px]"
        src="/ejam/600a41c73b670a97ae1d4f47_Clarifion_Logo 1.svg"
      />
      <div className=" flex items-center">
        <img
          className=" w-[44px] lg:w-[88px] h-[16px] lg:h-[32px] mr-[16px] lg:mr-[32px]"
          src="/ejam/Frame 1484578055.svg"
        />
        <img
          className=" w-[41px] lg:w-[82px] h-[16px] lg:h-[32px]"
          src="/ejam/norton-antivirus-logo 1.svg"
        />
      </div>
    </div>
  );
}

export default Logo;
