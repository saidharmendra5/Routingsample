import React from 'react'
import { useForm } from 'react-hook-form';

const Register = () => {

  const {
      register,
      handleSubmit, 
      watch,
       formState: { errors , isSubmitting } 
      } = useForm();


     const delay = (time) => {
      return new Promise((res , rej) => {
        setTimeout(() => {
          res()
        }, time * 1000);
      })
     }     

      const onSubmit = async (registerdata) => {
        await delay(3)
        return console.log(registerdata)
      }


  return (
    <div>
      {isSubmitting && <div> creating a new account... </div>}
        <form onSubmit={handleSubmit(onSubmit)}>
            <input placeholder="username "type="text" {...register("username" , {
               required :{value:true , message:"* username is required"},
               minLength:{value:5 , message: "username must be atleast 5 characters"} ,
               maxLength :{value:10 , message: "username must not exceed 10 characters"} 
            })} />
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
    </div>
  )
}

export default Register