const path = require('path')
const {Worker} = require('worker_threads')

const worker = new Worker(path.resolve(__dirname,'worker.js'));


worker.postMessage(10);

worker.on('message',(msg)=>{
    console.log('Message from worker',msg)
});

worker.on('error',(err)=>{
    console.log('Error from worker',err);
});

worker.on('exit',(code)=>{
    console.log('Code exit',code)
})