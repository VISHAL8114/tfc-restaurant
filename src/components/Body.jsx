import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import Login from "./login";
import BodyLayout from "./BodyLayout";
import ContactUs from "./ConactUs";
import AboutUs from "./Aboutus";
import Error from "./Error";
import RestaurantMenu from "./RestaurantMenu";

const Body = () => {
    const router = createBrowserRouter([
        {
            path:"/",
            element:<BodyLayout />,
            errorElement:<Error />
        },
        {
            path:"/login",
            element:<Login />
        },{
            path:"/contactus",
            element:<ContactUs />
        },{
            path:"/aboutus",
            element:<AboutUs />
        },{
            path:"/restaurants/:resId",
            element:<RestaurantMenu />
        }
    ])
    
    
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
  }

  export default Body;