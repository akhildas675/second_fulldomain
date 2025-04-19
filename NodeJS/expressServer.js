const express=require('express')

const path=require('path')
const app=express()


const port = process.env.PORT||4500


app.set('view engine','ejs')

app.set('views',path.join(__dirname,'views'))

const userName='Akhildas H'
app.get('/',(req,res)=>{
    res.render('index',{userName})
})

app.listen(port,()=>{
    console.log(`Server running: http://localhost:${port}`)
})