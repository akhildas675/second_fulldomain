//fs module



// file write


const fs=require('fs')


let date=new Date();

let format=date.toLocaleString()


fs.writeFile('import.txt',format,(err)=>{
    if(err){
        throw new Error('The write file is error')
    }else{
        console.log('The file write success')
    }
})


