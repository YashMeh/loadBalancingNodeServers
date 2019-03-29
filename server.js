const express=require("express");
const app=express();
const port =3000;

app.get("/",(req,res)=>{
    res.sendFile("home.html",{root:__dirname+'/'})
})

app.listen(port,(err)=>{
    if(err)
    throw err;
    console.log("Server running at port "+port)
})
