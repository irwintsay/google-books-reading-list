const fetch           = require('node-fetch');
const key             = process.env.GOOGLE_BOOKS_API_KEY;
let GoogleBooks = {};

GoogleBooks.search = (query) => {
  let url = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${key}`;
  return fetch(url);
};

module.exports = GoogleBooks;