const express = require('express');
require('dotenv').config();
const app =express();

app.get('/',(req,res)=>{
    res.send(" Hello,Aditya Suhane");
})
app.get('/about',(req,res)=>{
    res.send("This is the about page of Aditya Suhane");
})
app.get('/contact',(req,res)=>{
    res.send('<h1>Contact me at 8693661234</h1>');
});
app.listen(process.env.PORT,()=>{
    console.log(`Server is running on http://localhost:${process.env.PORT}`);   
})