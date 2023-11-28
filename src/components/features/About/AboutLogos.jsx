import { motion } from "framer-motion";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Bootstrap,
  CSS,
  Figma,
  Firebase,
  Framer,
  Git,
  Github,
  HTML,
  JavaScript,
  Laravel,
  Mysql,
  PHP,
  React,
  React_Query,
  Redux,
  Styled,
  Supabase,
  Tailwind,
  TypeScript,
} from "../../../assets/stacks";

const techstackArr = [
  {
    name: "HTML",
    logo: HTML,
  },
  {
    name: "CSS",
    logo: CSS,
  },
  {
    name: "JavaScript",
    logo: JavaScript,
  },
  {
    name: "TypeScript",
    logo: TypeScript,
  },
  {
    name: "Bootstrap",
    logo: Bootstrap,
  },
  {
    name: "Tailwind CSS",
    logo: Tailwind,
  },
  {
    name: "React",
    logo: React,
  },
  {
    name: "PHP",
    logo: PHP,
  },
  {
    name: "Laravel",
    logo: Laravel,
  },
  {
    name: "MySQL",
    logo: Mysql,
  },
  {
    name: "Firebase",
    logo: Firebase,
  },
  {
    name: "Supabase",
    logo: Supabase,
  },
];

const toolsArr = [
  {
    name: "Git",
    logo: Git,
  },
  {
    name: "Github",
    logo: Github,
  },
  {
    name: "Figma",
    logo: Figma,
  },
  {
    name: "Redux",
    logo: Redux,
  },
  {
    name: "React Query",
    logo: React_Query,
  },
  {
    name: "Framer Motion",
    logo: Framer,
  },
  {
    name: "Styled Components",
    logo: Styled,
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
            <img
              loading="lazy"
              src={tech.logo}
              alt={tech.name}
              className="w-12"
            />
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
          <img
            loading="lazy"
            src={tech.logo}
            alt={tech.name}
            className="w-12"
          />
          <p>{tech.name}</p>
        </motion.div>
      ))}
    </div>
  );
}
