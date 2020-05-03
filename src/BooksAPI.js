
const api = "https://reactnd-books-api.udacity.com";


// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token;
if (!token)
    token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
    'Accept': 'application/json',
    'Authorization': token
};

const statusCheck = (res) => {
    if (res.status !== 200) {
        throw res.text();
    }
    return res;
}

const searchErrorCheck = (resJSON) => {
    if (!resJSON.books || resJSON.books.error) {
        throw resJSON;
    }
    return resJSON;
}

export const get = (bookId) =>
    fetch(`${api}/books/${bookId}`, { headers })
        .then(statusCheck)
        .then(res => res.json())
        .then(data => data.book);

export const getAll = () =>
    fetch(`${api}/books`, { headers })
        .then(statusCheck)
        .then(res => res.json())
        .then(data => data.books);

export const update = (book, shelf) =>
    fetch(`${api}/books/${book.id}`, {
        method: 'PUT',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ shelf })
    }).then(statusCheck)
        .then(res => res.json());

export const search = (query) =>
    fetch(`${api}/search`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query })
    }).then(statusCheck)
        .then(res => res.json())
        .then(searchErrorCheck)
        .then(data => data.books);
