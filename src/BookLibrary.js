import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { PROPTYPE_SHAPE_BOOK } from './constants';
import PageHeader from './PageHeader';
import Bookshelves from './Bookshelves';

function BookLibrary(props) {
    const { books, updateBookshelf } = props;

    return (
        <div className='list-books'>
            <PageHeader title='MyReads' />
            <Bookshelves books={books} updateBookshelf={updateBookshelf} />
            <div className='open-search'>
                <Link to='/search'>
                    <button>Add a book</button>
                </Link>
            </div>
        </div>
    );
}

BookLibrary.propTypes = {
    books: PropTypes.arrayOf(PropTypes.shape(PROPTYPE_SHAPE_BOOK)).isRequired,
    updateBookshelf: PropTypes.func.isRequired,
}

export default BookLibrary;
