//Recursion

/*
1.Print Number
2.Print Reverse
3.Sum of first 10
4.First 10 Factorial Numbers
5.print first 10 factorial without loop;
6.Fibonacci sequence
7.Fibonacci sequence Without  loop
8.Sum of numbers using recursion


*/

//1.Print Number

// function printNum(n){
//     if(n>=10){
//         return n
//     }

//     console.log(n);
//     return printNum(n+1)
// }

// console.log(printNum(1))

//---------------------------------------------------

//2.Print Reverse

// function printReverse(n){

//     if(n==0){
//         return n
//     }

//     console.log(n)
//     return printReverse(n-1)

// }

// console.log(printReverse(10))

//--------------------------------------------------

//3.Sum of first 10

// function sumOfFirst(n){

//     if(n==10){
//         return n
//     }

//     return n+sumOfFirst(n+1)

// }

// console.log(sumOfFirst(1))

//------------------------------------------------

// Factorial

//4.First 10 Factorial Numbers

// function fac(n) {
//   if (n == 0) {
//     return 1;
//   }

//   return n * fac(n - 1);
// }

// for (let i = 0; i <= 10; i++) {
//   console.log(fac(i));
// }

//--------------------------------------------------------

//5.print first 10 factorial without loop;

// function fac(n) {
//   if (n == 0) {
//     return 1;
//   }

//   return n * fac(n - 1);
// }

// function printNumber(n, limit) {
//   if (n == limit) {
//     return;
//   }

//   console.log(fac(n));

//   return printNumber(n + 1, limit);
// }

// printNumber(1, 10);


//---------------------------------------------


// 6.Fibonacci sequence


// function fib(n){

//     if(n<=1){
//         return 1
//     }

//     return fib(n-1)+fib(n-2)

// }

// for(let i=0;i<10;i++){
//     console.log(fib(i))
// }





//7.Fibonacci sequence Without  loop



// function fib(a,b){

//     if(a>=10){
//         return
//     }

//     console.log(a);

//     return fib(b,a+b)

// }


// fib(0,1)




//--------------------------------------------------------------




// 8.Sum of numbers using recursion


function sumOfNum(n){
    if(n==0){
        return 0;
    }
    return Math.floor(n%10)+Math.floor(sumOfNum(n/10))
}

console.log(sumOfNum(12345))