const express = require('express')
const router = express.Router();
const UserDb = require('../Database/db')
require('dotenv').config();
const secret = process.env.jwt_secret 
const jwt = require('jsonwebtoken')
const z = require("zod")
const middleware = require("../middlewares/user");
const usermiddleware = require('../middlewares/user');
const InputSchema = z.object({
    username:z.string().max(10),
    password:z.string().max(10)
})


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


router.post('/signin',middleware, async (req,res) => {
    const username = req.headers.username;
    const password = req.headers.password;

    const ExistenceCheck = await UserDb.findOne({
        username,
        password
    })

    if(!ExistenceCheck){
        return res.status(404).json({msg:"User Not found"})
    } else {
        return res.status(200).json({msg:"Sign in Successfull"})
    }

})

module.exports = router