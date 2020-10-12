import React from 'react';
import "./searchform.scss"


const SearchForm = ({search, searchChange,}) => {


    return (
        <div className="search-form-container">
            <form>
                <h2 className="title">search for books here</h2>
                <input type="text" placeholder="serch 
                   for book here ..." className="input-form"
                    value={search}
                    onChange={searchChange}
                />           
            </form>
        </div>
    );
};

export default SearchForm;