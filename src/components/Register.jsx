import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { IsAuthContext } from '../Context/Authcontext';
import VerifyMail from './VerifyMail';

const Register = () => {
  const { usermail , setUsermail } = useContext(IsAuthContext);

  const [formresult , setFormresult] = useState(null)
  const navigate = useNavigate();

  const {
      register,
      handleSubmit, 
      watch,
       formState: { errors , isSubmitting } 
      } = useForm();

/*
     const delay = (time) => {
      return new Promise((res , rej) => {
        setTimeout(() => {
          res()
        }, time * 1000);
      })
     }     
*/
      const onSubmit = async (registerdata) => {
        //await delay(3) //used to simpulate API  or  network delay .
        console.log(registerdata)

        try {
          const response = await fetch('http://localhost:8080/api/newuser' ,{
          method: 'POST' ,
          headers: {"Content-Type" : "application/json"},
          body: JSON.stringify(registerdata)
        })

        const result = await response.json()
        console.log("result : " , result)
        console.log("response : " , response)

        if (!response.ok){
          setFormresult(result.message || 'Registration failed')
        }else{
          setFormresult('user registered successfully')
          setUsermail(registerdata.email)
          navigate('/verify');
          
        }
        } catch (error) {
          window.alert(error)
          setFormresult('network error | server down')
        }
        
      
      }


  return (
    <div>
      {isSubmitting && <div className="loader-overlay"> <div className="spinner"></div></div>}
        <form onSubmit={handleSubmit(onSubmit)}>
            <input placeholder="username "type="text" {...register("username" , {
               required :{value:true , message:"* username is required"},
               minLength:{value:5 , message: "username must be atleast 5 characters"} ,
               maxLength :{value:15 , message: "username must not exceed 10 characters"} 
            }
            )} />
            <br />
            {errors.username && <div>{errors.username.message}</div>}
            <br />
            <input placeholder="password" type="password" {...register("password", {required: {value:true , message:"* password is required"} ,
            minLength:{value:5 , message:"password is too short."},
            maxLength:{value:10 , message:"password is too long."}
            })} />
            <br />
            {errors.password && <div>{errors.password.message}</div>}
            <br />
            <input placeholder="e-mail" type="email" {...register("email" , {required: { value:true , message:"* E-mail is required"}})} />
            <br />
            {errors.email && <div>{errors.email.message}</div>}
            <br />
            <input disabled={isSubmitting} type="submit" value="create account" />
            
        </form>
        {formresult && <div> <br /><hr />  <br /> {formresult} </div>}
    </div>
  )
}

export default Register