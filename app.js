const express = require('express');
const chalk = require('chalk')
const debug = require('debug')('app');
const morgan = require('morgan');
const req = require('express/lib/request');
const res = require('express/lib/response');
const app = express();
const port = 3000;

app.use(morgan('combined'));

app.get("/", (req,res) =>{

    res.send('Hello Diamond Test update');

})

app.listen(port, ()=>{
    console.log("Listening on port : " + chalk.blue(port));
})
