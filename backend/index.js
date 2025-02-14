const express = require('express');
const app=express()
const mongoose=require("mongoose")
const router=require('./router')
const cors=require("cors")
app.use(cors())
app.use(express.json());

app.use('/api',router);
const mongo = "mongodb://127.0.0.1:27017/leo";
mongoose.connect(mongo).then(()=>{
    console.log("data is connected ")
}).catch(()=>{
    console.log("data is not connected ")
});



app.listen(599,()=>{
    console.log("server connect ")
})