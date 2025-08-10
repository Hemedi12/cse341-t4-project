// Let's us this connection from here in the server.js file
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

const connectDb = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://charles:127HmD@cluster0.9cxt5na.mongodb.net/project1/");

        console.log('Connected to DB', connect.connection.host, connect.connection.name);
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1);
    }
};

module.exports = connectDb;