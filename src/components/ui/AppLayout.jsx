import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"

export default function AppLayout() {
  return (
    <div className="mx-32">
      <Navbar />
      <Outlet />
    </div>
  )
}
