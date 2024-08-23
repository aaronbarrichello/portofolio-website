import React from "react";

const Footer = () => {
  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0" />
      <div className="mx-auto p-4 flex flex-col text-center text-neutral-50 md:flex-row md:justify-center">
        <div className="flex flex-row items-center justify-center space-x-1">
          <a
            href="#top"
            className="duration-500 ease-in-out hover:text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-400"
          >
            Created by Aaron Barrichello
          </a>
        </div>
        <div className="flex flex-row items-center justify-center space-x-2 mb-1"></div>
      </div>
    </footer>
  );
};

export default Footer;
