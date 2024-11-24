import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import Login from "../pages/Login";
import Signup from "../pages/Signup";
import AdminPannel from "../pages/AdminPannel";

import AllEmployee from "../pages/AllEmployee";
import Home from "../pages/Home";
import AdminEditEmployee from "../components/AdminEditEmployee";
import EmployeeSignup from "../pages/EmployeeSignup";



const router  = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children : [
            {
                path: '/home',
                element : <Home/>
            },
            {
                path:'/',
                element:<Login/>
            },
            {
                path:'/signup',
                element:<Signup/>
            },
           
            {
                path:'/admin-panel',
                element:<AdminPannel/>,
            
            },
            {
                path:'/emp-signup',
                element:<EmployeeSignup/>
            },
            {
                path:'/all-employee',
                element:<AllEmployee/>
            },
            {
                path:'/emp-update/:id',
                element:<AdminEditEmployee/>
            },
          

        ]
    },
    
])

export default router;