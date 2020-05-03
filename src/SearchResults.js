import React from 'react';
import PropTypes from 'prop-types';
import { PROPTYPE_SHAPE_BOOK_ALL_SHELVES } from './constants';

import Book from './Book';

function SearchResults(props) {
    const { bookResults, updateBookshelf } = props;

    return (
        <div className="search-books-results">
            <ol className="books-grid">
                {bookResults.map(book => (
                    <li key={book.id}>
                        <Book book={book} updateBookshelf={updateBookshelf} />
                    </li>
                ))}
            </ol>
        </div>
    );
}

SearchResults.propTypes = {
    bookResults: PropTypes.arrayOf(
        PropTypes.shape(PROPTYPE_SHAPE_BOOK_ALL_SHELVES)
    ).isRequired,
    updateBookshelf: PropTypes.func.isRequired,
}

export default SearchResults;
