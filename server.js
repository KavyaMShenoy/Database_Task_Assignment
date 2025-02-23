const connectDB = require("./config/db");

const books = require("./model/bookModel");

const booksData = [
    {
        title: "Book1",
        author: "Author1",
        price: 15,
        stock: 1000
    },
    {
        title: "Book2",
        author: "Author2",
        price: 100,
        stock: 100
    },
    {
        title: "Book3",
        author: "Author3",
        price: 13,
        stock: 200
    },
    {
        title: "Book4",
        author: "Author4",
        price: 85,
        stock: 500
    },
    {
        title: "Book5",
        author: "Author5",
        price: 35,
        stock: 90
    }
]

// Inserting multiple book records into the books collection.
books.insertMany(booksData).then((insertedBooks) => {

    console.log("Inserted books successfully.", insertedBooks);

    // Retrieving all documents from the books collection.
    return books.find();

}).then((booksFound) => {

    console.log("All Books : ", booksFound);

    // Finding all books written by a specific author in the books collection.
    return books.find({ author: "Author3" });

}).then((booksFoundByAuthor) => {

    console.log("Books written by given author : ", booksFoundByAuthor);

    // Updating the price and stock for a specific book in the books collection.
    return books.findOneAndUpdate({ title: "Book1" }, { $set: { price: "25", stock: "500" } });

}).then(() => {

    console.log("Updated book successfully.");

    // Deleting a book by its title from the books collection.
    return books.deleteOne({ title: "Book2" });

}).then(() => {

    console.log("Book deleted successfully.");

    // Finding books priced between $10 and $20 in the books collection.
    return books.find({ price: { $gte: "10", $lte: "20" } });

}).then((booksFoundByPriceRange) => {

    console.log("Books found successfully in the given price range of $10 and $20.", booksFoundByPriceRange);

    // Counting the total number of books in the books collection.
    return books.find().countDocuments();

}).then((booksCount) => {

    console.log("Total number of books : ", booksCount);

    // Sorting all books by price in ascending order.
    return books.find().sort({ price: 1 });

}).then((booksSorted) => {

    console.log("Books sorted successfully.", booksSorted);

}).catch((error) => {
    console.log("An error occured.", error);
})

connectDB();