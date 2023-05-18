import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import router from './routes/Route';
import AuthProvider from './provider/AuthProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(

  <AuthProvider>
    <RouterProvider router={router} />
    <ToastContainer/>
  </AuthProvider>


)
