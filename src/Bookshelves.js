import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Bookshelf from './Bookshelf';
import { PROPTYPE_SHAPE_BOOK, PERMENANT_BOOKSHELVES } from './constants';

class Bookshelves extends Component {
    static propTypes = {
        books: PropTypes.arrayOf(PropTypes.shape(PROPTYPE_SHAPE_BOOK)).isRequired,
        updateBookshelf: PropTypes.func.isRequired,
    }

    getBooksByBookshelf(books) {
        // Organises an array of books and returns a shelf-to-books mapping Object
        const booksByBookshelf = {};

        for (let book of books) {
            if (booksByBookshelf.hasOwnProperty(book.shelf)) {
                booksByBookshelf[book.shelf].push(book);
            } else {
                booksByBookshelf[book.shelf] = [book];
            }
        }

        return booksByBookshelf;
    }

    render() {
        const { books, updateBookshelf } = this.props;
        const booksByBookshelf = this.getBooksByBookshelf(books);

        return (
            <div className="list-books-content">
                {PERMENANT_BOOKSHELVES.map(bookshelf => (
                    <Bookshelf
                        key={bookshelf}
                        name={bookshelf}
                        books={booksByBookshelf[bookshelf] || []}
                        updateBookshelf={updateBookshelf}
                    />
                ))}
            </div>
        );
    }
}

export default Bookshelves;
