require("dotenv").config();
const express = require("express");
const app = express();
const port = 8003;
const mongoose = require("mongoose");
require("./db/connection");
const users =require("./models/userSchema")
const cors = require("cors");
const router = require("./routes/router");

app.use(cors());
app.use(express.json());

app.use(router);

app.listen(port, ()=>{
    console.log(`Server has started at port ${port}`);
})