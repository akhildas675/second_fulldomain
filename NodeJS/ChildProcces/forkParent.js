//Child process parent


const {fork} = require('child_process');
const path = require('path');

const child=fork(path.resolve(__dirname,'forkChild.js'))

child.on('message',(msg)=>{
    console.log('message from Child',msg)
})


child.send('The data from parent')