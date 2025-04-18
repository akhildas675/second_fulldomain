//FS module practicals 

const fs=require('fs')




//Time and date 

// const date= new Date();

// const format=date.toLocaleString();

// fs.writeFile('dateAndTime.txt',format,(err)=>{
//     if(err) throw err
//     console.log('The time and date updated')
// })


//Write file

// const content='Float like butterfly, string like a bee'


// fs.writeFile('text.txt',content,(err)=>{
//     if(err) throw err
//     console.log('File write success')
// })


// // File Read


// const fileName='text.txt';


// fs.readFile(fileName,'utf-8',(err,data)=>{
//     if(err) throw err
//     console.log('File write succuss')
//     console.log('Content: ', data)
// })


const fileName='text.txt';

fs.unlink(fileName,(err)=>{
    if(err) throw err
    console.log('File delete success')
})