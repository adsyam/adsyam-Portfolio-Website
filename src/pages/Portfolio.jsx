import { motion } from "framer-motion";
import { HiExternalLink } from "react-icons/hi";
import { Link } from "react-router-dom";
import { nukt, wild_oasis } from "../assets/projects";
import {
  CSS,
  Firebase,
  Framer,
  HTML,
  JS,
  Laravel,
  PHP,
  React,
  React_Query,
  Styled,
  Tailwind,
} from "../assets/stacks";
import StackArray from "../components/ui/StackArray";

const nuktArr = [HTML, CSS, JS, React, Tailwind, Firebase, Framer];
const WildOasisArr = [HTML, CSS, JS, React, React_Query, Styled, PHP, Laravel];

export default function Portfolio() {
  return (
    <div className="my-12 flex flex-col gap-20 text-white">
      <div className="flex w-full gap-4">
        <Link
          to={"https://nukt-stream-team.vercel.app"}
          target="_blank"
          className="w-[40vw]"
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
            className=" rounded-lg border-2 border-purple-300/50"
          />
        </Link>
        <div className="flex w-[60vw] flex-col gap-2">
          <h1 className="text-4xl font-bold">Nukt</h1>
          <hr />
          <p className="font font-extralight">
            A versatile streaming platform that empowers users to enjoy a
            diverse range of content, including movies, series, and videos.
            Leveraging the capabilities of TMDB, Youtube, and other dynamic
            APIs, our platform provides a seamless and immersive viewing
            experience.
          </p>
          <motion.div whileHover={{ x: 10 }}>
            <Link
              to={"https://github.com/adsyam/Nukt-Stream--Collab-"}
              target="_blank"
              className="flex items-center gap-1"
            >
              <p>Github Repo</p>
              <HiExternalLink />
            </Link>
          </motion.div>
          <motion.div whileHover={{ x: 10 }}>
            <Link
              to={"https://nukt-stream-team.vercel.app"}
              target="_blank"
              className="flex items-center gap-1"
            >
              <p>Live Link</p>
              <HiExternalLink />
            </Link>
          </motion.div>
          <p>Technology Used:</p>
          <StackArray array={nuktArr} />
        </div>
      </div>

      <div className="flex w-full gap-4">
        <Link
          to={""}
          //   target="_blank"
          className="w-[40vw]"
        >
          <motion.img
            whileHover={{ scale: 1.01 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 10,
            }}
            loading="lazy"
            src={wild_oasis}
            alt="Nukt Preview Website"
            className="rounded-lg border-2 border-purple-300/50"
          />
        </Link>
        <div className="flex w-[60vw] flex-col gap-2">
          <h1 className="text-4xl font-bold">Wild Oasis</h1>
          <hr />
          <p className="font font-extralight">
            A Hotel Management System boasting a comprehensive array of
            features, including daily attendance tracking and insightful
            statistical analyses. The system also efficiently monitors and
            manages all cabins and rooms, providing detailed occupancy
            information for each customer.
          </p>
          <motion.div whileHover={{ x: 10 }}>
            <Link
              to={"https://github.com/adsyam/Wild-Oasis"}
              target="_blank"
              className="flex items-center gap-1"
            >
              <p>Github Repo</p>
              <HiExternalLink />
            </Link>
          </motion.div>
          <motion.div whileHover={{ x: 10 }}>
            <Link
              to={""}
              //   target="_blank"
              className="flex items-center gap-1"
            >
              <p>Live Link</p>
              <HiExternalLink />
            </Link>
          </motion.div>
          <p>Technology Used:</p>
          <StackArray array={WildOasisArr} />
        </div>
      </div>
    </div>
  );
}
