import React from 'react';
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

export default SearchResults;
