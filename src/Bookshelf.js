import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';
import {
    BOOKSHELF_LABELS,
    PERMENANT_BOOKSHELVES,
    PROPTYPE_SHAPE_BOOK,
} from './constants';

function Bookshelf(props) {
    const { name, books, updateBookshelf } = props;

    return (
        <div className='bookshelf'>
            <h2 className='bookshelf-title'>{BOOKSHELF_LABELS[name]}</h2>
            <div className='bookshelf-books'>
                <ol className='books-grid'>
                    {books.length !== 0
                        ? books.map(book => (
                            <li key={book.id}>
                                <Book book={book} updateBookshelf={updateBookshelf} />
                            </li>
                        ))
                        : 'No books in this bookshelf yet'
                    }
                </ol>
            </div>
        </div>
    );
}

Bookshelf.propTypes = {
    name: PropTypes.oneOf(PERMENANT_BOOKSHELVES).isRequired,
    books: PropTypes.arrayOf(PropTypes.shape(PROPTYPE_SHAPE_BOOK)).isRequired,
    updateBookshelf: PropTypes.func.isRequired,
}

export default Bookshelf;
