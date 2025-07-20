const express = require('express');
require('dotenv').config();
const PORT = process.env.port;
const app = express();
const userRoutes = require("./routes/userRoute")

app.use('/user', userRoutes);


app.listen(PORT, () => console.log(`server Started on port ${PORT}`))