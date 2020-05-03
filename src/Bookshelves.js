import React, { Component } from 'react';
import Bookshelf from './Bookshelf';
import { PERMENANT_BOOKSHELVES } from './constants';

class Bookshelves extends Component {
    getBooksByBookshelf(books) {
        // Organises an array of books and returns a shelf-to-books mapping Object
        const booksByBookshelf = {};

        for (let book of books) {
            if (booksByBookshelf.hasOwnProperty(book.shelf)) {
                booksByBookshelf[book.shelf].push(book);
            } else {
                booksByBookshelf[book.shelf] = [];
                booksByBookshelf[book.shelf].push(book);
            }
        }

        return booksByBookshelf;
    }

    render() {
        const { books } = this.props;
        const booksByBookshelf = this.getBooksByBookshelf(books);

        return (
            <div className="list-books-content">
                {PERMENANT_BOOKSHELVES.map(bookshelf => (
                    <Bookshelf
                        key={bookshelf}
                        name={bookshelf}
                        books={booksByBookshelf[bookshelf] || []}
                    />
                ))}
            </div>
        );
    }
}

export default Bookshelves;
