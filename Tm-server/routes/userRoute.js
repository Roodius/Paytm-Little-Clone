const express = require('express')
const router = express.Router();
const UserDb = require('../Database/db')
require('dotenv').config();
const secret = process.env.jwt_secret 
const jwt = require('jsonwebtoken')
const z = require("zod")
const middleware = require("../middlewares/user");
const usermiddleware = require('../middlewares/user');
const regex = require('regex')

// input schema
const InputSchema = z.object({
    username:z.string().max(10),
    password:z.string().max(10),
    firstName:z.string(),
    lastName:z.string()
})

// sing up new user
router.post('/signup',async (req,res) => {
    const username = req.body.username;
    const password = req.body.username;
    const {success} = InputSchema.parse({username, password})
    if (!success) {
        return res.status(201).json({"msg":"set valid Usename and password"})
        
    } 

    const user = UserDb.findOne({
        username:username
    })

    if(user._id){
        return res.status(200).json({msg:"Your Already Exists !"})
    }
    // const hashedPass = 

    const newuser = await UserDb.create({
        username,
        password
    })  
        const token = jwt.sign({username}, secret)
        return res.status(200).json({
            "message":"User created Succesfully",
            "token": token
        })
})

router.post('/signUp',middleware,async (req,res) => {
    const username = req.headers.username;

    const Exist = await UserDb.findOne({
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

    await UserDb.updateOne({
        password:password,
        firstName:firstName,
        lastName:lastName
    })  

    res.status(200).json({
        msg:"updated Succesfully"
    })
})

// get user  info for pay using name instence
router.get('/getUserInfo',middleware, async (req,res) => {
    const filter = req.query.filter || "";

    const  users = UserDb.find({
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