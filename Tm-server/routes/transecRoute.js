const express = require('express');
const { Account } = require('../Database/db');
const Accountrouter = express.Router();
const middleware = require('../middlewares/user')


Accountrouter.get('/balance' , middleware, async (req,res) => {
        const account  =   Account.findOne({
            
        })
})




exports.module = {
    Accountrouter
}


