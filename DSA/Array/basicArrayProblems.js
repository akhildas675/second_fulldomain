/**
 * 1.Largest element Element
 * 2.Second largest Element
 * 3.Third largest Element
 * 4.Sum of the Elements
 * 5.Reverse the Array
 * 6.Remove Duplicate
 *  
 * 
 * 
 * 
 * 
 * 
 */




// 1.Largest Element

let array=[6,2,1,7,3,0,41,23,1,2,7,3,34,123,12,36,413,135]


// function largestElement(arr) {
//     let max=0
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>max){
//             max=arr[i]
//         }
//     }
//     return max
// }

// console.log(largestElement(array))


// 2.Second largest Element


// function secondLargest(arr){
//      let largest=0;
//      let secondLargest=0;
//      for(let i=0;i<arr.length;i++){
//         if(arr[i]>largest){
//             secondLargest=largest;
//             largest=arr[i]
//         }
//      }
// }

// console.log(secondLargest(array))



// 3.Third largest Element


// function thirdLargestElement(arr){
// let largest=0;
// let secondLargest=0;
// let thirdLargest=0;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>largest){
//             thirdLargest=secondLargest;
//             secondLargest=largest;
//             largest=arr[i]
//         }else if(arr[i]>secondLargest && arr[i]!==largest){
//             thirdLargest=secondLargest;
//             secondLargest=arr[i]
//         }else if(arr[i]>thirdLargest && arr[i]!==largest && arr[i]!==secondLargest){
//             thirdLargest=arr[i]
//         }
//     }
//     return thirdLargest
// }

// console.log(thirdLargestElement(array))


// 4.Sum of the Elements

// function sumOfElements(arr){
//     let sum=0
//     for(let i=0;i<arr.length;i++){
//         sum+=arr[i]
//     }
//     return sum
// }
// console.log(sumOfElements(array))




//5.Reverse the Array


// function reverseArray(arr){

//     let rev=[]
//     for(let i=arr.length-1;i>=0;i--){
//         rev.push(arr[i])
//     }
//     return rev
// }
// console.log(reverseArray(array))


// 6.Remove Duplicate from Array


//6.1 Initialize with Array

// function removeDuplicate(arr){
//     let unique=[]
//     for(let i=0;i<arr.length;i++){
//         let isDuplicate=false
//         for(let j=0;j<unique.length;j++){
//             if(arr[i]===unique[j]){
//                isDuplicate=true;
//                break;
//             }
//         }
//         if(!isDuplicate){
//             unique[unique.length]=arr[i]
//         }
//     }
//     return unique
// }

// console.log(removeDuplicate(array))




//6.2 Initialize without Array

//let newArr=[1,4,3,3,2,7,3,3,9]

// function removeDuplicateWithoutArray(arr){
//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i]===arr[j]){
//                 for(let k=j;k<arr.length;k++){
//                     arr[k]=arr[k+1]
//                 }
//                 arr.length--
//                 j--
//             }
//         }
//     }
//     return arr
// }

// console.log(removeDuplicateWithoutArray(array))

//6.3 Using splice


function removeElementUsingSplice(arr){
    for(let i=0;i<array.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]===arr[j]){
                arr.splice(j,1)
                j--
            }
        }
    }
    return arr
}
console.log(removeElementUsingSplice(array))