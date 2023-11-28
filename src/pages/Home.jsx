import { TypeAnimation } from "react-type-animation";
import { HomeAnimation } from "../assets";

export default function Home() {
  return (
    <div>
      <div className="mt-[-20px] grid grid-cols-2">
        <img
          src={HomeAnimation}
          alt="Home Page Animation"
          className="m-auto h-screen"
        />
        <div className="flex flex-col justify-center gap-3">
          <p className="text-4xl font-bold">Hi, Im</p>
          <p className="text-4xl font-bold">Adrianne Yambao</p>
          <TypeAnimation
            sequence={["A Full-Stack Web Developer.", 1000]}
            style={{ fontSize: "1.875rem", lineHeight: "2.25rem", letterSpacing: "0.1em" }}
            speed={30}
            repeat={Infinity}
          />
        </div>
      </div>
    </div>
  );
}
