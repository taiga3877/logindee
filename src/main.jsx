import { ToastContainer } from 'react-toastify'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, RouterProvider } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import { Router } from './React.jsx'
import { StrictMode } from 'react'

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <RouterProvider router={Router} />
    <ToastContainer />
  </StrictMode>
)
