import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { IsAuthContext } from '../Context/Authcontext';

import { useForm } from 'react-hook-form';

const VerifyMail = () => {
  const { setIsauth  ,usermail  , setUsermail , username , setUsername} = useContext(IsAuthContext);
    const navigate =  useNavigate();
     const {
      register,
      handleSubmit, 
      watch,
       formState: { errors , isSubmitting } 
      } = useForm();

      const onSubmit = async(verifydata) => {
        try {
           const response = await fetch('http://localhost:8080/api/verifyuser' ,{
          method: "POST",
          headers: {"content-type" : "application/json"},
          body: JSON.stringify(verifydata)
        })
        const result = await response.json();
        if(! response.ok){
          window.alert("incorrect OTP")
        }else{
          //window.alert("OTP matches")
          setIsauth(true);
          
          navigate('/loggedin');
        }
        } catch (error) {
          window.alert(error);
        }
       
      }
  return (
    <div className='otp-container'>
      {isSubmitting && <div className="loader-overlay"> <div className="spinner"></div></div>}
        <h1>{`verify your Email : ${usermail}`}</h1><br />
        <hr />
        <br />
        <h3>an OTP has been sent to your email , which will be valid for 1hr</h3><br />
        <br />
       <form onSubmit={handleSubmit(onSubmit)}>
        <input type="email" value={usermail}  disabled={true} {...register("email")}/>
         <input type="text" placeholder='Enter OTP' {...register("OTP",{
          required:{value:true , message:"* OTP is required"}
         })}/><br />
         {errors.OTP && <div>{errors.OTP.message}</div>}
        <input disabled={isSubmitting} type="submit" value="verify" />
       </form>
    </div>
  )
}

export default VerifyMail