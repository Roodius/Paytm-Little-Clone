const mongoose = require('mongoose')
require('dotenv').config();
const DB_LINK = process.env.dbLink
console.log(DB_LINK)
// mongoose.connect()