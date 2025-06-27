import { useState } from 'react';
import { useForm } from 'react-hook-form'

const Forgotpass = () => {
const [forgotmessage , setForgotmessage]  = useState(null);
    const {
     register,
      handleSubmit, 
      watch,
       formState: { errors , isSubmitting} 
      } = useForm();

    // const delay = (d) => {
    //   return new Promise((res , rej ) => {
    //     setTimeout(() => {
    //       res()
    //     },d * 1000)
    //   })
    // }  

    const onSubmit = async (data) => {
    try {
      
        // await delay(3);
        const response = await fetch('http://localhost:8080/api/userlogin/forgotpass' ,{
          method: 'POST',
          headers: {"content-type" : "application/json"},
          body: JSON.stringify(data)
        })
        console.log(data)
        const result = await response.json()
        console.log(response);
        console.log(result)
        if (!response.ok){
          setForgotmessage(result.message)
        }else{
           setForgotmessage(result.message)
        }
    } catch (error) {
      window.alert(error)
    }
  }

      
  return (
    <>
    <br />
    <h3> reset password : </h3>
    <br />
    {isSubmitting && <div className="loader-overlay"> <div className="spinner"></div></div>}
    <form onSubmit={handleSubmit(onSubmit)}>
    <input type="email" placeholder='e-mail' {...register("email" ,{
      required:{value:true , message:"* e-mail is required"}
    })} /><br />
    {errors.email && <div>{errors.email.message}</div>}
    <br />
    <input disabled={isSubmitting} type="submit" value="verify" />
    </form>
    {forgotmessage &&  <div><br /><hr /><br />{forgotmessage}</div>}
    </>
  )
}

export default Forgotpass