//Child process parent


const {fork} = require('child_process')
const path = require('path')

const child= fork(path.resolve(__dirname,'forkChild.js'))

child.on('message',(msg)=>{
    console.log('Message',msg)
});

child.send('This is from parent')