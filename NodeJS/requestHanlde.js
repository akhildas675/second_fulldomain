const express = require('express')

const app = express()

const port = process.env.PORT || 3000


app.use((req,res,next)=>{
    if(req.method==='POST'){
        return res.status(403).send('Post request blocked')
    }
    next()
})

app.get('/',(req,res)=>{
    res.status(200).send('Get request worked')
})


app.listen(port,()=>{
    console.log(`server running port http://localhost:${port}`)
})