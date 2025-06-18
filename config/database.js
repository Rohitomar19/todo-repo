// database.js file ka kaam hai connection ensure karna between databse and application


const mongoose = require("mongoose");

// is line se jo bhi hmne environment ke andr define kiya hoga vo sara ka sara process ke andr load ho jayega
require("dotenv").config();

const dbconnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser:true,
        UseUnifiedTopology: true,
    })
    .then( () => console.log("DB ka connection successful"))
    .catch( (error) => {
        console.log("Issue in DB connection");
        console.error(error.message);

        // iska kya matlab hai?
        process.exit(1);
    });
}

// ye module ko export krne ka tarika hai
module.exports = dbconnect;