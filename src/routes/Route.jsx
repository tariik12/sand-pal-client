import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../Register/Register";
import Blog from "../pages/Blog/Blog";
import Error from "../pages/Error/Error";
import AddToy from "../pages/AddToy/AddToy";

const router = createBrowserRouter([
    {
      path: "/",
      errorElement:<Error></Error>,
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        },
        {
          path:'/addToy',
          element:<AddToy></AddToy>
        }

      ]
    },
  ]);

  export default router;