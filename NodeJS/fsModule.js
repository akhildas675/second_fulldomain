//FS Module workings


//Print Date and time


const fs = require('fs')

let filename='text.txt'



// let date= new Date().toLocaleString()

// fs.writeFile(filename,date,(err)=>{
//     if(err){
//         throw new Error('Failed')
//     }
//     console.log('File write time and date updated')
// })


// Write file

// let content = 'The file write successfully done'

// fs.writeFile(filename,content,(err)=>{
//     if(err){
//         throw new Error("failed");
        
//     }

//     console.log('File write successfully completed');
    
// })


//Read file

// fs.readFile(filename,(err,data)=>{
//     if(err){
//         throw new Error('The file read failed')
//     }
//     console.log('File read successfully',data.toString())
// })



//Unlink

// fs.unlink(filename,(err)=>{
//     if(err){
//         throw new Error("Failed");
        
//     }

//     console.log('File removed from the directory');
    
// })