# React Nanodegree Project - MyReads

## Description

Ever struggled to organise your books and keep track of what you're currently reading,
want to read and have already read? Well look no further! This is an application that
helps you do just that. You can keep track of your books in 3 different bookshelves:

 1. Currently Reading
 2. Want to Read
 3. Read

There's also a search function that lets you browse for new books and add them to your
bookshelves. Enjoy!


## The Task

The project was forked from the Udacity's [Project Starter repo](https://github.com/udacity/reactnd-project-myreads-starter), which contains a static
version of the application. My job was to convert it into a interactive application
using best practices in React.


## Installation

This project was stated using [Create React App](https://github.com/facebookincubator/create-react-app), making it very easy to set up
and run locally. You simply need to clone the project and run two commands. Let React do
the rest.

```bash
npm install
npm start
```

## Backend Server

To simplify the development process, Udacity has provided a backend server as well as the
client file [`BooksAPI.js`](src/BooksAPI.js) that contains the functions needed to 
interact with the server. I adjusted it slightly to add error handling.


## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.


## Author

John Judeh
