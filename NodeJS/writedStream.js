const fs= require('fs')

const writeStreams=fs.createWriteStream('sample.txt')

writeStreams.write('The first stream write')
writeStreams.write('The second stream write')


writeStreams.on('finish',()=>{
    console.log('Stream finished')
})