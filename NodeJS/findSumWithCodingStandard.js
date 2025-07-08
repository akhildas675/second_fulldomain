const express = require('express');

const app=express()

const port =  process.env.PORT || 3000


app.get('/',(req,res)=>{
    const {num1,num2}=req.query

    if(!num1 && !num2){
        return res.status(400).send('Both num1 and num2 are required')
    }

    const number1=parseInt(num1)
    const number2=parseInt(num2)

    if(isNaN(number1)||isNaN(number2)){
        return res.status.send('Both are must be a number')
    }

    let sum=number1+number2

    res.send(`Sum of the numbers = ${sum}`)
})

app.listen(port,()=>{
    console.log(`server running at https://localhost:${port}`)
})