import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import router from './routes/Route';
import AuthProvider from './provider/AuthProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(

  <HelmetProvider>
        <AuthProvider>
    <RouterProvider router={router} />
    <ToastContainer/>
  </AuthProvider>
  </HelmetProvider>
   



)
