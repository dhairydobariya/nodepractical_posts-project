const mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/database').then(() => {
    console.log("database connection succesfully");
}).catch((err) => {
    console.log("database err are show");
})
