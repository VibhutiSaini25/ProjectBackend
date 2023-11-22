

const mongoose = require("mongoose");
const express = require("express");

const inventoryRoute = require("./controller/inventoryRoute");
const bodyParser=require("body-parser");
const cors=require("cors");


//MongoDB Altas Connection
mongoose.set("strictQuery",true);
mongoose.connect("mongodb+srv://VibhutiSaini:250803@cluster0.qhyoser.mongodb.net/MyCompany");
var db = mongoose.connection;
db.on("open",()=>console.log("Connected to DB"));
db.on("error",()=>console.log("Error occurred"));


//Creating a app
const app = express();



//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.use("/inventoryRoute",inventoryRoute);


//Listening to a port number
app.listen(4000,()=>{
    console.log("Server started at 4000");
})
