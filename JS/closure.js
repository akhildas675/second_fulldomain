//Closure Example

// function sum(){
//     let a=10
//     let b=20

//     function add(){
//         console.log(a+b)
//     }
//     return add
// }


// sum()

// Example 2


// function counter(){
//     let count=0
//     function increment(){
//         count++
//         console.log('Increment Count',count)
//     }
//     return increment
// }

// const result=counter()
// result()
// result()
// result()
// result()
// result()
// result()

// 


function Welcome(name){
    const greetings=function(message){
        console.log(`${message} ${name}`)
    }
    return greetings
}

const myFunction = Welcome('Akhil')

myFunction('Hello')