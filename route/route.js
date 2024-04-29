const controll = require('../controller/controll')


let express = require('express')
let route = express()


route.get('/' , controll.defaults)

route.get('/signup' , controll.signup)
route.post('/userdata' , controll.userdata)

route.get('/login' , controll.login)
route.post('/logindata' , controll.logindata)

route.get('/blogpage' , controll.blogpage)

route.get('/createposts' , controll.createposts)
route.post('/postsdata' , controll.postsdata)


route.get('/readposts' , controll.readposts)

route.get('/editposts/:id' ,controll.editposts )
route.post('/editdata' , controll.editdata)

route.get('/deleteposts/:id' , controll.deleteposts)


module.exports = route