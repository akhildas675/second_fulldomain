// const path = require('path')
// const {Worker}= require('worker_threads')

// const worker=new Worker(path.resolve(__dirname,'worker.js'))

// worker.postMessage(5)

// worker.on('message',(result)=>{
//     console.log('The result from worker ',result);
    
// })

// console.log('Without blocking main thread')

const path = require('path')
const {Worker}=require('worker_threads')

const worker=new Worker(path.resolve(__dirname,'worker.js'))

worker.postMessage(5)

worker.on('message',(result)=>{
    console.log(`The result from worker thread is : ${result}`);
    
})