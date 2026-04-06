import React, { useContext, useState } from 'react';
import { BookContext } from '../../Context/BookProvider';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadList from '../../Components/ListedBooks/ReadList';
import WishList from '../../Components/ListedBooks/WishList';


const Book = () => {
    const[sortedBy,setSortedBy]=useState('')
    const {stroedBook,wishList}=useContext(BookContext)
    console.log(stroedBook,wishList)
    return (
        <div className='container mx-auto my-4'>
<div className='flex justify-center my-3'>
    <div className="dropdown dropdown-start">
  <div tabIndex={0} role="button" className="btn m-1">Sorted by ⬇️</div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li onClick={()=>setSortedBy('Pages')}><a>Pages</a></li>
    <li onClick={()=>setSortedBy('Rating')}><a>Rating</a></li>
  </ul>
</div>
</div>

<Tabs>
    <TabList>
      <Tab>Read List</Tab>
      <Tab>Wish List</Tab>
    </TabList>

    <TabPanel>
     <ReadList sortedBy={sortedBy}></ReadList>
    </TabPanel>
    <TabPanel>
      <WishList sortedBy={sortedBy}></WishList>
    </TabPanel>
  </Tabs>

        </div>
    );
};

export default Book;