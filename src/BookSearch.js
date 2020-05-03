import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import SearchInput from './SearchInput';
import SearchResults from './SearchResults';
import { PROPTYPE_SHAPE_BOOK, BOOKSHELF_VAL_NONE } from './constants';

class BookSearch extends Component {
    static propTypes = {
        books: PropTypes.arrayOf(PropTypes.shape(PROPTYPE_SHAPE_BOOK)).isRequired,
        updateBookshelf: PropTypes.func.isRequired,
    }

    state = {
        query: '',
        bookResults: []
    }

    constructor(props) {
        super(props);
        this.updateQuery = this.updateQuery.bind(this);
    }

    updateQuery(query) {
        const { books } = this.props;

        this.searchForBooks(query)
            .then(bookResults => {
                const enrichedBookResults = this.addShelfToBookResults(
                    bookResults,
                    books,
                );

                this.setState({
                    query: query,
                    bookResults: enrichedBookResults,
                });
            });
    }

    searchForBooks(query) {
        // Searches for books and returns an empty Array
        // for errors or invalid results
        return BooksAPI.search(query).catch(err => []);
    }

    addShelfToBookResults(bookResults, libraryBooks) {
        // Adds the shelf property to each book in bookResults.
        // Finds the appropriate shelf from libraryBooks
        return bookResults.map(book => {
            const matchedBooks = libraryBooks.filter(
                libraryBook => book.id === libraryBook.id
            );

            if (matchedBooks && matchedBooks.length === 1) {
                book.shelf = matchedBooks[0].shelf;
            } else {
                book.shelf = BOOKSHELF_VAL_NONE;
            }

            return book;
        });
    }

    render() {
        const { query, bookResults } = this.state;
        const { updateBookshelf } = this.props;

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/'>
                        <button className="close-search">Close</button>
                    </Link>
                    <SearchInput query={query} updateQuery={this.updateQuery} />
                </div>
                <SearchResults
                    bookResults={bookResults}
                    updateBookshelf={updateBookshelf}
                />
            </div>
        );
    }
}

export default BookSearch;
