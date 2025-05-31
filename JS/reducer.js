

let arr=[7,21,23,3,5,6,1,8,0,1,-1]


//find the larges element in the array


// function findLargest(arr){

//     return arr.reduce((acc,cuc)=>{
//         if(cuc>acc){
//             acc=cuc
//         }
//         return acc
//     })
// }

// console.log(findLargest(arr))

//Without if condition
 
// function findLargest(arr){
//     return arr.reduce((acc,cuc)=>cuc>acc ? cuc:acc)
// }

// console.log(findLargest(arr))

//find smallest using reduce------------------  

// function findSmallest(arr){
//     return arr.reduce((acc,cuc)=>cuc<acc ? cuc:acc)
// }

// console.log(findSmallest(arr));




//find the largest even number in array


// function findTheLargesEvenNumber(arr){
//     return arr.reduce((acc,cuc,lar)=>cuc%2===0 && cuc>acc? cuc:acc,0)
// }

// console.log(findTheLargesEvenNumber(arr));



function findTheSecondLargestOfEvenNumber(arr){
   const result=arr.reduce((acc,cuc)=>{
    if(cuc>acc.largest){
        acc.secondLargest=acc.largest;
        acc.largest=cuc
    }else if(cuc>acc.secondLargest && acc.largest!==cuc){
        acc.secondLargest=cuc
    }
    return acc
   },{largest:-Infinity,secondLargest:-Infinity})

   return result.secondLargest!== -Infinity?result.secondLargest:null
}
console.log(findTheSecondLargestOfEvenNumber(arr));



