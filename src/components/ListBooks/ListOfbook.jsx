import React from 'react';
import "./listbook.scss"

const ListOfbook = ({ filterallBooks}) => {
    
    const bookList = filterallBooks.map(book => (
        <div key={book.name} className="card">
            <h3 className="author"> Author :{book.authors}</h3>
            <p> Name: {book.name}</p>
            <p>country: {book.country}</p>
            <p>Released Date: {book.released}</p>

        </div>
    ))
    return (
        <div className="booklist-container">
            <div className="book-list-item">
                {bookList}
            </div>
        </div>
    );
};

export default ListOfbook;