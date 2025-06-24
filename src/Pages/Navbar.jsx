import { NavLink, useNavigate } from "react-router-dom"

function Navbar(props){
    const {isauth} = props;
    const navigate = useNavigate()
    if(isauth){
        return(
        <div className="header-container">
        <nav>
            <NavLink to="/" >Home</NavLink>
            <NavLink to="/contact">contact</NavLink>
            <NavLink to="/about">About</NavLink>

            
        </nav>
        <button className="btn" onClick={() => navigate('/')}> go to home</button>
        </div>
    )
    }else{
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
    
}

export default Navbar