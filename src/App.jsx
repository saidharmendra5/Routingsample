import Details from './components/Details'
import Notfound from './components/Notfound'
import RootLayout from './layout/RootLayout'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Login from './Pages/Login'
import Loginform from './components/Loginform'
import Register from './components/Register'
import Forgotpass from './components/Forgotpass'
import Loggedin from './components/Loggedin'
import { useState } from 'react'
import Protected from './components/Protected'
import { IsAuthContext } from './Context/Authcontext'
import VerifyMail from './components/VerifyMail'
import Underdev from './components/Underdev'


function App() {
  const [username , setUsername] = useState(null);
  const [usermail  , setUsermail] = useState(null);
  const [isauth , setIsauth] = useState(false); //value is set to true when user succesfuly logs in.
  const [isverified , setIsverified] = useState(false); // sets true if user verifies email by OTP.

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} >
            <Route path="details" element={<Details />} /> 
        </Route>
        <Route path="verify" element={<VerifyMail />} />
        <Route path="wip" element={<Underdev />} />
        <Route path="loggedin" element ={
          <Protected ><Loggedin /></Protected> //protected route that allows only loged in users.
          
          } />
        
        <Route path="login" element={<Login />} >
            <Route path="user" element={<Loginform />} />
            
           
            <Route path="newuser" element={<Register />} />
            <Route path="forgotpassword" element ={<Forgotpass />} />
            
        </Route>
        <Route path="*" element={<Notfound />} />
      </Route>
    )
  )

  return (
    <>
    <IsAuthContext.Provider value={{isauth , setIsauth , isverified , setIsverified , username , setUsername, usermail  , setUsermail}}>
      <RouterProvider router={router} />
    </IsAuthContext.Provider>
      
        
    </>
  )
}

export default App
  