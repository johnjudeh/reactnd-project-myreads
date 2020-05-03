import React, { Component } from 'react';
import Bookshelf from './Bookshelf';

class Bookshelves extends Component {
    getBooksByBookshelf(books) {
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
        const bookshelves = Object.keys(booksByBookshelf);

        return (
            <div className="list-books-content">
                {bookshelves.map(bookshelf => (
                    <Bookshelf
                        key={bookshelf}
                        name={bookshelf}
                        books={booksByBookshelf[bookshelf]}
                    />
                ))}
            </div>
        );
    }
}

export default Bookshelves;
