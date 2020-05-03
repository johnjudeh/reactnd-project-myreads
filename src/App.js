import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import { Route } from 'react-router-dom';
import BookLibrary from './BookLibrary';
import BookSearch from './BookSearch';
import { BOOKSHELF_VAL_NONE } from './constants';
import './App.css';

class BooksApp extends Component {
    state = {
        books: []
    }

    constructor(props) {
        super(props);
        this.updateBookshelf = this.updateBookshelf.bind(this);
        this.renderBookLibrary = this.renderBookLibrary.bind(this);
        this.renderBookSearch = this.renderBookSearch.bind(this);
    }

    _updateBooksInState(book, shelf) {
        // Updates the books in the component's state. Used to avoid
        // waiting for an API response to update the UI
        this.setState(currentState => {
            const unchangedBooks = currentState.books.filter(
                b => b.id !== book.id
            );
            const books = [...unchangedBooks];

            // We only need to keep books that are on a bookshelf
            if (shelf !== BOOKSHELF_VAL_NONE) {
                // Creates a copy of the book object before changing it's contents
                const updatedBook = {...book};
                updatedBook.shelf = shelf;
                books.push(updatedBook);
            }

            return {
                books: books,
            }
        })
    }

    componentDidMount() {
        BooksAPI.getAll()
            .then(books => this.setState({
                books: books
            }));
    }

    updateBookshelf(book, shelf) {
        // Updates the bookshelf in the UI before making an API request.
        // In the event of an error, the change is reversed
        this._updateBooksInState(book, shelf);
        BooksAPI.update(book, shelf)
            .catch(err => {
                this._updateBooksInState(book, book.shelf);
            });
    }

    renderBookLibrary() {
        const { books } = this.state;
        return <BookLibrary books={books} updateBookshelf={this.updateBookshelf} />;
    }

    renderBookSearch() {
        const { books } = this.state;
        return <BookSearch books={books} updateBookshelf={this.updateBookshelf} />;
    }

    render() {
        return (
            <div className='app'>
                <Route exact path='/' render={this.renderBookLibrary} />
                <Route path='/search' render={this.renderBookSearch} />
            </div>
        );
    }
}

export default BooksApp;
