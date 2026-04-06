import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
  import { ToastContainer} from 'react-toastify';

import './index.css'
import { RouterProvider } from 'react-router'
import MainLayout from './Layout/MainLayout'
import Home from './Pages/HomePage/Home'
import Book from './Pages/BookPage/Book'
import { router } from './routes/Routes'
import BookProvider from './Context/BookProvider'

// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BookProvider>
      <RouterProvider router={router}></RouterProvider>
              <ToastContainer />

    </BookProvider>
    {/* <App /> */}
  </StrictMode>,
)
