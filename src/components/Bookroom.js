import {Formik,Form,ErrorMessage,Field} from 'formik'
import * as Yup from 'yup'

import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate,useLocation } from 'react-router-dom';

// import { Bookings_URL } from '../utils/constants';

const Bookroom = () => {
  const navigate=useNavigate()
  const location=useLocation()
  const {name}=location.state
 
  return (
   <>
   <ToastContainer theme='colored'/>
          <Formik 
                initialValues={{startDate:"",endDate:"",noOfPersons:"",noOfRooms:"",typeOfRoom:"",hotelName:name,}}
                 validationSchema=
                {Yup.object({
                  startDate:Yup.date().min(new Date(),"start Date should be greater than today").required("required"),
                  endDate:Yup.date()
                        .test('is-greater', 'End date must be greater than start date', function (endDate) {
                    const { startDate } = this.parent;
                    return startDate && endDate && new Date(endDate) > new Date(startDate);
                       }),
                  noOfPersons:Yup.number().max(5,"should not greater than 5 ").min(1,"Atleast one person should be there"),
                  noOfRooms:Yup.number().max(3,"No.of rooms can't be empty or greater than 3").min(1,"No.of rooms can't be empty or greater than 3")
                  .test('is-lesser',"You have selected extra room",function(noOfRooms){
                    const {noOfPersons}=this.parent
                    return noOfPersons && noOfRooms && noOfPersons>= noOfRooms
                  }),
                  typeOfRoom:Yup.string().required("please select room type")
                   })}
                  
                onSubmit={(values)=>{
                  fetch("https://hoteldata-b0ew.onrender.com/bookings",{
                    method:"POST",
                    headers:{
                      "Content-Type":"application/json"
                   },
                   body:JSON.stringify(values)
                  }
                      )
                  toast.success("Room booking was succesful")
                  console.log(values,"in bookings")
                 
                  navigate('/bookings')
                }}
              >
              <div className='bg-gray-300 w-2/3 md:w-96 mx-auto mt-5 rounded-md p-4'>
                <h5 className='font-serif text-2xl font-semibold text-center'>Book a Room</h5>
              <Form>
                     <label>Start Date</label>
                     <Field type='date' name='startDate' required className='w-56 md:w-72  rounded-md p-1'/>
                     <p className='text-red-600'><ErrorMessage name='startDate'/></p>

                     <label>End Date</label>
                     <Field type='date' name='endDate' required className='w-56 md:w-72  rounded-md p-1 m-1 '/>
                     <p className='text-red-600'><ErrorMessage name='endDate'/></p>

                     <label>No Of Persons</label>
                     <Field type='number' name='noOfPersons' required className='w-56 md:w-72  rounded-md p-1'/>
                     <p className='text-red-600'><ErrorMessage name='noOfPersons'/></p>

                     <label>No Of Rooms</label>
                     <Field type='number' name='noOfRooms' required className='w-56 md:w-72  rounded-md p-1'/>
                     <p className='text-red-600'><ErrorMessage name='noOfRooms'/></p>
                     
                     <label>Type of Room</label>
                     <Field name='typeOfRoom' as='select'className='w-56 md:w-72  rounded-md p-1'> 
                          <option value=''>--select room type--</option>
                          <option value="AC">AC</option>
                          <option value="Non AC">Non Ac</option>
                     </Field>
                     <p className='text-red-600'><ErrorMessage name='typeOfRoom'/></p>

                     <button type='submit' className=' mt-4 p-1 w-56 md:w-72 bg-blue-400 rounded-md'>Book</button>
                </Form>
              </div>
 
          </Formik>
      
   </>
  )
}


export default Bookroom
