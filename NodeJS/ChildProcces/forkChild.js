process.on('message',(data)=>{
    console.log('The data from parent',data)
    process.send('The message from child')
})