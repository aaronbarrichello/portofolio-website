import React from "react";
import Navbar from "./navbar";
import Hero from "./hero";
import Skills from "./skills";
import Projects from "./Projects";
import Footer from "./footer";

export default function page() {
  return (
    <div className="min-h-[450vh] bg-black">
      <div className=" dark:bg-black bg-white  dark:bg-grid-white/[0.023]">
        <div className="max-w-7xl mx-auto p-5 w-full">
          <Navbar />
          <Hero />
        </div>
      </div>
      <div className="max-w-7xl mx-auto p-5 mt-20">
        <Skills />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}
