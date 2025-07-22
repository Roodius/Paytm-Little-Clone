const express = require('express')
const router = express.Router();
const {User} = require('../Database/db');
require('dotenv').config();
const secret = process.env.jwt_secret 
const jwt = require('jsonwebtoken')
const z = require("zod")
const middleware = require("../middlewares/user");
const usermiddleware = require('../middlewares/user');
const regex = require('regex');

// input schema
const InputSchema = z.object({
    username:z.string(),
    password:z.string(),
    firstName:z.string(),
    lastName:z.string()
})
// console.log('User:', typeof User, Object.keys(User));

// sing up new user
router.post('/signup',async (req,res) => {
    const username = req.body.username;
    const password = req.body.password;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const {success} = InputSchema.safeParse({username, password,firstName,lastName})
    if (!success) {
        return res.status(201).json({msg:"set valid Usename and password"})
        
    } 

    const user = await User.findOne({username})

    if(user){
        return res.status(200).json({msg:"Your Already Exists !"})
    }
    // const hashedPass = 

    const newuser = await User.create({
        username,
        password,
        firstName,
        lastName
    })  
        const token = jwt.sign({username}, secret)
        return res.status(200).json({
            "message":"User created Succesfully",
            "token": token
        })
})

router.post('/signUp',middleware,async (req,res) => {
    const username = req.headers.username;

    const Exist = await User.findOne({
        username
    })
    if(!username){
        res.status(404).json({msg:"User Not found"})
    }  else {
        res.status(200).json({Done:"Sign in Successfull"})
    }
})

// put route for update info 
router.put('/updateInfo',middleware, async (req,res) => {
    const password = req.headers.password;
    const firstName = req.headers.firstName;
    const lastName = req.headers.lastName;
    
    const {success} = InputSchema.safeParse({password, firstName, lastName})

    if(!success){
        res.status(404).json({message:"Error While Updating information"})
    } 

    await User.updateOne({_id:req.userID},{
        $set:{
            password:password,
        firstName:firstName,
        lastName:lastName
        }
    }, )  

    res.status(200).json({
        msg:"updated Succesfully"
    })
})

// get user  info for pay using name instence
router.get('/bulk',middleware, async (req,res) => {
    const filter = req.query.filter || "";

    const  users = User.find({
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
    res.status(200).json({
        user:users.map((user) => ({
            username:user.username,
            firstName:user.firstName,
            lastName:user.lastName,
            _id:user._id
        }))
    })
})  

module.exports = router