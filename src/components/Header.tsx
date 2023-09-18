import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import React, { useState } from "react";

function Header() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [
    {
      icon: "/ejam/Vector.svg",
      text: "30-DAY SATISFACTION GUARANTEE",
    },
    {
      icon: "/ejam/ph_truck-light.svg",
      text: "Free delivery on orders over $40.00",
    },
    {
      icon: "/ejam/mdi_cards-heart-outline.svg",
      text: "50.000+ HAPPY CUSTOMERS",
    },
    {
      icon: "/ejam/fluent_arrow-sync-checkmark-20-regular.svg",
      text: "100% Money Back Guarantee",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  return (
    <div>
      <div className="hidden lg:flex h-[50px] bg-[#252F3D] justify-between text-white text-[12px] leading-3 px-[6%]">
        <p className="flex items-center">
          <img className="mr-[12px] w-[18px] h-[18px]" src="/ejam/Vector.svg" />
          30-DAY SATISFACTION GUARANTEE
        </p>
        <p className="flex items-center">
          <img
            className="mr-[12px] w-[18px] h-[18px]"
            src="/ejam/ph_truck-light.svg"
          />
          Free delivery on orders over $40.00
        </p>
        <p className="flex items-center">
          <img
            className="mr-[12px] w-[18px] h-[18px]"
            src="/ejam/mdi_cards-heart-outline.svg"
          />
          50.000+ HAPPY CUSTOMERS
        </p>
        <p className="flex items-center">
          <img
            className="mr-[12px] w-[18px] h-[18px]"
            src="/ejam/fluent_arrow-sync-checkmark-20-regular.svg"
          />
          100% Money Back Guarantee
        </p>
      </div>

      <div className="block lg:hidden">
        <div className="h-[50px] bg-[#252F3D] flex justify-between text-white text-[12px] leading-3 px-[6%]">
          <button className="flex items-center" onClick={handlePrev}>
            <ArrowLeft2 size="20" />
          </button>
          {/* Add similar content here */}
          <p className="flex items-center">
            <img
              className="mr-[12px] w-[18px] h-[18px]"
              src={items[currentIndex].icon}
              alt=""
            />
            {items[currentIndex].text}
          </p>
          <button className="flex items-center" onClick={handleNext}>
            <ArrowRight2 size="20" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
