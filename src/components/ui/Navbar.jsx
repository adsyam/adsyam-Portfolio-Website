import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex justify-between py-5 items-center">
      <Link to={"/home"} className="logo text-xl font-semibold text-[#7e57c2]">
        Yambao_dev
      </Link>
      <ul className="flex gap-4 text-[1rem] font-normal text-stone-200">
        <li className="">
          <NavLink to={"/home"} className="nav-selection">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={"/about/techstack"} className="nav-selection">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to={"/portfolio"} className="nav-selection">
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink to={"/contact"} className="nav-selection">
            Contact Me
          </NavLink>
        </li>
        <li>
          <NavLink to={"/resume"} className="nav-selection">
            CV
          </NavLink>
        </li>
      </ul>
      <div className="flex items-center gap-4">
        <Link to={"https://github.com/adsyam"} target="_blank">
          <FaGithub className="logo text-[1.5em] text-[#7e57c2]" />
        </Link>
        <Link
          to={"https://www.linkedin.com/in/adrianne-yambao/"}
          target="_blank"
        >
          <FaLinkedinIn className="logo text-[1.5em] text-[#7e57c2]" />
        </Link>
      </div>
    </div>
  );
}
