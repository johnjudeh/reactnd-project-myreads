import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PROPTYPE_SHAPE_BOOK_ALL_SHELVES, BOOKSHELF_LABELS } from './constants';
import defaultBookImage from './images/book-cover.jpg';

class Book extends Component {
    static propTypes = {
        book: PropTypes.shape(PROPTYPE_SHAPE_BOOK_ALL_SHELVES).isRequired,
        updateBookshelf: PropTypes.func.isRequired,
    }

    constructor(props) {
        super(props);
        this.bookshelfOptions = Object.keys(BOOKSHELF_LABELS);
        this.onBookshelfChange = this.onBookshelfChange.bind(this);
    }

    onBookshelfChange(e) {
        const { book, updateBookshelf } = this.props;
        updateBookshelf(book, e.target.value);
    }

    render() {
        const { book } = this.props;

        return (
            <div className='book'>
                <div className='book-top'>
                    <div
                        className='book-cover'
                        style={{
                            width: 128,
                            height: 193,
                            backgroundImage: `url(${
                                (book.imageLinks && book.imageLinks.smallThumbnail)
                                || defaultBookImage
                            })`
                        }}
                    >
                    </div>
                    <div className='book-shelf-changer'>
                        <select
                            value={book.shelf}
                            onChange={this.onBookshelfChange}
                        >
                            <option value='move' disabled>Move to...</option>
                            {this.bookshelfOptions.map(bookshelfOption => (
                                <option key={bookshelfOption} value={bookshelfOption}>
                                    {BOOKSHELF_LABELS[bookshelfOption]}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className='book-title'>{book.title}</div>
                <div className='book-authors'>
                    {(book.authors && book.authors.join(', ')) || 'Author unknown'}
                </div>
            </div>
        );
    }
}

export default Book;
