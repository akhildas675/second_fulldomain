// function display(name,callback){
//     console.log(`Hai I am ${name}`)
//     callback()
// }

// function greets(){
//     console.log('Have a great day');
    
// }

// display('Akhildas',greets)


function callbackFunction(name){
    console.log(`Hello ${name}`)
}

function outerFunction(callback){
    let name='Akhildas'
    callback(name)
}

outerFunction(callbackFunction)