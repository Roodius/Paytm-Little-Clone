const mongoose = require('mongoose');
const { object, string } = require('zod');
require('dotenv').config();
const DB_LINK = process.env.dbLink
console.log(DB_LINK)
const {Schema} = mongoose;


const connectToMongo = async () => {
    try{
    await mongoose.connect(DB_LINK);
    console.log("connected To DB")
    }catch(error){
        console.log("Error in Connecting To Mongo" ,error.message);
    }
}; 
connectToMongo()

 // user Schema For sign in and Sing up
const userSchema = new Schema({
    username:{
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


const Account  = mongoose.model('Account',AccountSchema )
const User = mongoose.model('User', userSchema);



module.exports = { 
    User,
    Account,   
};
