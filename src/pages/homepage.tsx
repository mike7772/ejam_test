import Content from "../components/Content";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import Steps from "../components/Steps";
import Title from "../components/Title";

export const Homepage = () => {
  return (
    <div className=" w-full">
      {/* Header */}
      {/* <div className=" h-[50px] bg-[#252F3D] flex  justify-between text-white text-[12px] leading-3 px-[6%]">
        <p className=" flex items-center">
          <img className="mr-[12px] w-[18px] h-[18px]" src="/ejam/Vector.svg" />
          30-DAY SATISFACTION GUARANTEE
        </p>
        <p className=" flex items-center">
          <img
            className="mr-[12px] w-[18px] h-[18px]"
            src="/ejam/ph_truck-light.svg"
          />
          Free delivery on orders over $40.00
        </p>
        <p className=" flex items-center">
          <img
            className="mr-[12px] w-[18px] h-[18px]"
            src="/ejam/mdi_cards-heart-outline.svg"
          />
          50.000+ HAPPY CUSTOMERS
        </p>
        <p className=" flex items-center">
          <img
            className="mr-[12px] w-[18px] h-[18px]"
            src="/ejam/fluent_arrow-sync-checkmark-20-regular.svg"
          />
          100% Money Back Guarantee
        </p>
      </div> */}
      {/* logo */}
      <Logo />
      {/* Title */}
      <Title />
      {/* TODO: */}
      {/* Steps */}
      <Steps />
      {/* Content */}
      <Content />
      {/* Footer */}
      <Footer />
    </div>
  );
};
