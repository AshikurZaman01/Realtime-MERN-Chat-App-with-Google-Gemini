const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const morgan = require('morgan');
const connectDB = require('./ConnDB/DB');


app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))
connectDB();


app.get('/', (req, res) => {
    res.send('Hello World!')
})

module.exports = app;