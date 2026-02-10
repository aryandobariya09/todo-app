const express = require("express");
const path = require("path");
const bodyparser =require("body-parser");
const connectmongodb =require("./init/mongodb");

const todoroute = require("./routes/todo")

const dotenv=require("dotenv")

//enviroment veriable

dotenv.config();

console.log(process.env.PORT)

// init app
const app = express();

// mongodb connection

connectmongodb();



// view engine
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
 app.use (bodyparser.urlencoded({extended:true}));
 app.use("/",todoroute)


module.exports=app