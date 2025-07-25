const mongoose = require('mongoose');
const { object, string } = require('zod');
require('dotenv').config();
const dbLink = process.env.DB_LINK
const {Schema} = mongoose;


const connectToMongo = async () => {
    try{
    await mongoose.connect(dbLink);
    console.log("connected To DB")
    }catch(error){
        console.log("Error in Connecting To Mongo" ,error.message);
    }
}; 
connectToMongo();

 // user Schema For sign in and Sing up
const userSchema = new Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    }
})

// account Schema
const AccountSchema = new Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    },
    balance:{
        type:Number,
        required:true
    }
})


const User = mongoose.model('User', userSchema);
const Account  = mongoose.model('Account',AccountSchema )



module.exports = { 
    User,
    Account,   
};
