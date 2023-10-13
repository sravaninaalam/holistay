import {Formik,Form,ErrorMessage,Field} from 'formik'
import * as Yup from 'yup'


import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useLocation } from 'react-router-dom'

const Rescheduleroom = () => {

  // console.log(bookingdata,"bookingdata")
  const location=useLocation()
  const {hotelName,noOfRooms,noOfPersons,typeOfRoom,id}=location.state
  
  return (
    <>
         <ToastContainer theme='colored'/>
          <Formik 
                initialValues={{startDate:"",endDate:"",noOfPersons:noOfPersons,noOfRooms:noOfRooms,
                  typeOfRoom:typeOfRoom,hotelName:hotelName,}}
                 validationSchema=
                {Yup.object({
                  startDate:Yup.date().min(new Date(),"start Date should be greater than today").required("required"),
                  endDate:Yup.date()
                        .test('is-greater', 'End date must be greater than start date', function (endDate) {
                    const { startDate } = this.parent;
                    return startDate && endDate && new Date(endDate) > new Date(startDate);
                       }),
                
                   })}
                  
                onSubmit={(values)=>{
                  fetch("https://hoteldata-b0ew.onrender.com/bookings/"+id,{
                    method:"PUT",
                    headers:{
                      "Content-Type":"application/json"
                   },
                   body:JSON.stringify(values)
                  }
                      )
                  toast.success("Reschedule succesful")
                  console.log(values,"in schedule")
              
                }}
              >
              <div className='bg-gray-300 w-2/3 md:w-96 mx-auto mt-5 rounded-md p-4'>
                <h5 className='font-serif text-2xl font-semibold text-center'>Reschedue</h5>
              <Form>
                     <label>Start Date</label>
                     <Field type='date' name='startDate' required className='w-56 md:w-72  rounded-md p-1'/>
                     <p className='text-red-600'><ErrorMessage name='startDate'/></p>

                     <label>End Date</label>
                     <Field type='date' name='endDate' required className='w-56 md:w-72  rounded-md p-1 m-1 '/>
                     <p className='text-red-600'><ErrorMessage name='endDate'/></p>

                     <button type='submit' className=' mt-4 p-1 w-56 md:w-72 bg-blue-400 rounded-md'>Reschedule</button>
                </Form>
              </div>
 
          </Formik>
      
    </>
  )
}

export default Rescheduleroom
