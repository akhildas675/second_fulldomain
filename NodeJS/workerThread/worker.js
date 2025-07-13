const {parentPort} = require('worker_threads')

parentPort.on('message',(value)=>{
    let result=value*10
    parentPort.postMessage(result)
})