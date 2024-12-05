import Experience from "@/components/projects/Experience";
import Skills from "@/components/projects/Skill";
import React from "react";
import { FaReact } from "react-icons/fa";

const skills = [
  { name: "React", icon: <FaReact />},
  { name: "React2", icon: <FaReact />},
  { name: "React", icon: <FaReact />},
  { name: "React2", icon: <FaReact />},
  { name: "React", icon: <FaReact />},
  { name: "React2", icon: <FaReact />},
  { name: "React", icon: <FaReact />},
  { name: "React2", icon: <FaReact />},
];

const Projects = () => {
  return (
    <section className="container pt-10 flex flex-col xl:flex-row items-center justify-between xl:gap-4 gap-20">
    <div className="container bg-gray-100 basis-2/5">
    <Skills/>
    </div>


    <div className="container bg-gray-100 basis-3/5">
    <Experience/>
    </div>
  </section>
  );
};

export default Projects;
