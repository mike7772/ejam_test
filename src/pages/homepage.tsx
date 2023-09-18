import Content from "../components/Content";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Logo from "../components/Logo";
import Steps from "../components/Steps";
import Title from "../components/Title";

export const Homepage = () => {
  return (
    <div className=" w-full">
      {/* Header */}
      <Header />
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
