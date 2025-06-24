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

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} >
            <Route path="details" element={<Details />} /> 
        </Route>
        <Route path="loggedin" element ={<Loggedin />} />
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
      <RouterProvider router={router} />
        
    </>
  )
}

export default App
  