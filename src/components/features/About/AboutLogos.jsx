import { Icon } from '@iconify/react';
import { motion } from "framer-motion";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import {
    Figma,
    Framer,
    Github,
    React,
    React_Query,
    Redux,
    Styled
} from "../../../assets/stacks";

const techstackArr = [
  {
    name: "HTML",
    logo: "vscode-icons:file-type-html",
  },
  {
    name: "CSS",
    logo: "vscode-icons:file-type-css",
  },
  {
    name: "JavaScript",
    logo: "logos:javascript",
  },
  {
    name: "TypeScript",
    logo: "devicon:typescript",
  },
  {
    name: "PHP",
    logo: "devicon:php",
  },
  {
    name: "Bootstrap",
    logo: "devicon:bootstrap",
  },
  
  {
    name: "Tailwind CSS",
    logo: "devicon:tailwindcss",
  },
  {
    name: "React",
    logo: "logos:react",
  },
  {
    name: "NodeJS",
    logo: "vscode-icons:file-type-node",
  },
  {
    name: "Express",
    logo: "skill-icons:expressjs-light",
  },
  {
    name: "MongoDB",
    logo: "skill-icons:mongodb",
  },
  {
    name: "MySQL",
    logo: "devicon:mysql",
  },
  {
    name: "Laravel",
    logo: "logos:laravel",
  },
  
  {
    name: "Firebase",
    logo: "logos:firebase",
  },
  {
    name: "Supabase",
    logo: "devicon:supabase",
  },
];

const toolsArr = [
  {
    name: "Git",
    logo: "devicon:git",
  },
  {
    name: "Github",
    logo: "bi:github",
  },
  {
    name: "Figma",
    logo: "logos:figma",
  },
  {
    name: "Redux",
    logo: "logos:redux",
  },
  {
    name: "React Query",
    logo: "logos:react-query-icon",
  },
  {
    name: "Framer Motion",
    logo: "tdesign:logo-framer",
  },
  {
    name: "Styled Components",
    logo: "simple-icons:styledcomponents",
  },
];

export default function AboutLogos() {
  const [hoveredLogo, setHoveredLogo] = useState(null);
  const location = useLocation();
  const pathname = location.pathname;

  if (pathname.includes("tools"))
    return (
      <div className="mb-12 grid grid-cols-4 gap-4">
        {toolsArr.map((tech, i) => (
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 10,
            }}
            onMouseEnter={() => setHoveredLogo(i)}
            onMouseLeave={() => setHoveredLogo(null)}
            key={i}
            className={`${
              hoveredLogo === i ? "logo" : ""
            } flex items-center gap-2 rounded-lg border-2 border-purple-300/50 px-4 py-2 text-sm`}
          >
            <Icon icon={tech.logo} width="36" height="48" />
            <p>{tech.name}</p>
          </motion.div>
        ))}
      </div>
    );

  return (
    <div className="mb-12 grid grid-cols-4 gap-4">
      {techstackArr.map((tech, i) => (
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 10,
          }}
          onMouseEnter={() => setHoveredLogo(i)}
          onMouseLeave={() => setHoveredLogo(null)}
          key={i}
          className={`${
            hoveredLogo === i ? "logo" : ""
          } flex items-center gap-2 rounded-lg border-2 border-purple-300/50 px-4 py-2 text-sm`}
        >
          {/* <img
            loading="lazy"
            src={tech.logo}
            alt={tech.name}
            className="w-12"
          /> */}
          <Icon icon={tech.logo} width="36" height="48" />
          <p>{tech.name}</p>
        </motion.div>
      ))}
    </div>
  );
}
