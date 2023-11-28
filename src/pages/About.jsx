import AboutLogos from "../components/features/About/AboutLogos";
import AboutMe from "../components/features/About/AboutMe";
import TechStack from "../components/features/About/TechStack";

export default function About() {
  return (
    <div className="mt-12">
      <AboutMe />
      <div className="ml-10">
        <TechStack />
        <AboutLogos />
      </div>
    </div>
  );
}
