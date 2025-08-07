const path = require('path');
const {Worker}=require('worker_threads');


const worker = new Worker(path.resolve(__dirname,'worker.js'))


worker.postMessage(10)

worker.on('message',(result)=>{
    console.log(`The result is: ${result}`)
})

worker.on('error',(err)=>{
    console.error(err)
})

worker.on('exit',(code)=>{
    console.log('Code executed',code)
})