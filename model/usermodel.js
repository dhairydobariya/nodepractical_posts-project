let mongoose = require('mongoose')



let schema = mongoose.Schema({


    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type :String,
        required : true
    }
    
})


let userschema = mongoose.model('userdetail' , schema);

module.exports = userschema