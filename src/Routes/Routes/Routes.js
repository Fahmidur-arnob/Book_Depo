import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import About from "../../Pages/About/About";
import BookCategories from "../../Pages/BookCategories/BookCategories";
import BookCollections from "../../Pages/BookCollections/BookCollections";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import DashboardLayout from "../../Layout/DashboardLayout";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import Blog from "../../Pages/Blog/Blog";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/bookcategories',
                element: <BookCategories></BookCategories>
            },
            {
                path:'/bookcollections/:name',
                element:<PrivateRoute><BookCollections></BookCollections></PrivateRoute>,
                loader:({params}) => fetch(`http://localhost:5000/bookcollections/${params.name}`)
            },
            {
                path:'/blog',
                element: <Blog></Blog>
            }
        ]
    },
    {
        path:'/dashboard',
        element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children:[
            {
                path:'/dashboard',
                element:<MyOrders></MyOrders>
            }
        ]
    }
])
export default router;