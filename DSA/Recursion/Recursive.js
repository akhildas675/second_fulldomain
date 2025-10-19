//Recursion

/*
1.Print Number
2.Print Reverse
3.Sum of first 10
4.First 10 Factorial Numbers


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



function fac(n){
    if(n==0){
        return 1
    }

    return n*fac(n-1)
}


function printNumber(n,limit){

    if(n==limit){
        return;
    }

    console.log(fac(n))

    return printNumber(n+1,limit)

}

printNumber(1,10)