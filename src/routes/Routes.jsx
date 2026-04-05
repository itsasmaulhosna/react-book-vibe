import MainLayout from "../Layout/MainLayout";
import Book from "../Pages/BookPage/Book";
import Error from "../Pages/errorPage/Error";
import Home from "../Pages/HomePage/Home";
import { createBrowserRouter } from "react-router";

export const router=createBrowserRouter([
  {
  path:'/',
  element:<MainLayout></MainLayout>,
  children:[
    {
      index:true,
      element:<Home></Home>
    },
    {
      path:'/books',
      element:<Book></Book>
    }
  ],
  errorElement:<Error></Error>
}
])