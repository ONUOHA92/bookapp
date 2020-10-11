import React, { useState, useEffect } from 'react';
import axios from 'axios'
import "./App.css"
import Header from './components/header/Header';
import SearchForm from './components/SearchForm/SearchForm';
import ListOfbook from './components/ListBooks/ListOfbook';
import Banner from './components/banner/Banner';

function App() {

  const [book, setBook] = useState([]);
  const [loading, setLoading] =useState(false);
  // const [currentpage, setCurrentPage] =useState(1);
  //  const [bookperpage, setBookperPage] =useState(10)

  useEffect(() => {
     const fetchBook = async () => {
       setLoading(true);
       const res = await axios.get("https://anapioficeandfire.com/api/books")
       setBook(res.data)
       setLoading(false)
     }

     fetchBook()
  } , [])
 
   console.log(book)

  return (
    <div className="App">
      <Header />
      <Banner  />
      <SearchForm />
      <ListOfbook books={book} />
    </div>
  );
}

export default App;


//https://anapioficeandfire.com/api/books