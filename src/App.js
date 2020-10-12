import React, { useState, useEffect } from 'react';
import axios from 'axios'
import "./App.css"
import Header from './components/header/Header';
import SearchForm from './components/SearchForm/SearchForm';
import ListOfbook from './components/ListBooks/ListOfbook';
import Banner from './components/banner/Banner';

function App() {

  const [books, setBook] = useState([]);
  const [loading, setLoading] =useState(false);
  const [search, setSearch] =useState("");


  useEffect(() => {
     const fetchBook = async () => {
       setLoading(true);
       const res = await axios.get("https://anapioficeandfire.com/api/books?page=1&pageSize=200")
       setBook(res.data)
       setLoading(false)
     }

     fetchBook()
  } , [])
 
   console.log(books)
   


   const searchChange = (e) => {
    setSearch(e.target.value)
}

  
 const filterallBooks = books.filter(book => {
   return book.name.toLowerCase().includes(search.toLowerCase())
 })
 

  return (
    <div className="App">
      <Header />
      <Banner  />
      <SearchForm search={search}
       searchChange={searchChange}  />
      <ListOfbook books={books} loading={loading}  filterallBooks={filterallBooks} />
    </div>
  );
}

export default App;


