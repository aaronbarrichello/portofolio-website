import Link from "next/link";
import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  const contact = [
    {
      link: "https://www.linkedin.com/in/aaronbarrichello/",
      label: "Linkedin",
      Icon: FaLinkedin,
    },
    {
      link: "https://github.com/aaronbarrichello",
      label: "Github",
      Icon: FaGithub,
    },
    {
      link: "https://www.instagram.com/aaronbarrichello/",
      label: "Instagram",
      Icon: FaInstagram,
    },
  ];

  return (
    <nav className="py-10 flex justify-between items-center mx-auto w-full max-w-4xl">
      <Link href="#top">
        <h1 className="text-2xl font-bold cursor-pointer">
          <span className="duration-500 ease-in-out hover:text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-400">
            Aaron Barrichello
          </span>
          <span> 👨‍💻</span>
        </h1>
      </Link>

      <div className="flex items-center gap-5">
        {contact.map((contact, index) => {
          const Icon = contact.Icon;
          return (
            <Link href={contact.link} key={index} aria-label={contact.label}>
              <Icon className="w-5 h-5 hover:scale-125 transition-all" />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
