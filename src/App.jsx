import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Featues from "./components/Featues";
import { Testimonials } from "./components";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Featues />
      <Testimonials />
    </>
  );
};

export default App;
