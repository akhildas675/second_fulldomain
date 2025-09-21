process.on('message',(msg)=>{
    console.log('the data from parent',msg)
})

process.send("The message from Child")