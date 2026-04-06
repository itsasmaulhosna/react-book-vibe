import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';
export const BookContext=createContext();
const BookProvider = ({ children }) => {
    const[stroedBook,setStroedBook]=useState([])
    const[wishList,setWishList]=useState([])
                const handleMarkAsRead=(currentBook)=>{
                    const isExistBook=stroedBook.find(book=>book.bookId==currentBook.bookId)
                    if(isExistBook){
                        toast.error('You have already marked this book as read')
            
                    }else{
            setStroedBook([...stroedBook,currentBook])
            toast.success(`${currentBook.bookName} has been added to list`)
                    }
                }

            
                const handleMarkAsWish=(currentBook)=>{
                    const isExistReadList=stroedBook.find(book=>book.bookId==currentBook.bookId);
            if(isExistReadList){
                toast.error('You have already marked this book as read')
                return;
            }
                    const isExistBook=wishList.find(book=>book.bookId===currentBook.bookId)
                    if(isExistBook){
                        toast.error('You have already marked this book as wish')
            
                    }else{
            setWishList([...wishList,currentBook])
            toast.success(`${currentBook.bookName} has been added to wish list`)
                    }
                }
    
                const data={stroedBook,handleMarkAsRead,setStroedBook,handleMarkAsWish,setWishList,wishList}
    return <BookContext.Provider value={data}>{children}</BookContext.Provider>
};

export default BookProvider;