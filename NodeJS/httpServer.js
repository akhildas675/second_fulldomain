const http=require('http')


http.createServer((req,res)=>{
    res.writeHead(200).write('Hello http server ')
    res.end()
})

.listen(5000)