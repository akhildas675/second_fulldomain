// 1. diagonal sum of a matrix

// let matrix = [
//   [1, 2, 3, 4],
//   [4, 1, 2, 3],
//   [6, 5, 1, 2],
//   [8, 6, 5, 1]
// ];


// function diagonalSum(arr){
//     let sum=0
//     for(let i=0;i<arr.length;i++){
//         sum+=arr[i][i]+arr[i][arr[i].length-i-1]
//     }

//     return sum 
// }

// console.log(diagonalSum(matrix))




//2.smallest Even number using reduce

// let arr=[1,5,22,61,77,89,1,44,6]
// function smallestEvenNumber(arr){
//     const result= arr.reduce((acc,cuc)=>{
//         if(cuc%2==0){
//             if(cuc<acc.first){
//                 acc.second=acc.first;
//                 acc.first=cuc
//             }else if(acc.second>cuc && acc.first!==cuc){
//                 acc.second=cuc
//             }
//         }
//         return acc
//     },{first:Infinity,second:Infinity})

//     return result.second
// }

// console.log(smallestEvenNumber(arr));




//3.Reverse using while loop

// let arr=[1,5,22,61,77,89,1,44,6]


// function reversWhileLoop(arr){

//     let start=0;
//     let end=arr.length-1

//     while(start<end){
//         let temp=arr[start];
//         arr[start]=arr[end];
//         arr[end]=temp
//         start++;
//         end--
//     }
//     return arr
// }


// console.log(reversWhileLoop(arr))




//4.Object pattern 

// let arr=[11,21,31,41,51]



// function ObjectPattern(arr){
// let res=[];

//     for(let i=1;i<=arr.length;i++){
//         let obj={}
//         for(let j=1;j<=i;j++){
//             let key='a'+j;
//             obj[key]=arr[j-1]
//         }
//         res.push(obj)
//     }

//     return res

// }

// console.log(ObjectPattern(arr))

// function pattern(n){
//     for(let i=0;i<=n;i++){
//         let val=''
//         for(let j=0;j<=i;j++){
//             val+='* '
//         }

//         console.log(val)
//     }
// }

// console.log(pattern(5))