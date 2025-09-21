//worker.js

const {parentPort}=require('worker_threads')


parentPort.on('message',(limit)=>{
    for(let i=0;i<=limit;i++){
        parentPort.postMessage(i)
    }

    parentPort.close()
})