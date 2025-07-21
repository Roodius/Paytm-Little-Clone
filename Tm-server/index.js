const express = require('express');
require('dotenv').config();
const PORT = process.env.port;
const app = express();
const userRoutes = require("./routes/userRoute")
const bosyParser = require("body-parser")
const cors = require("cors")

app.use(cors());
app.use(bosyParser.json()
);
app.use('/user', userRoutes);


app.listen(PORT, () => console.log(`server Started on port ${PORT}`))