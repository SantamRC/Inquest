const express=require('express');
const Router=express.Router();
const app=express();

app.get('/',(req,res)=>{
    res.send('Connected to homepage');
})

app.get('/login',(req,res)=>{
    res.send('Login Page');
})
app.get('/rules',(req,res)=>{
    res.send('Rules Page');
})
app.get('/ieee',(req,res)=>{
    res.send('IEEE page');
})
app.get('/leaderboard',(req,res)=>{
    res.send('LEaderboard');
})

app.listen(3000);