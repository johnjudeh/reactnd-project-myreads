import React, { Component } from 'react';
import { BOOKSHELF_LABELS } from './constants';

class Book extends Component {
    constructor(props) {
        super(props);
        this.bookshelfValues = Object.keys(BOOKSHELF_LABELS);
    }

    render() {
        const { book } = this.props;

        return (
            <div className="book">
                <div className="book-top">
                    <div
                        className="book-cover"
                        style={{
                            width: 128,
                            height: 193,
                            backgroundImage: `url(${book.imageLinks.smallThumbnail})`
                        }}
                    >
                    </div>
                    <div className="book-shelf-changer">
                        <select>
                            <option value="move" disabled>Move to...</option>
                            {this.bookshelfValues.map(bookshelfValue => (
                                <option key={bookshelfValue} value={bookshelfValue}>
                                    {BOOKSHELF_LABELS[bookshelfValue]}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors[0]}</div>
            </div>
        );
    }
}

export default Book;
