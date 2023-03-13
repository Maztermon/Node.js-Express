const express = require('express');
const chalk = require('chalk')
const debug = require('debug')('app');
const morgan = require('morgan');
const req = require('express/lib/request');
const res = require('express/lib/response');
const app = express();
const PORT = process.env.PORT || 4000;
const path = require('path');


app.use(morgan('combined'));
app.use(express.static(path.join(__dirname,"/Public/")));

app.set("views","./src/views");
app.set("view engine", "ejs");


app.get("/", (req,res) =>{

    res.render('index',{username: 'Diamondd na', customer:["a101","a102","a103"]} );

})

app.listen(PORT, ()=>{
    console.log("Listening on PORT : " + chalk.blue(PORT));
})
