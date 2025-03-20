import React from "react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="h-[76.4vh] w-full flex flex-col md:flex-row lg:flex-row">
      <div className="h-[50%] w-full md:h-full md:w-[50%] lg:h-full lg:w-[50%] flex flex-col text-center gap-[10px] md:gap-[20px] lg:gap-[20px] justify-center px-[30px]">
        <h1 className="text-[36px] md:text-[48px] lg:text-[48px] font-semibold leading-9 md:leading-snug">
          Streamline Your Workflow with Ease!
        </h1>

        <p className="leading-5 font-medium md:font-normal lg:font-normal text-gray-600 text-[14px] md:text-[18px]">
          Our powerful tools automate tasks and enhance team productivity —
          saving you time and effort.
        </p>

        <div className="h-[40px] w-full flex items-center justify-center gap-[10px]">
          <Button className="hover:cursor-pointer rounded-full">
            Try for free
          </Button>
          <button className="border border-zinc-600 p-2 rounded-full hover:cursor-pointer">
            Learn more
          </button>
        </div>
      </div>
      <div className="h-[50%] w-full md:h-full md:w-[50%] lg:h-full lg:w-[50%]">
        <img
          src="https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="hero-image"
          className="object-cover h-full w-full"
        />
      </div>
    </div>
  );
};

export default Hero;
