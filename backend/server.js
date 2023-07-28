const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./config/db');
const path = require('path')
// dot config
dotenv.config();

// MongoDB connection
connectDB();


const app = express();


// middlewares
app.use(express.json());

app.use(cors());

app.use(morgan('dev'));

// routes
// 1 test route
app.use('/api/v1/test', require("./routes/testRoutes"));
app.use('/api/v1/auth', require('./routes/authRoute.js'));
app.use('/api/v1/inventory', require('./routes/inventoryRoutes.js'));
app.use('/api/v1/analytics', require('./routes/analyticsRoute.js'));
app.use('/api/v1/admin', require('./routes/adminRoutes.js'));


// static folder
app.use(express.static(path.join(__dirname, './frontend/build')));

// static route
app.get('*', function(req, res){
    res.sendFile(path.join(__dirname, './frontend/build/index.html'))
})

const PORT = process.env.PORT || 8080;

app.listen(PORT,() => {
    console.log(`Server is running on port ${process.env.PORT}`.bgMagenta);
})

