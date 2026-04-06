import React, { useContext, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { BookContext } from '../../Context/BookProvider';

const BookDetails = () => {
    
    const {bookid}=useParams();
    console.log(bookid)
    const books=useLoaderData();
    const expectedBook=books.find(book=>book.bookId==bookid)
console.log(expectedBook)
const {image,bookName,author,category,review,totalPages,tags,publisher,yearOfPublishing}=expectedBook
const {handleMarkAsRead,handleMarkAsWish}=useContext(BookContext)
// const[stroedBook,setStroedBook]=useState([])
//     const handleMarkAsRead=(currentBook)=>{
//         const isExistBook=stroedBook.find(book=>book.bookId==currentBook.bookId)
//         if(isExistBook){
//             alert('You have already marked this book as read')

//         }else{
// setStroedBook([...stroedBook,currentBook])
//         }
//     }
    
    
    return (
        <div className="grid grid-cols-2 bg-base-100 shadow-sm container mx-auto my-12">
  <figure className='w-full flex items-center justify-center bg-gray-300'>
    <img 
      src={image} className='h-[400px]' />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-2xl">{bookName}</h2>
    <h2 className="card-title ">By:{author}</h2>
    <p className='py-2 border-y'>{category}</p>
    <p >Review:{review}</p>
                    <div className='flex items-center gap-3'>
                    {tags.map(tag=><div className="badge badge-success">{tag}</div>)}
    <div className="card-actions border-t">
        <div className='flex justify-between items-center'>
            <span>Number of Pages: {totalPages}</span>
        </div>
        <div className='flex justify-between items-center'>
            <span>Publisher: {publisher}</span>
        </div>
        <div className='flex justify-between items-center'>
            <span>Year of Publishing: {yearOfPublishing}</span>
        </div>
      <div className='flex items-center gap-3'>
        <button onClick={()=>handleMarkAsRead(expectedBook)} className="btn">Mark as Read</button>
        <button onClick={()=>handleMarkAsWish(expectedBook)} className="btn btn-accent">Add to WishList</button>
      </div>
    </div>
  </div>
</div>
</div>
    );
};

export default BookDetails;