import React, { Component } from 'react';
// import * as BooksAPI from './BooksAPI';
import { Route } from 'react-router-dom';
import BookLibrary from './BookLibrary';
import BookSearch from './BookSearch';
import './App.css';

class BooksApp extends Component {

    renderBookLibrary() {
        return <BookLibrary />;
    }

    renderBookSearch() {
        return <BookSearch />;
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
