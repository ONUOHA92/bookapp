import React, { useState } from 'react';
import "./searchform.scss"

const SearchForm = () => {

    const [searchItem, setSearchItem] = useState("")
    const [sarchBar, setSearchBar] = useState("")

    const onChangeShearch = (e) => {
        setSearchBar(e.target.value)
    }

    return (
        <div className="search-form-container">
            <form>
                <h2 className="title">search for books here</h2>
                <input type="text" placeholder="serch 
                   for book here ..." className="input-form"
                    onChange={onChangeShearch}
                    value={sarchBar}

                />
                <button className="search-button">submit</button>
            </form>
        </div>
    );
};

export default SearchForm;