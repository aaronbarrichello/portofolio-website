import React from "react";

export default function Hero() {
  return (
    <div className="min-h-[60vh] flex flex-col-reverse gap-14 lg:gap-0 lg:flex-row items-center justify-between mx-auto w-full max-w-4xl">
      <div className="space-y-3 text-center lg:text-left">
        <h1 className="text-4xl lg:text-6xl font-bold">
          Hi There!!
          <span>🙋‍♂️</span> <br />
          I'm Aaron.
        </h1>
        <p className="md:w-96 text-lg text-gray-300">
          {
            "Currently in my third year pursuing a bachelor's degree in informatics at Telkom University. I'm a Cyber Security Enthusiast passionate about Network Security."
          }
        </p>
        <a
          href="cv.pdf"
          download="CV_Aaron_Barrichello.pdf"
          className="inline-block px-3 py-2 font-bold text-black rounded-md shadow-lg bg-white hover:bg-gradient-to-r hover:from-green-400 hover:to-yellow-400 hover:text-white 
          transition-transform duration-300 ease-in-out hover:scale-105"
        >
          My Resume
        </a>
      </div>
      <div>
        <img
          src="gambar.png"
          alt="Logo"
          width={350}
          className="transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-3"
        />
      </div>
    </div>
  );
}
