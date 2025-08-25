// function factorial(n){
//     if(n==0){
//         return 1
//     }

//     return n*factorial(n-1)
// }


// console.log(factorial(5));
// console.log(factorial(7));
// console.log(factorial(8));





// function factorial(n){
//     if(n==0){
//         return 1
//     }

//     return n*factorial(n-1)
// }

// console.log(factorial(5))

function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Print factorials from 0 to 5
for (let i = 0; i <= 5; i++) {
    console.log(`Factorial of ${i} is ${factorial(i)}`);
}