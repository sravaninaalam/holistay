import { createSlice } from "@reduxjs/toolkit";
const bookingSlice=createSlice({
    name:'bookings',
    initialState:{
        bookingdetails:[
            
        ]
       
    },
    reducers:{
        addBookingDetails:(state,action)=>{
            console.log("action",action.payload)
            state.bookingdetails=action.payload
            // console.log(state.bookingdetails,"in slice")
        }
    }
})
export const {addBookingDetails}=bookingSlice.actions
export default bookingSlice.reducer