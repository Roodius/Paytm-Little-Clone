const express = require('express');
require('dotenv').config();
const PORT = process.env.port;
const app = express();



app.listen(PORT, () => console.log(`server Started on port ${PORT}`))