
import { useContext, useEffect, useState } from 'react';
import { BookContext } from '../../Context/BookProvider';
import BookCard from '../Ui/BookCard';
 
const ReadList = ({sortedBy}) => {
    const {stroedBook,wishList}=useContext(BookContext)
    console.log(stroedBook,wishList)
    const [filterReadList,setFilterReadList]=useState(stroedBook)
    useEffect(()=>{
if(sortedBy){
    if(sortedBy==='Pages'){
const sortedData=[...stroedBook].sort((a,b)=>a.totalPages-b.totalPages)
setFilterReadList(sortedData)
    }else if(sortedBy==='Rating'){
const sortedData=[...stroedBook].sort((a,b)=>a.rating-b.rating)
setFilterReadList(sortedData)
    }
}
    },[sortedBy,stroedBook])
    if(filterReadList.length===0){
        return<div className='h-[50vh] flex items-center justify-center bg-gray-500'>
            <h2 className='text-3xl text-center my-12'>You have not marked any book as read yet</h2>
        </div>
    }
    return (
        <div>
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
    {filterReadList.map((book)=><BookCard book={book}></BookCard>)}
</div>
        </div>
    );
};

export default ReadList;