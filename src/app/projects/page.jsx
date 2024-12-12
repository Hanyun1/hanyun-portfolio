"use client";

import Experience from "@/components/projects/Experience";
import SideWidgetBar from "@/components/projects/SideWidgetBar";
import Skills from "@/components/projects/Skill";
import React, { useState } from "react";
import {
  FaJava,
  FaNodeJs,
  FaPython,
  FaReact,
  FaGithub,
  FaFigma,
} from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";
import { FaFlutter, FaDartLang } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMui, SiDotnet, SiGithubactions, SiTypescript } from "react-icons/si";

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

      <div className="container p-4 bg-gray-100">
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

const skills = [
  { name: "Java", icon: <FaJava /> },
  { name: "Python", icon: <FaPython /> },
  { name: "Dart", icon: <FaDartLang /> },
  { name: "JavaScript", icon: <IoLogoJavascript /> },
  { name: "TypeScript", icon: <SiTypescript /> },

  { name: "React", icon: <FaReact /> },
  { name: "Next.js", icon: <TbBrandNextjs /> },
  { name: "Flutter", icon: <FaFlutter /> },

  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "ASP.NET", icon: <SiDotnet /> },

  { name: "Tailwind CSS", icon: <RiTailwindCssFill /> },
  { name: "MUI", icon: <SiMui /> },

  { name: "GitHub", icon: <FaGithub /> },
  { name: "GitHub Action", icon: <SiGithubactions /> },

  { name: "Figma", icon: <FaFigma /> },
];

const submenuSkillMap = {
  content1: ["React", "Next.js"],
  content2: ["JavaScript", "TypeScript"],
  // Add more mappings as needed
};

const contentMap = {
  content1: {
    title: "Evolve MVMT Mobile App",
    location: "Tekt Industries, Melbourne",
    content: [
      "Worked onsite as a mobile app front-end developer, focusing on the development of a supplementary app (Evolve MVMT) for a medical health monitor device, utilising the cross-platform toolkit Flutter.",
      "Led the implementation of multiple core features aligned with Figma designs, including login, partial setting, change password flow, and patient communication page, ensuring high-quality and timely deliverables.",
      "Adhering closely to Agile methodologies with a cross-functional team, precisely tracking tasks through Wrike, including updating statuses, writing descriptions and estimating time.",
      "Actively participated in project meetings, contributing innovative ideas for efficient task management.",
    ],
  },
  content2: {
    title: "Rapid Quote System Website",
    location: "Tekt Industries, Melbourne",
    content: [
      "Maintained, tested and resolved 10+ bugs on the front end of the 'Rapid Quote System' website for its beta version, utilizing Next.js(React).",
      // "",
      // "",
      // "",
    ],
  },
  content3: {
    title: "Atomos UI/UX Screen Enhancement",
    location: null,
    content: [
      "Partnered with the client company Atomos, with an Agile team of 10, to replicate a cross-platform UI for Atomos monitors using Flutter, reducing the time and cost of UI implementing lifecycle.",
      "Achieved real-time response by using Websocket to communicate between the backend and Flutter application, enhancing precision for filmmakers.",
      "Ensured the responsiveness across widgets to support universal compatibility across monitor screen dimensions, built highly reused components and documented a playbook for future implementation.",
      "Developed a dynamic website UI simulator, accelerating the design iteration process by allowing real-time feedback and reducing design ambiguities. Also served as a visualisation tool to streamline the UX/UI implementation process for stakeholders.",
      // "",
      // "",
    ],
  },
  content4: {
    title:
      "Facilities Management Enhancement Proposal (Creative Innovation Engineer Project)",
    location: null,
    content: [
      "Collaborated in a team of 5 under KPMG’s sponsor to develop an innovative proposal to enhance facilities management, improving facility safety, usability, and overall working experiences of facility managers.",
      "Led and organised over 10 interviews with facility managers, extracting invaluable insights to inform an AI-based task priority management solution.",
      "Validated ideas with project sponsors and facility managers, wrote a professional report to showcase the proposal and delivered a presentation to stakeholders.",
      // "",
      // "",
      // "",
    ],
  },
  content5: {
    title: "Medical Application Management Portal Website",
    location: null,
    content: [
      "Collaborated with a team of five in delivering CCFR Researcher Collaboration Portal, a CRM (Customer Relationship Management) web application streamlining the researcher management processes, by applying MERN(MongoDB, Express, React, Node.js) stack framework and coded under Javascript language, adhering to an MVC structure.",
      "Applied the Agile principle. Organised daily standup meetings, sprint planning, and retrospectives for every sprint, ensuring efficient teamwork.",
      "Drove implementation of website's structure, designed and crafted portal's home and review page aligning with project requirements, including a navigation sidebar, page layout, and information display.",
      // "",
      // "",
      // "",
    ],
  },
  content6: {
    title: "Diabetes Remote Monitoring Website",
    location: null,
    content: [
      "Developed a multi-tenant website application enabling clinicians to monitor patients' daily health data remotely. Implemented under an Agile/Scrum environment with a team of 4, utilising MongoDB, Handlebars, Express, and Node.js. And deployed on Heroku.",
      "Writing CURD APIs. Built database. Designed and crafted webpages (within an MVC structure) for data-filling and display purposes.",
      // "",
    ],
  },
  content7: {
    title: "Portfolio Website",
    location: null,
    content: [
      "This portfolio",
      // "",
      // "",
      // "",
      // "",
      // "",
    ],
  },
};

export default Projects;
