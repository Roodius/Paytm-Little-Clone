const mongoose = require('mongoose');
require('dotenv').config();
const DB_LINK = process.env.dbLink
console.log(DB_LINK)
const {Schema} = mongoose;


const connectToMongo = async () => {
    try{
    await mongoose.connect("mongodb+srv://osmansaifi30:VI5Xirc5TtXJTEl4@cluster0.tze6j.mongodb.net/paytm-transaction");
    console.log("connected To DB")
    }catch(error){
        console.log("Error in Connecting To Mongo" ,error.message);
    }
}; 


 // user Schema For sign in and Sing up
const userSchema = new Schema({
    usename:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        minLength:3,
        maxLength:30
    },
    password:{
        type:String,
        required:true,
        minLength:6
    },
    firstName:{
        type:String,
        required:true,
        maxLength:6
    },
    lastName:{
        type:String,
        required:true,
        maxLength:50
    }
})

const User = mongoose.model('User', userSchema);

module.exports = { 
    User   
};
