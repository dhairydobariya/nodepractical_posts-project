let express = require('express');
let app = express();
let port = 3008;

let mongoose = require('./db/db')
app.set('view engine' , 'ejs' )

let route = require('./route/route')
let bodyparser = require('body-parser');
const { log } = require('console');


app.use(bodyparser.urlencoded({extended : true}));


app.use('/' , route)



app.listen(port , (req ,res) => {
    console.log(`port successfully run on port ${port}`);
})
