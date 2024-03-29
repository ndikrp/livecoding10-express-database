const express = require('express');
const morgan = require('morgan');

const app = express();

const customerRouter = require('./routes/customerRoutes')

app.use(express.json());

app.use(morgan('dev'))

app.use((req, res, next) => {
    console.log('This is own made middleware')
    next()
})

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString()
    next()
})

app.use("/api/v1/customers/", customerRouter)

module.exports = app
