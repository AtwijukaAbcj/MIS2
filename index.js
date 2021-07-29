//const car =require('./car')
//console.log(car)
//console.log("Junior")
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use (express.urlencoded({extended:false}))
app.set('view engine', 'pug')
app.set('views','./views')
// app.get('/home',(req,res)=>{
//     res.send('welcome to the home page')
// })
app.get('/home',(req,res)=>{
    res.render('home')
});
app.get('/page',(req,res)=>{
    res.send('This is the about page')
})

app.get('/page2',(req,res)=>{
    res.render('page2')
})

app.post('/register',(req,res)=>{
    // console.log(req.body)
    res.json(req.body)
})

app.listen(3000, () =>{console.log('App is listening')});