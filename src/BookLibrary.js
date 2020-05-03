import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from './PageHeader';
import Bookshelves from './Bookshelves';

function BookLibrary(props) {
    const { books, updateBookshelf } = props;

    return (
        <div className="list-books">
            <PageHeader title='MyReads' />
            <Bookshelves books={books} updateBookshelf={updateBookshelf} />
            <div className="open-search">
                <Link to='/search'>
                    <button>Add a book</button>
                </Link>
            </div>
        </div>
    );
}

export default BookLibrary;
