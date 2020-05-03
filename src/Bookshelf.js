import React from 'react';
import Book from './Book';
import { BOOKSHELF_LABELS } from './constants';

function Bookshelf(props) {
    const { name, books } = props;

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{BOOKSHELF_LABELS[name]}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.map(book => (
                        <li key={book.id}>
                            <Book book={book} />
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
}

export default Bookshelf;
