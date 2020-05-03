import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchInput from './SearchInput';
import SearchResults from './SearchResults';

class BookSearch extends Component {
    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/'>
                        <button className="close-search">Close</button>
                    </Link>
                    <SearchInput />
                </div>
                <SearchResults />
            </div>
        );
    }
}

export default BookSearch;
