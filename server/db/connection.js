const mongoose = require("mongoose");
const DB = "mongodb+srv://parthamk:parthamk@cluster0.lt12ric.mongodb.net/mernstack?retryWrites=true&w=majority"

mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> console.log("MongoDB connected Successfully")).catch((error)=>console.log(error.message))