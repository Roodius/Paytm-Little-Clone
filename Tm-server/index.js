const express = require('express');
require('dotenv').config();
const PORT = process.env.port;
const app = express();
const userRoutes = require("./routes/userRoute")
const Accountrouter = require('./routes/transecRoute');
const bosyParser = require("body-parser")
const cors = require("cors")


app.use(cors());
app.use(bosyParser.json());


app.use('/user', userRoutes);
app.use('/account', Accountrouter) // Acount Router


app.listen(PORT, () => console.log(`server Started on port ${PORT}`))