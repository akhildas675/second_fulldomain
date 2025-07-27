const fs = require('fs')


const readStream=fs.createReadStream('text.txt','utf-8')

readStream.on('data',(chunk)=>{
    console.log('Chunk Data',chunk)
})

readStream.on('end',()=>{
    console.log('Stream ended')
})