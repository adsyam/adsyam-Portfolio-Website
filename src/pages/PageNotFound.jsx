import { HiArrowLongLeft } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { Error3 } from "../assets";

export default function PageNotFound() {
  return (
    <div>
      <img src={Error3} alt="" className="m-auto h-screen" />
      <Link
        to={-1}
        className="fixed top-10 z-50 m-12 duration-300 hover:text-[#a855f7]"
      >
        <div className=" flex items-center gap-2">
          <HiArrowLongLeft />
          <span>Go Back</span>
        </div>
      </Link>
    </div>
  );
}
