const express = require('express');
const dotenv = require('dotenv');
//const logger = require('./middleware/logger');
const morgan = require('morgan');
const connectDB = require('./config/db');
const colors = require('colors')


// Load env vars
dotenv.config({ path: './config/config.env'});

connectDB();

// Router files
const bootcamps = require('./routes/bootcamps');

const app = express();

//Body parser
app.use(express.json());

//DEV loggin middleware
//app.use(logger);
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

// Mount routers
app.use('/api/v1/bootcamps',bootcamps);

const PORT = process.env.PORT || 5000;

const  server = app.listen(
    PORT, 
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
    );

process.on('unhandledRejection',(err, promise)=>{
    console.log(`Error: ${err.message}`.red);
    // close server & exit process
    server.close(()=> process.exit(1));
})
