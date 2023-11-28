import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

export default function TechStack() {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div className="mb-12">
      <h1 className="skills mb-6 text-2xl font-bold">Skills</h1>
      <div className="flex items-center gap-4">
        <motion.div whileTap={{ scale: 1.1 }}>
          <Link
            to={"/about/techstack"}
            className={`rounded-lg border-2 px-4 py-2 duration-300 hover:text-white ${
              pathname.includes("techstack")
                ? "logo border-purple-300 bg-[#a855f750] text-purple-100"
                : "border-purple-500/50 text-stone-300 "
            }`}
          >
            Tech Stack
          </Link>
        </motion.div>
        <motion.div whileTap={{ scale: 1.1 }}>
          <Link
            to={"/about/tools"}
            className={`rounded-lg border-2 px-4 py-2 duration-300 hover:text-white ${
              pathname.includes("tools")
                ? "logo border-purple-300 bg-[#a855f750] text-purple-100"
                : "border-purple-500/50 text-stone-300"
            }`}
          >
            Tools
          </Link>
        </motion.div>
      </div>
    </div>
  );
}