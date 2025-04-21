//Express server with path


// const express=require('express')

// const path=require('path')

// const app=express()

// const port=process.env.PORT || 5000

// app.set('view engine','ejs')

// app.set('views',path.join(__dirname,'views'))

// app.get('/',(req,res)=>{
//     res.render('index')
// })

// app.listen(port,()=>{
//     console.log(`http://localhost:${port}`);

// })

const express = require('express')


const app=express()
const port=process.env.PORT||5000

app.set('view engine','ejs')


app.get('/',(req,res)=>{
    res.render('index')
})
app.listen(port,()=>{
    console.log(`Server running port: http://localhost:${port}`);
    
})