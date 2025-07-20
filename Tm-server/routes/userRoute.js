const express = require('express')
const router = express.Router();
const UserDb = require('../Database/db')
require('dotenv').config();
const secret = process.env.jwt_secret 
const jwt = require('jsonwebtoken')
const z = require("zod")

const InputSchema = z.object({
    username:z.string().max(10),
    password:z.string().max(10)
})


router.post('/signup', (req,res) => {
    const username = req.body.username;
    const password = req.body.username;

    const parsedDetails = InputSchema.parse({username, password})
    if (parsedDetails.success) {
        try{
            UserDb.create({
            username,
            password
        })
        } catch(error){
            console.log(error)
            res.status(201).json({"msg":"set valid Usename and password"})
        }
    } else {
        return res.status(400).json("Error")
    }
})


router.post('/signin', async (req,res) => {
    const username = req.headers.username;
    const password = req.headers.password;

    const ExistenceCheck = await UserDb.findOne({
        username,
        password
    })

    if(!ExistenceCheck){
        return res.status(404).json({msg:"User Not found"})
    } else {
        const token = jwt.sign({username}, secret)
        return res.status(200).json({"Yourtoken":token}) 
    }

})

module.exports = router