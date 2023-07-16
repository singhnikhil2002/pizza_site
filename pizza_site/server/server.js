const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/config')
const morgan = require('morgan')
require('colors')

//config dotenv
dotenv.config()

//connection mongodb
connectDB()

const app = express()

//middleware
app.use(express.json());
app.use(morgan("dev"));

//route
app.use('/api/pizzas',require('./routes/pizzaRoute'))
app.use('/api/users',require('./routes/userRoutes'))
app.use('/api/orders',require('./routes/orderRoute'))
app.get('/',(req,res) =>{
    res.send('<h1>Hello From Node Server</h1>')
})

const port = process.env.PORT || 8080
app.listen(port, () =>{
    console.log(`Server Running On ${process.env.NODE_ENV} mode on port on ${process.env.PORT}`.bgMagenta.white);
})
