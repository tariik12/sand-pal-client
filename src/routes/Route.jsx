import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../Register/Register";
import Blog from "../pages/Blog/Blog";
import Error from "../pages/Error/Error";
import AddToy from "../pages/AddToy/AddToy";
import AllToys from "../pages/AllToys/AllToys";
import MyToys from "../pages/MyToys/MyToys";
import UpdateToy from "../pages/UpdateToy/UpdateToy";
import Sub_CategoryDetails from "../pages/Home/ReactTabs/TabReact/Sub_CategoryDetails/Sub_CategoryDetails";

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
          path:'viewDetails/:id',
          element:<Sub_CategoryDetails></Sub_CategoryDetails>,
          loader:({params}) => fetch(`https://spk-server-side.vercel.app/sandPalToy/${params.id}`)
        }
        ,
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
        },
        {
          path:'/allToys',
          element:<AllToys></AllToys>
        },
        {
          path:'/myToys',
          element:<MyToys></MyToys>
        },
        {
          path:'updateToy/:id',
          element:<UpdateToy></UpdateToy>,
          loader:({params}) => fetch(`https://spk-server-side.vercel.app/allToys/${params.id}`)
        }


      ]
    },
  ]);

  export default router;