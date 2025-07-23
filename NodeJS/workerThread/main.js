// const path = require('path')
// const {Worker} =require('worker_threads')

// const worker = new Worker(path.resolve(__dirname,'worker.js'))

// worker.postMessage(5)

// worker.on('message',(data)=>{
//     console.log(data)
// })


const {Worker} = require('worker_threads');

const worker = new Worker(path.resolve(__dirname,'worker.js'))

worker.postMessage(5);

worker.on('message',(data)=>{
    console.log('Data from the worker thread',data)
})