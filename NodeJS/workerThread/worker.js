// const {parentPort}=require('worker_threads')

// parentPort.on('message',(value)=>{
//     const result=value*2
//     parentPort.postMessage(result)
// })



const {parentPort} = require('worker_threads')


parentPort.on('message',(value)=>{
    let result=value*2;
    parentPort.postMessage(result)
})


