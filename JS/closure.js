//Closure Example

// function sum(){
//     let num1=10 
//     let num2=20
    
//     function result() {
//         let sum=num1+num2
//         console.log(sum)
//     }
//     return result
// }

// let display = sum()

// display()


// Example 2


function counter(){
    let count=0

    function increment(){
        count++
        console.log('increment count',count);
        
    }
    return increment
}

let result = counter()

result()
result()
result()
result()
result()