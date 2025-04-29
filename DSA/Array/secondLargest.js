// let array =[6,35,3,6,11,35,7,8,95,3,2345,234,234,32345,234,52,4]


// function secondLargest(arr){
//     let first=-Infinity;
//     let second=-Infinity ;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>first){
//             second=first;
//             first=arr[i]
//         }else if(arr[i]>second && arr[i]!==first){
//             second=arr[i]
//         }
//     }
//     return second
// }

// console.log(secondLargest(array))


const obj=[{a:[1,23,2,23]},{a:[1,232,32]},{a:[1,232,32]},{a:[1,232,32]}];

// function name(arr) {
    
// }


// for(let i=0;i<obj.length;i++){
//     secondLargest()
// }


let array=[5,63,23,4,2,6,7,90,34]



let secondLargest=array.reduce((acc,cuc)=>{
    if(cuc>acc.first){
        acc.second=acc.first;
        acc.first=cuc
    }else if(cuc>acc.second && cuc!==acc.first){
        acc.second=cuc
    }
    return acc
},{first:-Infinity,second:-Infinity})

console.log(secondLargest)