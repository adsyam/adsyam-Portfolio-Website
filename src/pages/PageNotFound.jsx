import { HiArrowLongLeft } from "react-icons/hi2";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div>
      <img
        src="/public/Error404-third.svg"
        alt=""
        className="m-auto h-screen"
      />
      <Link to={-1} className="fixed top-10 z-50 m-12 hover:text-[#a855f7] duration-300">
        <div className=" flex items-center gap-2">
          <HiArrowLongLeft />
          <span>Go Back</span>
        </div>
      </Link>
    </div>
  );
}
