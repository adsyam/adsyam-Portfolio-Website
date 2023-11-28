import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex justify-between py-2">
      <Link to={"/home"} className="text-xl font-semibold text-stone-200">
        Yambao_dev
      </Link>
      <ul className="flex gap-4 text-lg font-normal text-stone-200">
        <li className="">
          <NavLink to={"/home"} className="nav-selection">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={"/about"} className="nav-selection">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to={"/projects"} className="nav-selection">
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to={"/contact"} className="nav-selection">
            Contact
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
          <FaGithub className="logo" />
        </Link>
        <Link
          to={"https://www.linkedin.com/in/adrianne-yambao/"}
          target="_blank"
        >
          <FaLinkedinIn className="logo" />
        </Link>
      </div>
    </div>
  );
}
