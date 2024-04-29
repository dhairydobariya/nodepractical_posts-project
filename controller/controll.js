let userschema = require('../model/usermodel')
let postschema = require('../model/postsmodel')



let maindata 
let defaults = (req ,res ) => {
       res.render('index');
}

let login = (req ,res) => {
    res.render('login');
}

let signup = (req ,res) => {
    res.render('signup');
}


let userdata = async (req ,res) => {


    let {name , email , password ,confpass} = req.body
    let userdata =await userschema.findOne({"name" : name})

    let data = new userschema({
        name ,
        email,
        password
    })

    if(password == confpass && !userdata){
        data.save()
        console.log("data save successfully");

        res.redirect('/login');
    }else{
        console.log("your password connot match");
        res.send("this username is allready takend by other person")
    }


}


let logindata = async (req ,res) => {
    
    let {name  , password} = req.body

    let userdata = await userschema.findOne({"name" : name});


    console.log("its userdata " , userdata);
    if(userdata.password == password){
        maindata = userdata
        console.log("maindata" , maindata);
        
        res.redirect('/blogpage')

    }else{
        console.log("your name and password is incorrect");
    }

}

let blogpage = (req , res )=> {


    
    if(maindata){
        res.render('blogpage')
    }else{
        res.send("login credential is required");
    }
}


let createposts = (req ,res) => {
    res.render('createposts' , {maindata})
}

let readposts =async (req , res) => {

    

   if(maindata){
    let postsdata = await postschema.find()
    console.log(postsdata);

   data =  postsdata.filter((ele) => {
        return ele.userid == maindata.id
   })
        res.render('readposts')
   }
   else{
    res.send("login is required")
   }

    // res.render('readposts')
}


let postsdata = (req ,res) => {
    let {title , body , status , latitude , longitude , id , name} = req.body


    let postdata = new postschema({
        title ,
        body ,
        status ,
        createdby : name,
        geo : [latitude , longitude],
        userid : id
    })


    if(maindata){
        postdata.save()
        res.redirect('/createposts')
    }else{
        res.send('login creaditional require')
    }

}

let editposts =async (req , res) => {
    let {id} = req.params
    let data = await postschema.findById(id)

    res.render('editpage' , {maindata , data })
}


let editdata =async (req ,res) =>{

    let {title , body , status , latitude , longitude , id , name , userid} = req.body

    let postdata =await postschema.findByIdAndUpdate(id,{title , body , status , geo :[latitude , longitude] , userid , createdby : name })
    console.log("its success fully upgragded");

    res.redirect('/readposts')

}



let deleteposts =async (req ,res) => {
    let {id} = req.params

    let deletedata =await postschema.findByIdAndDelete(id)
    console.log("posts success fully deleted");
    res.redirect('/readposts')
}

module.exports = {
    defaults,
    login,
    signup,
    userdata,
    logindata,
    blogpage,
    createposts,
    readposts,
    postsdata,
    editposts,
    editdata,
    deleteposts,
}