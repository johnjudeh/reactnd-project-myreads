import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from './PageHeader';
import Bookshelves from './Bookshelves';

class BookLibrary extends Component {
    render() {
        const { books } = this.props;

        return (
            <div className="list-books">
                <PageHeader title='MyReads' />
                <Bookshelves books={books} />
                <div className="open-search">
                    <Link to='/search'>
                        <button>Add a book</button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default BookLibrary;
