import { Outlet } from "react-router-dom"
import Navbar from "../Pages/Navbar"

const RootLayout = () => {
  return (
    <>
    <Navbar />
    <div className="page-container"><Outlet /></div>
    
    </>
  )
}

export default RootLayout