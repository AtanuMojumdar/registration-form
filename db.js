require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async()=>{
    try{
        const connection = await mongoose.connect(`mongodb+srv://atanu192003mojumdar:${process.env.PASSWORD}@cluster0.uoncauh.mongodb.net/?retryWrites=true&w=majority`);
        console.log("MonoDB connected!");
    }
    catch(err){
        console.log(err);
    }
}

module.exports = connectDB;
