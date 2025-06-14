import { Outlet, useNavigate } from "react-router-dom"

function Contact(){

    const navigate = useNavigate()

    return(
        <div>
            <h1>contact page</h1>
            <button onClick={() => navigate('details') }>view  details</button>
            <Outlet />
        </div>
        
    )
}
export default Contact