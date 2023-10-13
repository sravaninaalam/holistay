import React from "react"
import ReactDOM  from "react-dom/client"
import Resgister from "./components/Resgister"
import { BG_IMG } from "./utils/constants"
import {createBrowserRouter,Outlet,RouterProvider} from 'react-router-dom'
import Login from "./components/Login"

import Home from "./components/Home"
import Header from "./components/Header"
import Signout from "./components/Signout"
import Bookings from "./components/Bookings"
import Hotels from "./components/Hotels"
import Bookroom from "./components/Bookroom"
import Rescheduleroom from "./components/Rescheduleroom"
import { Provider } from "react-redux"
import store from './redux/store'
import Viewreview from "./components/Viewreview"
import Addreview from "./components/Addreview"
const App = () => {
  return (
   <Provider store={store}>
        <div  className="h-[100%] w-screen"
        // style={{ backgroundImage: `url(${BG_IMG})` }}
        >
          <Header/>
          <Outlet/>
        </div>
    </Provider>
  )
}
const appRouter=createBrowserRouter([
  {
    path:'/',
    element:<Resgister/>
  },
  {
    path:'/login',
    element:<Login/>
  },{
     path:'/logout',
     element:<Signout/>
  },
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/home',
        element:<Home/>
      },
      {
        path:'/hotels',
        element:<Hotels/>
      },
      {
        path:'/bookings',
        element:<Bookings/>
      },
    
      {
        path:'/bookroom',element:<Bookroom/>
      },
      {
        path:'/reschedule',element:<Rescheduleroom/>
      },{
        path:'/viewreview',element:<Viewreview/>
      },{
        path:'/addreview',element:<Addreview/>
      }
    ]
  }
])

const root=ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter}/>)
