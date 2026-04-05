import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import MainLayout from './Layout/MainLayout'
import Home from './Pages/HomePage/Home'
import Book from './Pages/BookPage/Book'
import { router } from './routes/Routes'

// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
    {/* <App /> */}
  </StrictMode>,
)
