// We are going to use express in this file 
const express = require('express');
const app = express();

const productsRouter = require('./api/routes/products')

const morgan = require('morgan');

// app.use((req,res)=>{
//     res.status(200).json({
//         msg: "This is a simple GET Request"
//     })
// })
app.use(morgan("dev"))
app.use('/products', productsRouter)

module.exports = app

// Now to use this into server