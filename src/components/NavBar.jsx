import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [isPopUpActive, setIsPopUpActive] = useState(false);

  useEffect(() => {
    if (isPopUpActive) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isPopUpActive]);
  
  const navLinks = ["Home", "About", "Contact", "Profile", "Purchase"];

  return (
    <nav className="w-full h-[60px] shadow-xl flex items-center justify-between px-[40px] relative">
      <h1 className="font-medium text-[24px] md:text-[28px] lg:text-[28px]">TaskWave</h1>

      <div className="h-full px-[20px] lg:flex md:flex items-center justify-center gap-[30px] hidden">
        {navLinks.map((nav) => (
          <a
            href="#"
            key={nav}
            className="text-[14px] font-medium text-zinc-700"
          >
            {nav}
          </a>
        ))}
      </div>

      {/* Mobile Menu */}
      {isPopUpActive ? (
        <FaTimes
          onClick={() => setIsPopUpActive((prev) => !prev)}
          className="w-8 h-8 block md:hidden lg:hidden hover:cursor-pointer z-[100]"
        />
      ) : (
        <FaBars
          onClick={() => setIsPopUpActive((prev) => !prev)}
          className="w-8 h-8 block md:hidden lg:hidden hover:cursor-pointer z-[100]"
        />
      )}

      {/* Dropdown for mobile view */}
      <div
        className={`w-full h-[200px] shadow-2xl absolute left-0 top-0 bg-white flex flex-col items-center gap-[3px] justify-center md:hidden lg:hidden transition-all transform  duration-300 ease-in-out z-[50] ${
          isPopUpActive
            ? "translate-y-0 scale-100 opacity-100"
            : "-translate-y-4 opacity-0 scale-95 pointer-events-none"
        }`}
      >
        {navLinks.map((nav) => (
          <a
            href="#"
            key={nav}
            className="text-[14px] font-medium text-zinc-700"
          >
            {nav}
          </a>
        ))}
        <Button className="p-2">Login</Button>
      </div>

      {isPopUpActive && (
        <div
          className="fixed block md:hidden lg:hidden inset-0 bg-black bg-opacity-50 z-[49]"
          onClick={() => setIsPopUpActive(false)}
        />
      )}

      <Button className="hidden md:block lg:block p-2">Login</Button>
    </nav>
  );
};

export default NavBar;
