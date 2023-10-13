import {Formik,Form,ErrorMessage,Field} from 'formik'
import * as Yup from 'yup'
import { SignUp_IMG } from '../utils/constants'
import {Link,useNavigate} from 'react-router-dom'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import {ToastContainer, toast} from 'react-toastify'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from 'react'

const Resgister = () => {
  const navigate=useNavigate()
    useEffect(()=>{
      getUserData()
    },[])
      async function getUserData(){
        const data=await fetch("")
        const json=await data.json()
        // console.log(json)
      }
    return (
   <>
    <ToastContainer theme='colored' position="top-right" limit={1}/>
       <div className='bg-amber-700 h-11 '>
            <h3 className='p-2 font-bold text-xl text-white font-serif'>Holi-Stay</h3>
       </div>
    <div className='mt-5 w-fit  mx-auto shadow-lg bg-gray-200'>
       <div className='row'>
           <div className='col'>
           <div className='card font-serif text-white w-80'  style={{height:"100%"}}>
                        <img src={SignUp_IMG} className='h-full'/>
                        <h2 className='card-img-overlay text-2xl font-bold mt-[50%]'>Welecome to Holi-Stay</h2>
                    </div>
           </div>
           <div className='col'>
                <Formik initialValues={{ name:"",address:"",phoneno:"",email:"",password:""}}
                 validationSchema={Yup.object({
                  name:Yup.string().required('Name is Required'),
                  phoneno:Yup.string()
                  .matches("^(\+\d{1,2}\s?)?1?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$","Please enter a valid number")
                  .required("").max(10,"should not exeed 10 numbers"),
                  email:Yup.string().required('').email('Invalid mail'),
                  password:Yup.string()
                  .matches("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$","Must contain at least one number and one uppercase and lowercase letter and one Special character, minimum 8 and maximum 16")
                  .min(8,"Should not lessthan 8")
                 })}
                 onSubmit={(values)=>{
                  fetch("https://hoteldata-b0ew.onrender.com/users",{
                        method:"POST",
                        headers:{
                          "Content-Type":"application/json"
                          },
                     body:JSON.stringify(values)
                  })
                  toast.success("Successfully registered")
                  setTimeout(()=>{
                    navigate('/login')
                  },1200)
                  
                }}>
                  <div className='w-80'>
                    <Form>
                         <label>FullName:</label>
                         <Field type='text'name='name' required className='w-56 md:w-72 border border-black rounded-md p-1 ' />
                          <p className='text-red-500 mx-6'><ErrorMessage name='name'/></p>

                          <label>Adress</label>
                         <Field type='text' name='address' className='w-56 md:w-72 border border-black rounded-md p-1 '/>

                          <label>PhoneNo</label>
                         <Field type='tel' name='phoneno' required className='w-56 md:w-72 border border-black rounded-md p-1 '/>
                          <p className='text-red-500 mx-6'><ErrorMessage name='phoneno'/></p>

                          <label>Email</label>
                         <Field type='email' name='email' required className='w-56 md:w-72 border border-black rounded-md p-1 '/>
                          <p className='text-red-500 mx-6'><ErrorMessage name='email'/></p>

                          <label>Password</label>
                         <Field type='password' required name='password' className='w-56 md:w-72 border border-black rounded-md p-1'/>
                          <p className='text-red-300 mx-6'><ErrorMessage name='password'/></p>
                          <button type='submit' className=' m-2 p-2 w-56 md:w-72 font-semibold bg-teal-400 rounded-md'>Register</button>
                    </Form>
                   <Link to='/login'><p>Already have an account ?<span className='text-lg font-medium'>SignIn</span></p></Link>
                </div>
                </Formik>
           </div>
       </div>
    </div>
   </>
  )
}

export default Resgister
