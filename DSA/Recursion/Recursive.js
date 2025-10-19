//Recursion



function printNum(n){
    if(n>=10){
        return n
    }

    console.log(n);
    return printNum(n+1)
}

console.log(printNum(1))