import React, { use } from 'react';

import BookCard from '../Ui/BookCard';

const booksPromise=fetch('/booksData.json').then(res=>res.json())
const AllBooks = () => {
    const books= use(booksPromise);
       console.log(books);
    return (
       
        <div className='my-12 container mx-auto'>
           <h3 className='text-3xl font-bold text-center mb-3'>Books</h3> 
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
            {
            books.map(book=>{
                return <BookCard book={book}></BookCard>
//                 return(
//                     <div className="card bg-base-100  shadow-sm">
//   <figure className='p-6'>
//     <img src=
//       {book.image}  className='rounded-xl h-[250px]'/>
//   </figure>
//   <div className="card-body">
//     <div className='flex items-center gap-3'>
//         {book.tags.map(tag=><div className="badge badge-success">{tag}</div>)}
//     </div>
//           <div className="badge badge-secondary">NEW</div>
//     <h2 className="card-title text-2xl font-bold">
//       {book.bookName}

//     </h2>
//     <p className='text-sm font-semibold'>{book.author}</p>
   
//     <div className="card-actions justify-between border-t border-dashed pt-3 border-gray-300">
//       <div className="font-semibold">{book.category}</div>
//       <div className="flex gap-2 items-center">{book.rating} <FaRegStar />
// </div>
//     </div>
//   </div>
// </div>
//                 )
            })
           }
           </div>
        </div>
    );
};

export default AllBooks;