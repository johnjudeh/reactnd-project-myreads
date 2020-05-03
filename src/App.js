import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import { Route } from 'react-router-dom';
import BookLibrary from './BookLibrary';
import BookSearch from './BookSearch';
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
            // Creates a copy of the book object before changing it's contents
            const updatedBook = {...book};
            updatedBook.shelf = shelf;

            return {
                books: [...unchangedBooks, updatedBook]
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
        this._updateBooksInState(book, shelf);
        BooksAPI.update(book, shelf);
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
            <div className="app">
                <Route exact path='/' render={this.renderBookLibrary} />
                <Route path='/search' render={this.renderBookSearch} />
            </div>
        );
    }
}

export default BooksApp;
