import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router.jsx'
import AuthProvider from './provider/AuthProvider.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HelmetProvider } from 'react-helmet-async'

createRoot(document.getElementById('root')).render(
  <div className="font-poppins">
    <StrictMode>
      <HelmetProvider>
        <AuthProvider>
          <RouterProvider router={router}></RouterProvider>
          <ToastContainer position="top-center" autoClose={1700} />
        </AuthProvider>
      </HelmetProvider>
    </StrictMode>
  </div>
)
