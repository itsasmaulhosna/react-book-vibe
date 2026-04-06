import React, { useContext } from 'react';
import { BookContext } from '../../Context/BookProvider';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadList from '../../Components/ListedBooks/ReadList';
import WishList from '../../Components/ListedBooks/WishList';


const Book = () => {
    const {stroedBook,wishList}=useContext(BookContext)
    console.log(stroedBook,wishList)
    return (
        <div className='container mx-auto my-4'>


<Tabs>
    <TabList>
      <Tab>Read List</Tab>
      <Tab>Wish List</Tab>
    </TabList>

    <TabPanel>
     <ReadList></ReadList>
    </TabPanel>
    <TabPanel>
      <WishList></WishList>
    </TabPanel>
  </Tabs>

        </div>
    );
};

export default Book;