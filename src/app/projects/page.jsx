"use client";

import Experience from "@/components/projects/Experience";
import SideWidgetBar from "@/components/projects/SideWidgetBar";
import Skills from "@/components/projects/Skill";
import React, { useState } from "react";
import { FaJava, FaNodeJs, FaPython, FaReact, FaGithub } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";
import { FaFlutter, FaDartLang } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMui, SiDotnet, SiGithubactions } from "react-icons/si";

const skills = [
  { name: "Java", icon: <FaJava /> },
  { name: "Python", icon: <FaPython /> },
  { name: "Dart", icon: <FaDartLang /> },
  { name: "JavaScript", icon: <IoLogoJavascript /> },

  { name: "React", icon: <FaReact /> },
  { name: "Next.js", icon: <TbBrandNextjs /> },
  { name: "Flutter", icon: <FaFlutter /> },

  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "ASP.NET", icon: <SiDotnet /> },

  { name: "Tailwind CSS", icon: <RiTailwindCssFill /> },
  { name: "MUI", icon: <SiMui /> },

  { name: "GitHub", icon: <FaGithub /> },
  { name: "GitHub Action", icon: <SiGithubactions /> },
];

const submenuSkillMap = {
  content1: ["React", "Next.js"],
  content2: ["JavaScript", "TypeScript"],
  // Add more mappings as needed
};

const contentMap = {
  content1: {
    title: "Title for Content 1",
    content: `Details about Content 1:
    - Point 1
    - Point 2
    - Point 3`,
  },
  content2: {
    title: "Title for Content 2",
    content: "Details about Content 2",
  },
  // Add more mappings as needed
};

const Projects = () => {
  const [selectedContent, setSelectedContent] = useState(null);

  const renderContent = () => {
    if (selectedContent && contentMap[selectedContent]) {
      const props = contentMap[selectedContent];
      return <Experience {...props} />;
    }
    return <div>Select an option from the sidebar</div>;
  };

  return (
    <section className="container pt-10 flex flex-col xl:flex-row items-center justify-between xl:gap-4 gap-20">
      <div className="container p-4 basis-2/5">
        <Skills
          skills={skills}
          selectedSkills={submenuSkillMap[selectedContent] || []}
        />
      </div>

      <div className="container p-4 bg-gray-100 basis-3/5">
        <div className="text-2xl font-bold ">Experiences</div>
        <div className="flex flex-col md:flex-row gap-2">
          <SideWidgetBar
            onSelect={setSelectedContent}
            selectedContent={selectedContent}
            className="flex-3 basis-1/5"
          />
          <div className="flex p-4 basis-4/5">{renderContent()}</div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
