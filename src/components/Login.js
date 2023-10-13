import { SignUp_IMG } from '../utils/constants'
import * as Yup from 'yup'
import {Link,useNavigate} from 'react-router-dom'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
const Login = () => {
  const navigate=useNavigate()
  return (
    <>
    <ToastContainer theme='colored' position="top-right" limit={1}/>
        <div className='bg-amber-700 h-11 '>
            <h3 className='p-2 font-bold text-xl text-white font-serif'>Holi-Stay</h3>
       </div>
       <div className='mt-5 w-fit mx-auto shadow-lg  bg-gray-200'>
            <div className='row'>
                <div className='col '>
                    <div className='card font-serif text-white w-72 '>
                        <img src={SignUp_IMG} className='h-96'/>
                        <h2 className='card-img-overlay text-2xl mt-[50%]'>Welecome to Holi-Stay</h2>
                    </div>
                </div>
                <div className='col'>
                      <Formik  initialValues={{name:'',password:''}}
                      validationSchema={Yup.object({
                        name:Yup.string().required("required"),
                        password:Yup.string()
                        .matches("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$","Must contain at least one number and one uppercase and lowercase letter and one Special character, minimum 8 and maximum 16")
                        .required("required").min(8,"Should not lessthan 8")
                      })} 
                      onSubmit={async(values)=>{
                        const data=await fetch("https://hoteldata-b0ew.onrender.com/users")
                       const json=await data.json()
                         Object.values(json).forEach(i=>{
                         if(i.name.toLowerCase()===values.name.toLowerCase() && i.password===values.password)
                        {
                            toast.success("Login successfull!")
                                  setTimeout(() => {
                                    navigate("/home")
                                  }, 2000);
                              }
                              else{
                                toast.error("Enter valid credentials")
                              }
                            })
                            }
                      }
                      
                    >
                  <div className='w-80'>
                     <h2 className='font-serif text-lg font-semibold text-center'>Login Form</h2>
             <Form >
                  <label>Username:</label>
                  <Field type='text' name='name' className='w-56 md:w-72 border border-black rounded-md p-1 m-2'/>
                  <p className='text-red-400'><ErrorMessage name='name'/></p>

                  <label>password:</label>
                  <Field type='password' name='password' className='w-56 md:w-72 border border-black rounded-md p-1 m-2'/>
                  <p className='text-red-400'><ErrorMessage name='password'/></p>

                  <button type='submit' className=' m-2 p-1 w-56 md:w-72 bg-teal-400 font-semibold rounded-md'>Login</button>
             </Form>
            <Link to='/'><p>Don't have an account ?<span className='text-lg font-medium'>Signup</span></p></Link>
           </div>
                      </Formik>
                </div>
            </div>
       </div>
    </>
  )
}

export default Login
