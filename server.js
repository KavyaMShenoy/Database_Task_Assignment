const connectDB = require("./config/db");

const books = require("./model/bookModel");

const booksData = [
    {
        title: "Book1",
        author: "Author1",
        price: 35,
        stock: 1000
    },
    {
        title: "Book2",
        author: "Author2",
        price: 10,
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
        price: 15,
        stock: 300
    },
    {
        title: "Book5",
        author: "Author5",
        price: 45,
        stock: 90
    }
]

// Inserting multiple book records into the books collection.
books.insertMany(booksData).then((insertedBooks) => {

    if (insertedBooks.length === 0) {
        console.log("No Books inserted");
    } else {
        console.log("Inserted books successfully. Inserted Books : ", insertedBooks);
    }

    // Retrieving all documents from the books collection.
    return books.find();

}).then((booksFound) => {

    if (booksFound.length === 0) {
        console.log("No books found.");
    } else {
        console.log("All books : ", booksFound);
    }

    // Finding all books written by a specific author in the books collection.
    return books.find({ author: "Author3" });

}).then((booksFoundByAuthor) => {

    if (booksFoundByAuthor.length === 0) {
        console.log("No Book found written by given author.");
    } else {
        console.log("Books written by given author : ", booksFoundByAuthor);
    }

    // Updating the price and stock for a specific book in the books collection.
    const bookId = "67bac6d12780c690f6c1bdcc";
    return books.findByIdAndUpdate(bookId, { $set: { price: 25, stock: 500 } }, { new: true });

}).then((updatedBook) => {

    if (!updatedBook) {
        console.log("Book not found to update.");
    } else {
        console.log("Updated book successfully. Updated Book : ", updatedBook);
    }

    // Deleting a book by its title from the books collection.
    return books.deleteOne({ title: "Book2" });

}).then((deletedBook) => {

    if (deletedBook.deletedCount === 0) {
        console.log("Book not found to delete.");
    } else {
        console.log("Book deleted successfully.");
    }

    // Finding books priced between $10 and $20 in the books collection.
    return books.find({ price: { $gte: 10, $lte: 20 } });

}).then((booksFoundByPriceRange) => {

    if (booksFoundByPriceRange.length === 0) {
        console.log("No books found in the given price range of $10 and $20.");
    } else {
        console.log("Books found successfully in the given price range of $10 and $20. Books Found : ", booksFoundByPriceRange);
    }

    // Counting the total number of books in the books collection.
    return books.countDocuments();

}).then((booksCount) => {

    console.log("Total number of books : ", booksCount);

    // Sorting all books by price in ascending order.
    return books.find().sort({ price: 1 });

}).then((booksSorted) => {

    if (booksSorted.length === 0) {
        console.log("No books available to sort.");
    } else {
        console.log("Books sorted successfully. Sorted Books : ", booksSorted);
    }

}).catch((error) => {
    console.log("An error occured.", error.message);
})

connectDB();