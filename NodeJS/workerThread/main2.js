const path = require('path')
const {Worker} = require('worker_threads')


const worker = new Worker(path.resolve(__dirname,'worker2.js'))

worker.postMessage(10)

worker.on('message',(data)=>{
    console.log('The Data transferred',data)
})