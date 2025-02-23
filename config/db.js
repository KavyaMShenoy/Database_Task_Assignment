const { default: mongoose } = require('mongoose');

const connectDB = async () => {
    try {
        // Creating a MongoDB database called bookstore
        await mongoose.connect('mongodb://localhost:27017/bookstore');
        console.log("DB connected successfully.");
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = connectDB;