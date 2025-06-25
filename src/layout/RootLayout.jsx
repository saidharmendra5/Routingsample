import { Outlet } from "react-router-dom"
import Navbar from "../Pages/Navbar"

const RootLayout = (props) => {
  const {isauth , setIsauth} = props;
  return (
    <>
    <Navbar isauth={isauth} setIsauth={setIsauth} />
    <div className="page-container"><Outlet /></div>
    
    </>
  )
}

export default RootLayout