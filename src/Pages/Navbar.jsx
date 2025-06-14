import { NavLink, useNavigate } from "react-router-dom"

function Navbar(){
    const navigate = useNavigate()
    return(
        <div className="header-container">
        <nav>
            <NavLink to="/" >Home</NavLink>
            <NavLink to="/contact">contact</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/login">sign up</NavLink>
        </nav>
        <button className="btn" onClick={() => navigate('/')}> go to home</button>
        </div>
    )
}

export default Navbar