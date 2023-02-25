require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./configs/db.config');


const app = express();
const PORT = process.env.PORT || 8000;

// middlewares
app.use(express.json());
app.use(cors());
app.use('/', (req, _, next) => {
    console.log(`${req.method} ${req.originalUrl}`);
    next();
});

// routes
app.use()

app.listen(PORT, () => {
    connectDB();
    console.log(`listening on port ${PORT}`);
});
