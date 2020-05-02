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
        this.renderBookLibrary = this.renderBookLibrary.bind(this);
        this.renderBookSearch = this.renderBookSearch.bind(this);
    }

    componentDidMount() {
        BooksAPI.getAll()
            .then(books => this.setState({
                books: books
            }));
    }

    renderBookLibrary() {
        const { books } = this.state;
        return <BookLibrary books={books} />;
    }

    renderBookSearch() {
        const { books } = this.state;
        return <BookSearch books={books} />;
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
