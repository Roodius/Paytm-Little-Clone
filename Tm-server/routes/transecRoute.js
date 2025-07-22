const express = require('express');
const { Account } = require('../Database/db');
const Accountrouter = express.Router();
const middleware = require('../middlewares/user')


// getting a balance 
Accountrouter.get('/balance' , middleware, async (req,res) => {
        const account  =  await Account.findOne({
            useId:req.userId
        })
        res.json({
            balance:account.balance
        })
})


// transfer money To another  account wali problem 

 





exports.module = {
    Accountrouter
}


