import {configureStore} from '@reduxjs/toolkit'
import bookingsSlice from './bookingsSlice'
const store=configureStore({
    reducer:{
        bookings:bookingsSlice,
    }
})
export default store