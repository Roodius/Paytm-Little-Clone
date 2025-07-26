const express = require('express');
require('dotenv').config();
const port = process.env.PORT;
const app = express();
const userRoutes = require("./routes/userRoute")
const Accountrouter = require('./routes/transecRoute');
const cors = require("cors")


app.use(cors());
app.use(express.json());


app.use('/user', userRoutes);
app.use('/account', Accountrouter) // Acount Router


app.listen(port, () => console.log(`server Started on port ${port}`))