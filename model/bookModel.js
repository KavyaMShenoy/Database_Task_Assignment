const { default: mongoose } = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    price: Number,
    stock: Number
})

// Collection named books
const books = mongoose.model('books', bookSchema);

module.exports = books;