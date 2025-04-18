//FS module practicals 

const fs=require('fs')


const date= new Date();

const format=date.toLocaleString();

fs.writeFile('dateAndTime.txt',format,(err)=>{
    if(err) throw err
    console.log('The time and date updated')
})