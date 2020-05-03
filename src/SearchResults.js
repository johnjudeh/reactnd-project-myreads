import React from 'react';
import PropTypes from 'prop-types';
import { PROPTYPE_SHAPE_BOOK_ALL_SHELVES } from './constants';

import Book from './Book';

function SearchResults(props) {
    const { query, bookResults, noResultsMessage, updateBookshelf } = props;

    return (
        <div className="search-books-results">
            <ol className="books-grid">
                {bookResults.length === 0 && query !== ''
                    ? noResultsMessage
                    : bookResults.map(book => (
                        <li key={book.id}>
                            <Book book={book} updateBookshelf={updateBookshelf} />
                        </li>
                    ))
                }
            </ol>
        </div>
    );
}

SearchResults.propTypes = {
    query: PropTypes.string.isRequired,
    bookResults: PropTypes.arrayOf(
        PropTypes.shape(PROPTYPE_SHAPE_BOOK_ALL_SHELVES)
    ).isRequired,
    noResultsMessage: PropTypes.string.isRequired,
    updateBookshelf: PropTypes.func.isRequired,
}

export default SearchResults;
