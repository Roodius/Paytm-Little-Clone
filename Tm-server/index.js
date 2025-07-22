const express = require('express');
require('dotenv').config();
const PORT = process.env.port;
const app = express();
const userRoutes = require("./routes/userRoute")
const bosyParser = require("body-parser")
const cors = require("cors")
const Accountrouter = require('./routes/transecRoute')
app.use(cors());
app.use(bosyParser.json()
);
app.use('/user', userRoutes);   //userRouter
app.use('/account', Accountrouter) // Acount Router


app.listen(PORT, () => console.log(`server Started on port ${PORT}`))