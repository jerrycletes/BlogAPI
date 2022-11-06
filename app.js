// Require the necessary modules
const express = require('express');
const db = require('./db');
require("dotenv").config()

const PORT = process.env.PORT
const app = express();  

//Require the bodyParser module
app.use(express.json());

//Connect to MongoDB
db.connectToMongoDB();

app.get('/', (req, res)=>{
    res.send('./index.html');
});

//Define the Routes
const usersRoute = require('./routes/users');
const articleRoute = require('./routes/articles');
const authorRoute = require('./routes/authors')

app.use('/users', usersRoute);
app.use('/articles', articleRoute);
app.use('/authors', authorRoute)

//Start the server
app.listen(PORT, () =>{
    console.log(`Server is running on Port: https://localhost: ${PORT}`);
})