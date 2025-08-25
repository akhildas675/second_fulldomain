// function multiply(a){
//     return function(b){
//         return function(c){
//             return a+b+c
//         }
//     }
// }

// console.log(multiply(10)(20)(30))



//Currying



function currying(c){
    return function (a){
        return function (b){
            return c+b+a
        }
    }
}

console.log(currying(10)(20)(30))