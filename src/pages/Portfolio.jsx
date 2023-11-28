import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { nukt } from "../assets/projects";
import {
  CSS,
  Firebase,
  Framer,
  HTML,
  JS,
  React,
  Tailwind,
} from "../assets/stacks";
import StackArray from "../components/ui/StackArray";

const nuktArr = [HTML, CSS, JS, React, Tailwind, Firebase, Framer];

export default function Portfolio() {
  return (
    <div className="my-12 text-white">
      <Link
        to={"https://nukt-stream-team.vercel.app"}
        target="_blank"
        className="flex gap-4"
      >
        <motion.img
          whileHover={{ scale: 1.01 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 10,
          }}
          loading="lazy"
          src={nukt}
          alt="Nukt Preview Website"
          className="max-w-[600px] overflow-hidden rounded-lg border-2 border-purple-300/50"
        />
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold">Nukt</h1>
          <hr />
          <p className="font font-extralight">
            A versatile streaming platform that empowers users to enjoy a
            diverse range of content, including movies, series, and videos.
            Leveraging the capabilities of TMDB, Youtube, and other dynamic
            APIs, our platform provides a seamless and immersive viewing
            experience. Explore a vast library of entertainment with the
            convenience of multi-streaming, ensuring a rich and varied selection
            for every user.
          </p>
          <p>Technology Used:</p>
          <StackArray array={nuktArr} />
        </div>
      </Link>
    </div>
  );
}
