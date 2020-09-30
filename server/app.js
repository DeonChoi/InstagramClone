require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose')
const PORT = 5000;
const {MONGOURI} = require('./keys')

const dbURI = process.env.DB_CONNECTION;

mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})