import React, { useContext } from 'react';
import { BookContext } from '../../Context/BookProvider';

const Book = () => {
    const {stroedBook,wishList}=useContext(BookContext)
    console.log(stroedBook,wishList)
    return (
        <div className='container mx-auto'>
Read List:{stroedBook.length}
<br />
Wish List:{wishList.length}
        </div>
    );
};

export default Book;