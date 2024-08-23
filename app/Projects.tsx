import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";
import SlideUp from "@/components/ui/SlideUp";

const projects = [
  {
    name: "Social Link Profile Card",
    description: "This is my first project.",
    image: "/project1.jpg",
    github: "https://github.com/aaronbarrichello/Social-Link-Profile",
    link: "https://aaronbarrichello.github.io/Social-Link-Profile/",
  },
  {
    name: "LungsCare",
    description:
      "Lungscare is a mobile application designed to help users reduce their cigarette consumption. The app offers features such as tracking daily cigarette consumption, recording smoke-free time, calculating the money saved from reducing cigarette use, and providing online consultations with specialist doctors. My role in this project is Project Manager.",
    image: "/project2.jpeg",
    github: "https://github.com/Raga-Git/motion_hack_team_8",
    link: "https://www.instagram.com/p/C5sWID-rA0v/?igsh=MTdrNjduaWFyMWluaQ==",
  },
  {
    name: "Company Profile MBC Laboratory",
    description:
      "Major Assignment for Research Assistant Recruitment at MBC Laboratory. Create a Company Profile Landing Page",
    image: "/project3.jpg",
    github:
      "https://github.com/aaronbarrichello/Landing_Page_Company_Profile_MBC_Laboratory.git",
    link: "https://aaronmbc.my.id/",
  },
  {
    name: "Portofolio Website",
    description: "My Portofolio Website",
    image: "/project4.jpg",
    github: "https://github.com/aaronbarrichello/portofolio-website",
    link: "https://localhost:3000",
  },
];

const ProjectsSection = () => {
  return (
    <div id="projects">
      <div className="flex flex-col items-center justify-center">
        <Link href="#projects" className="cursor-pointer">
          <h1 className="text-3xl font-bold duration-500 ease-in-out hover:text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-400">
            Projects
          </h1>
        </Link>
        <br />
        <br />
      </div>

      <div className="flex flex-col space-y-16 md:space-y-24">
        {projects.map((project, idx) => (
          <SlideUp key={idx} offset="-300px 0px -300px 0px">
            <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
              <div className="md:w-1/2">
                <Link href={project.link}>
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={1000}
                    height={1000}
                    className="rounded-xl shadow-xl hover:opacity-70"
                  />
                </Link>
              </div>
              <div className="mt-4 md:mt-0 md:w-1/2">
                <h1 className="text-2xl font-bold mb-2 relative group inline-block">
                  <Link href={project.link}>
                    <span className="inline-block text-white duration-500 ease-in-out hover:text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-400">
                      {project.name}
                    </span>
                  </Link>
                </h1>
                <p className="text-xl leading-7 text-neutral-600 dark:text-neutral-400">
                  {project.description}
                </p>
                <div className="flex flex-row space-x-4 mt-4">
                  <Link href={project.github} target="_blank">
                    <BsGithub
                      size={30}
                      className="hover:-translate-y-1 transition-transform cursor-pointer"
                    />
                  </Link>
                  <Link href={project.link} target="_blank">
                    <BsArrowUpRightSquare
                      size={30}
                      className="hover:-translate-y-1 transition-transform cursor-pointer"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </SlideUp>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
