import { FaUser } from "react-icons/fa";
import { Button } from "./ui/button";

const Box = ({ image, title, text, className }) => {
  return (
    <div
      className={`h-[50vh] mt-[20px] w-full shadow-xl flex flex-col items-center justify-center gap-[20px] text-center px-[10px] ${className}`}
    >
      <div className="h-12 w-12 md:h-16 md:w-16 lg:h-16 lg:w-16 bg-white flex items-center justify-center overflow-hidden">
        <img className="h-full w-full object-contain" src={image} alt={title} />
      </div>
      <h1 className="text-[24px] md:text-[32px] lg:text-[32px] font-medium">
        {title}
      </h1>
      <p className="text-[18px] md:text-[19px] font-normal text-gray-700 leading-5">
        {text}
      </p>

      <Button className="p-2 md:p-4 lg:p-4">Learn More</Button>
    </div>
  );
};

const Featues = () => {
  const features = [
    {
      image: "https://cdn-icons-png.flaticon.com/512/854/854878.png", // Icon for Listings
      title: "Wide Range of Listings",
      text: "Browse thousands of properties, from cozy apartments to luxurious villas.",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/2331/2331970.png", // Icon for Prices
      title: "Affordable Prices",
      text: "Get the best deals across various locations with transparent pricing.",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/2099/2099199.png", // Icon for Security
      title: "Secure Transactions",
      text: "Enjoy peace of mind with end-to-end encrypted payments and contracts.",
    },
  ];

  return (
    <div className="w-full min-h-[80vh] flex flex-col mt-[20px]">
      <div className="w-full text-center px-[5px] py-[10px] max-w-[900px] mx-auto">
        <h1 className="text-[28px] md:text-[38px] lg:text-[38px] font-semibold">
          Launch fast. Design more.
        </h1>
        <p className="text-[17px] md:text-[20px] font-normal text-gray-600">
          Start saving your time with Anything Saas or Anything
        </p>
      </div>

      {/* Features div */}
      <div className="animate-fadeIn w-full min-h-[50vh] md:min-h-[50vh] lg:min-h-[50vh]  flex flex-col md:flex-row lg:flex-row items-center justify-between px-[10px] gap-[20px] md:gap-[10px] lg:gap-[10px] py-[10px]">
        {features.map(({ image, title, text }, index) => (
          <Box
            className={
              "hover:shadow-2xl hover:scale-105 transition-all ease-linear duration-300 cursor-pointer"
            }
            image={image}
            key={index}
            title={title}
            text={text}
          />
        ))}
      </div>
    </div>
  );
};

export default Featues;
