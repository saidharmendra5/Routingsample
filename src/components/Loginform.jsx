import { useForm } from 'react-hook-form'
import loadingimg from '../assets/formloading.gif'


const Loginform = () => {

   const {
     register,
      handleSubmit, 
      watch,
       formState: { errors , isSubmitting} 
      } = useForm();

const delay = (time) => {
    return new Promise((resolve , reject) => {   //to simulate network delay
      setTimeout(() => {
        resolve()
      }, time * 1000);
    })
}

const onSubmit = async (data) => {
    await delay(3)                                //to simulate network delay
     console.log(data);
}

  return (
    <div className='form-container'>
      
      {isSubmitting && <div className="loader-overlay"> <img src={loadingimg} /></div>}

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
        </form>
    </div>
  )
}

export default Loginform