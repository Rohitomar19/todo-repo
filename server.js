
// server instantiate 
const express = require("express");
const app = express();

// load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 3000;

// middleware to parse json request body
app.use(express.json());

// import routes from TODO API
const todoroutes = require("./routes/todos");

// mount or add the todo ASPI routes
app.use("/api/v2", todoroutes);

// connect to the database
 const dbconnect = require("./config/database");
 dbconnect();


// start the server
app.listen(PORT, () => {
    console.log(`server started successfully at ${PORT}`);
});


 // default route
 app.get("/", (req,res) => {
    res.send('<h1> This is homepage </h1>');
 });