const path = require('path')
const {Worker}=require('worker_threads')


const worker = new Worker(path.resolve(__dirname,'worker.js'));

worker.postMessage(10)


worker.on('message',(msg)=>{
    console.log(msg)
})


worker.on('error',(err)=>{
    console.log(err)
})


worker.on('exit',(code)=>{
    console.log('code executed',code)
})