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

function App() {

  const [isauth , setIsauth] = useState(false); //value is set to true when user succesfuly logs in

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout isauth={isauth} setIsauth={setIsauth}/>}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} >
            <Route path="details" element={<Details />} /> 
        </Route>
        
        <Route path="loggedin" element ={
          <Protected isauth={isauth}><Loggedin /></Protected> //protected route that allows only loged in users.
          
          } />
        
        <Route path="login" element={<Login isauth={isauth} setIsauth={setIsauth}/>} >
            <Route path="user" element={<Loginform isauth={isauth} setIsauth={setIsauth}/>} />
            
           
            <Route path="newuser" element={<Register isauth={isauth} setIsauth={setIsauth}/>} />
            <Route path="forgotpassword" element ={<Forgotpass />} />
            
        </Route>
        <Route path="*" element={<Notfound />} />
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router} />
        
    </>
  )
}

export default App
  