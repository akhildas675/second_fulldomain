// Callback hell 


// function first(callback){
//     setTimeout(() => {
//         console.log('The first callback is worked')
//         callback()
//     }, 1000);
// }


// function second(callback){
//     setTimeout(() => {
//         console.log('The second callback is worked')
//         callback()
//     }, 2000);
// }


// first(()=>{
//     second(()=>{
//         console.log('All call back are worked')
//     })
// })



//Data passing through the call back hell


function first(callback){
    setTimeout(() => {
        let result1=10
        console.log('Result is ',result1)
        callback(result1)
    }, 1000);
}

function second(value,callback){
    setTimeout(() => {
        let result2=20+value;
        console.log('Result is ',result2)
        callback(result2)
    }, 2000);
}

function third(value,callback){
    setTimeout(() => {
        let result3=30+value
        console.log('Result is ',result3)
        callback(result3)
    }, 3000);
}

first((result1)=>{
    second(result1,(result2)=>{
        third(result2,(final)=>{
            console.log('The final result',final);
            
        })
    })
})