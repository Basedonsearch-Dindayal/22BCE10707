const express = require('express')
const app = express()
const ejs = require("ejs")
const path = require('path');
const viewPath = path.join(__dirname, 'app/views');


app.set('view engine', 'express')
app.set('views', viewPath);
 

//get userlist
app.get('/users', function (req, res) {
  userlist = res.body
  res.render("userlist.ejs",userlist)
})

//get userpost
app.get('/users/:userid/posts', function (req, res) {
  posts = res.body
  res.render("showpost.ejs",posts)
})

//get comments
app.get('/posts/:postid/comments', function (req, res) {
  comments = res.body
  res.render("usercomment.ejs",comments)
})


//server setup
const port= "http://20.244.56.144/test/"
app.listen(3000,()=>{
    console.log("app is listing on port 3000")
})
