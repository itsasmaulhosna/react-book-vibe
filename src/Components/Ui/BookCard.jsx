import React from 'react';
import { FaRegStar } from "react-icons/fa";
import { Link } from 'react-router';
const BookCard = ({book}) => {
    
            return(
                                <Link to={`/bookDetails/${book.bookId}`} className="card bg-base-100  shadow-sm">
              <figure className='p-6'>
                <img src=
                  {book.image}  className='rounded-xl h-[250px]'/>
              </figure>
              <div className="card-body">
                <div className='flex items-center gap-3'>
                    {book.tags.map(tag=><div className="badge badge-success">{tag}</div>)}
                </div>
                      <div className="badge badge-secondary">NEW</div>
                <h2 className="card-title text-2xl font-bold">
                  {book.bookName}
            
                </h2>
                <p className='text-sm font-semibold'>{book.author}</p>
               
                <div className="card-actions justify-between border-t border-dashed pt-3 border-gray-300">
                  <div className="font-semibold">{book.category}</div>
                  <div className="flex gap-2 items-center">{book.rating} <FaRegStar />
            </div>
                </div>
              </div>
            </Link>
                            )
        
    
};

export default BookCard;