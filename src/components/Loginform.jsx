import { useForm } from 'react-hook-form'
import loadingimg from '../assets/formloading.gif'
import { useContext, useState } from 'react';
import {Link ,  Navigate,  Outlet,  useNavigate } from 'react-router-dom';
import { IsAuthContext } from '../Context/Authcontext';


const Loginform = () => {
  const {setIsauth , isauth , username , setUsername ,usermail  , setUsermail} = useContext(IsAuthContext)
  

  const navigate = useNavigate();
  const [loginstate , setLoginstate] = useState(null);
  

   const {
     register,
      handleSubmit, 
      watch,
       formState: { errors , isSubmitting} 
      } = useForm();

// const delay = (time) => {
//     return new Promise((resolve , reject) => {   //to simulate network delay
//       setTimeout(() => {
//         resolve()
//       }, time * 1000);
//     })
// }

const onSubmit = async (data) => {
    // await delay(3)                                //to simulate network delay
     console.log(data);

     try {
      const response = await fetch('http://localhost:8080/api/userlogin',{
      method: "POST",
      headers: {"content-type" : "application/json"},
      body: JSON.stringify(data)
    })

    const result = await response.json()
    console.log("response : ", response);
    console.log("result : ",result);

    if(!response.ok){
      setLoginstate(result.message || "login failed")
    }else{
      setLoginstate(result.message || "login successful")
      console.log(response);
      console.log(result);
      if( result.verified ){
        setIsauth(true);
        setUsermail(result.email);
        setUsername(data.username);
        navigate('/loggedin')
        
      }else{
        setUsermail(result.email);
        setUsername(data.username);
        navigate('/verify');
      }
    }

     } catch (error) {
      window.alert(error);
      setLoginstate("network error | server down")
     }

   

}

  return (
    <div className='form-container'>
      
      {isSubmitting && <div className="loader-overlay"> <div className="spinner"></div></div>}

        <form onSubmit={handleSubmit(onSubmit)}>
            <input placeholder="username" {...register("username" , {required:{value: true , message: "* username is required"}})}type="text"  />  
            <br />
            {errors.username &&  <div> {errors.username.message}</div> }
            <br />
            <input placeholder="password" {...register("password" ,{ required:{value:true , message: "* password is required"}})} type="password"  />
            <br />
            {errors.password && <div>{errors.password.message}</div>}
            <br />
            <input disabled={isSubmitting} type="submit" value="submit" />
            <Link to="/login/forgotpassword" className="removestyle">forgot pass ?</Link>
      
        </form>
        {loginstate &&  <div><br/><hr /><br />{loginstate}</div>}
        
        
        
    </div>
  )
}

export default Loginform