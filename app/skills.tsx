"use client";
import { HoverEffect } from "@/components/ui/cardhovereff";
import React from "react";
import { GiNetworkBars } from "react-icons/gi";
import { GrUserManager } from "react-icons/gr";
import {
  SiCodeproject,
  SiCss3,
  SiCyberdefenders,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiPinetwork,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import Link from "next/link"; // Import Link from next

export default function Skills() {
  const skills = [
    {
      text: "HTML",
      Icon: SiHtml5,
    },
    {
      text: "CSS",
      Icon: SiCss3,
    },
    {
      text: "JavaScript",
      Icon: SiJavascript,
    },
    {
      text: "TypeScript",
      Icon: SiTypescript,
    },
    {
      text: "Next JS",
      Icon: SiNextdotjs,
    },
    {
      text: "Tailwind",
      Icon: SiTailwindcss,
    },
    {
      text: "Red Team",
      Icon: SiCyberdefenders,
    },
    {
      text: "Networking",
      Icon: GiNetworkBars,
    },
    {
      text: "Project Management",
      Icon: GrUserManager,
    },
  ];

  return (
    <div id="Skills">
      <div className="max-w-5xl mx-auto px-8">
        <div className="flex flex-col items-center justify-center">
          <Link href="#Skills" className="cursor-pointer">
            <h1 className="text-3xl font-bold duration-500 ease-in-out hover:text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-400">
              Skills
            </h1>
          </Link>
        </div>
        <HoverEffect items={skills} />
      </div>
    </div>
  );
}
