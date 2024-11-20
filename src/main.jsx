import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router.jsx'
import AuthProvider from './provider/AuthProvider.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')).render(
  <div className="font-poppins bg-white">
    <StrictMode>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
        <ToastContainer position="top-center" autoClose={1500} />
      </AuthProvider>
    </StrictMode>
  </div>
)
