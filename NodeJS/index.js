const express = require('express')

const app=express();


const port = process.env.PORT || 3000;


app.use(express.json())


app.post('/submit',(req,res)=>{
    if(req.method==='POST'){
        res.send('The post request is blocked')
       
    }
})


app.get('/home',(req,res)=>{
    res.send('Welcome to the Home page')
})


app.listen(port,()=>{
    console.log(`Server running Port http://localhost:${port}`)
})