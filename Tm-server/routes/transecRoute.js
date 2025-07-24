const express = require('express');
const { Account } = require('../Database/db');
const router = express.Router();
const middleware = require('../middlewares/user');
const { default: mongoose } = require('mongoose');


// getting a balance 
router.get('/balance' , middleware, async (req,res) => {
        const account  =  await Account.findOne({
            useId:req.userId
        })
        res.json({
            balance:account.balance
        })
})


// transfer money To another  account wali problem 
router.post('/transfer',middleware,async (req,res) => {
    const session = await mongoose.startSession();

    session.startTransaction();
    const {amount, to} = req.body;

    //Fetch the accounts within the transactions
    const account = await Account.findOne({userId:req.userId}.session(session));

    if(!account || account.balance < amount){
        await session.abortTransaction();
        return res.status(400).json({
            message:"invalid account"
        })
    }

    const toAccount = await Account.findOne({userId:to}).session(session);

    if(!toAccount){
        await session.abortTransaction();
        res.json({
            message:"Invalid Account"
        })
    }

    // Performs the transfer
    await Account.updateOne({userId:req.userId}, {$inc:{balance :-amount}}).session(session)
    await Account.updateOne({userId:to}, {$inc:{balance : amount}}).session(session);

    // commit the transaction 
    await session.commitTransaction();
    res.json({
        message:"Transfer Suucessfull"
    });
})
 
module.exports =  router



