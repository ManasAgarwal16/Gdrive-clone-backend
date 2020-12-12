require('dotenv').config();
const mongoose = require('mongoose');


function connectDB()
{
    // // DB Connection
    mongoose.connect(process.env.MONGO_CONNECTION_URL,{
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true
    }).then(() => {
        console.log("connection is successful");
    }).catch((e) => {
        console.log("No connection");
    })   
}
module.exports = connectDB;