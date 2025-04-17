
let array=[2,4,5,61,6,46,4,9,33,64,9,63]

// move to another array;
// function removeEvenNumbers(arr) {
//     let odd=[]
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]%2!==0){
//             odd.push(arr[i])
//         }
//     }
//     return odd
// }
// console.log('initialize array ',removeEvenNumbers(array))

// without moving any array
// function removeEvenNumbers(arr) {
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]%2==0){
//             arr.splice(i,1)
//             i--
//         }
//     }
//     return arr
// }

// console.log('Without initialize array ',removeEvenNumbers(array))


//Without using any in-build method

function removeEvenNumbers(arr) {
   let index=0;

   for(let i=0;i<arr.length;i++){
    if(arr[i]%2!==0){
        arr[index]=arr[i]
        index++
    }
   }
   arr.length=index
   return arr
}



console.log('Without any in-build method ',removeEvenNumbers(array))