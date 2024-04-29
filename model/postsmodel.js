let mongoose = require('mongoose')



let postschema = mongoose.Schema({


    title : {
        type : String,
        required : true
    },
    body : {
        type : String,
        required : true
    },
    createdby : {
        type :String,
        required : true
    },
    status : {
        type : String,
        required : true
    },
    geo : {
        type : Array,
        required : true,
    },
    userid : {
        type : String,
        required : true
    }
    
})


let postsschema = mongoose.model('postsdetail' , postschema);

module.exports = postsschema