function display(name,callback){
    console.log(`Hai I am ${name}`)
    callback()
}

function greets(){
    console.log('Have a great day');
    
}

display('Akhildas',greets)


