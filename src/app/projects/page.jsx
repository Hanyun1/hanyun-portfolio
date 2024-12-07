"use client";

import Experience from "@/components/projects/Experience";
import SideWidgetBar from "@/components/projects/SideWidgetBar";
import Skills from "@/components/projects/Skill";
import React, { useState } from "react";
import { FaReact } from "react-icons/fa";

const skills = [
  { name: "React", icon: <FaReact /> },
  { name: "Next.js", icon: <FaReact /> },
  { name: 'JavaScript', icon: <FaReact /> },
  { name: 'TypeScript', icon: <FaReact /> },
];

const submenuSkillMap = {
  content1: ['React', 'Next.js'],
  content2: ['JavaScript', 'TypeScript'],
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
      <div className="container p-4 bg-gray-100 basis-2/5">
        <Skills
          skills={skills}
          selectedSkills={submenuSkillMap[selectedContent] || []}
        />
      </div>

      <div className="container bg-gray-100 basis-3/5 flex flex-col md:flex-row gap-2">
        <SideWidgetBar
          onSelect={setSelectedContent}
          selectedContent={selectedContent}
          className="flex-3 basis-1/5"
        />
        <div className="flex p-4 basis-4/5">{renderContent()}</div>
      </div>
    </section>
  );
};

export default Projects;
