import { Outlet } from "react-router-dom"
import Navbar from "../Pages/Navbar"

const RootLayout = (props) => {
  const {isauth} = props;
  return (
    <>
    <Navbar isauth={isauth} />
    <div className="page-container"><Outlet /></div>
    
    </>
  )
}

export default RootLayout