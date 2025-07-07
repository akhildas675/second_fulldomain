const {Worker} = require('worker_threads')
const path=require('path')

const worker=new Worker(path.resolve(__dirname,'worker.js'))

worker.postMessage(5)

worker.on('message',(value)=>{
    console.log('The result from worker',value)
})