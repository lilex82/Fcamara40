require('dotenv').config()
const PORT = process.env.PORT
const express = require('express');
const cors = require('cors');
const OfficeRouter = require('./routes/office.route')
const BookRouter =require('./routes/book.route')
const app = express();

app.use(cors());
app.use(express.json());

app.use('/offices', OfficeRouter);
app.use('/book', BookRouter);

app.use((err, req, res, next) => {
    console.error(`${req.method} ${req.baseUrl} - ${err.message}`);
    res.status(400).send({ error: err.message });
})

app.listen(PORT, () => console.log('Api Started!'));