import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { Astronaut } from "../../../assets/index";

export default function AboutMe() {
  return (
    <div className="mb-12 rounded-2xl border-2 border-stone-100/10 bg-[#e4e4e710] p-5">
      <p className="about-header text-2xl font-bold text-stone-300">About Me</p>
      <div className="flex">
        <img src={Astronaut} alt="Astronaut" className="h-[60vh]" />
        <div className="font-Mulish mr-16 text-xl font-thin text-stone-100">
          <h2>
            Greetings! I&#39;m Adrianne Yambao, a passionate Full-Stack
            Developer based in Antipolo, Rizal. Proficient in{" "}
            <TypeAnimation
              sequence={[
                "HTML, CSS, JavaScript, TypeScript, ReactJS, NodeJS, Express, MongoDB and MySQL.",
                100,
              ]}
              className="font-bold"
              speed={70}
              repeat={3}
            />
          </h2>
          <br />
          <h2>
            My passion for coding is fueled by a{" "}
            <span className="font-bold">continuous thirst for knowledge</span>,
            as the coding landscape constantly evolves. I&#39;ve successfully
            <span className="font-bold">
              {" "}
              completed a Full-Stack Bootcamp
            </span>{" "}
            with KodeGo, earning the title of{" "}
            <span className="font-bold">Best Coder</span> in my batch. To
            further enhance my skills, I{" "}
            <span className="font-bold">
              actively pursue additional courses
            </span>{" "}
            on platforms like <span className="font-bold">Udemy</span> and{" "}
            <span className="font-bold">YouTube</span>, aligning with my
            interests and preferred learning styles.
          </h2>
          <br />
          <h2>
            Currently, my focus is on an exciting project named:{" "}
            <Link
              to={"https://github.com/adsyam/Wild-Oasis"}
              target="_blank"
              className="font-bold duration-300 hover:text-[#a855f7]"
            >
              Wild Oasis
            </Link>
          </h2>
          <br />
          <div className="ml-5 text-base">
            <p>
              • Currently building a Hotel Management System with{" "}
              <span className="font-bold">ReactJS</span> for the frontend,{" "}
              <span className="font-bold">NodeJS Express</span> for the backend, and{" "}
              <span className="font-bold">MySQL</span> for the database.
            </p>{" "}
            <p>
              {" "}
              • Incorporating advanced concepts and technologies, including{" "}
              <span className="font-bold">React Query</span> as an{" "}
              <span className="font-bold">alternative to Redux</span> for
              managing remote state.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
