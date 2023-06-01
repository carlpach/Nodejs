const mongoose = require('mongoose');

// const DB_URL = 'mongodb://localhost:27017/pepito';
const DB_URL = process.env.DB_URL;

const connect = async() => {
    try {
        const db = await mongoose.connect(DB_URL);
        const {name, host} = db.connection;

        console.log(`Connected to ${name} DB in host: ${host}`);
    } catch (error) {
        console.log(`Error connecting to Databases: ${error}`);
    }
}

module.exports = {connect}