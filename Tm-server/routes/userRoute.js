const express = require('express')
const router = express.Router();
const {User, Account} = require('../Database/db');
require('dotenv').config();
const secret = process.env.JWT_SECRET 
const jwt = require('jsonwebtoken')
const z = require("zod")
const usermiddleware = require('../middlewares/user');
const bcrypt = require("bcryptjs")


// input schema
const InputSchema = z.object({
    username:z.string().min(5),
    password:z.string().min(6),
    firstName:z.string(),
    lastName:z.string()
})
// console.log('User:', typeof User, Object.keys(User));

    console.log("in user Route")
// sing up new user
router.post('/signup',async (req,res) => {
        console.log("waiting for Input");
    const username = req.body.username;
    const password = req.body.password;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;

    console.log("Recieved Input");

    // parsing the input using zod
     const result = InputSchema.safeParse({username, password,firstName,lastName})
    if (!result.success) {
        console.log("zod validation error",result.success.error);
        return res.status(400).json({msg:"set valid Usename and password"})
    } 
    console.log("before try catch")
    
        const user = await User.findOne({username})

    if(user){
        return res.status(409).json({msg:"Your Already Exists !"})
    }
        console.log("Before bcrypt");
    try{
        const hashedpassword = await bcrypt.hash(password, 10);

    const newuser = await User.create({
        username,
        password:hashedpassword,
        firstName,
        lastName
    })
    const userId = newuser._id;  
        // genrating a token giving back to him for sign in 
    const token = jwt.sign({userId}, secret)
    // on sign giving a random balance
    
    await Account.create({
        userId,
        balance: 1 + Math.floor(Math.random() * 10000)
    })
    return res.status(200).json({
        "message":"User created Succesfully",
        "token": token,
    })    
    }catch(error){
        console.log(error.message); 
        return res.status(500).json({ message: "Internal server error", error: error.message });
    }
    
})
        // sign uping  
router.post('/signin',usermiddleware,async (req,res) => {
    const username = req.headers.username;

    const Exist = await User.findOne({
        username
    })
    if(!Exist){
        res.status(404).json({msg:"User Not found"})
    }  else {
        res.status(200).json({Done:"Sign in Successfull"})
    }
})

const schemaforUpdataion = z.object({
    password:z.string(),
    firstName:z.string(),
    lastName:z.string(),
})

// put route for update info 
router.put('/updateInfo',usermiddleware, async (req,res) => {
    const password = req.body.password;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    
    const result = schemaforUpdataion.safeParse({password, firstName, lastName})

    if(!result.success){
       return res.status(400).json({message:"Error While parsing input"})
    } 

    try {
        await User.updateOne({_id:req.userId},{
        $set:{
            password:password,
            firstName:firstName,
            lastName:lastName
        }
    })
    return res.status(200).json({
        msg:"updated Succesfully"
    })  
    } catch(error){
        return res.status(500).json({ message: "Internal server error", error: err.message });
    }   
})

// get user  info for pay using name instence
router.get('/bulk',usermiddleware, async (req,res) => {
    const filter = req.query.filter || "";
    try{
        
    const  users = await User.find({
        $or:[
            {
                firstName:{
                    "$regex":filter
                }
            },
            {
                lastName:{
                    "$regex":filter
                }
            }
        ]
    })
    return res.status(200).json({
        user:users.map((user) => ({
            username:user.username,
            firstName:user.firstName,
            lastName:user.lastName,
            _id: user._id 
        }))
    })
    } catch(error){
          return res.status(500).json({
            message: "Internal Server Error",
            error: err.message
        });
    }
})  

module.exports = router