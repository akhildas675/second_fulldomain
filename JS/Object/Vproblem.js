// let array = [23, { a: 20, b: { c: 52 } }, [[10, 50]], undefined, null, [10, 50, 40],[[[70],50]]];

//Easy method


// let sum=0;
// const findOne=(value)=>{
//     if(typeof value==='number'){
//         sum+=value
//     }

//     else if(typeof value=='object' && value!==null){
//         for(let key in value){
//             findOne(value[key])
//         }

//     }
// }

// for(let i=0;i<array.length;i++){
//     findOne(array[i])
// }


// console.log(sum);


// const obj=[{a:[1,23,2,23]},{a:[1,232,32]},{a:[1,232,32]},{a:[1,232,32]}]

// let sum=0;

// function findSum(value){
//   for(let key in value ){
//     let arr=value[key];
//     for(let i=0;i<arr.length;i++){
//         sum+=arr[i]
//     }
//   }
// }

// for(let i=0;i<obj.length;i++){
//     findSum(obj[i])
// }

// console.log(sum)




//Practice


// let sum=0;

// const findTheSum=(values)=>{
//     if(typeof values=='number'){
//       sum+=values
//     }else if(typeof values ==='object' && values!==null && values!==undefined){
//       for(let key in values){
//         findTheSum(values[key])
//       }
//     }
// }





// for(let i=0;i<array.length;i++){
//   console.log(array[i])
// }

// console.log(sum)




// let sum=0
// function findTheSum(value){
//   if(typeof value=='number'){
//     sum+=value
//   }else if(Array.isArray(value)){

//     for(let i=0;i<value.length;i++){
//       findTheSum(value[i])
//     }
//   }else if(typeof value==='object' && value!==null && value!==undefined){
//     for(let key in value){
//       findTheSum(value[key])
//     }
//   }

// }

// for(let i=0;i<array.length;i++){
//   findTheSum(array[i])
// }

// console.log(sum)





// let obj={a:1,b:3,c:4,d:4,f:4,f:'3'}

// let seen={}
// for(let key in obj){
//     let num=obj[key]
//     if(!seen[num]){
//         seen[num]=1
//     }else{
//         seen[num]++
//     }
// }

// console.log(seen)

// Given an array of positive integers, find and print all the perfect numbers in the array.

// A perfect number is a positive integer that is equal 
// to the sum of its proper divisors (excluding itself).

// Example:

// 6 → 1 + 2 + 3 = 6 (Perfect)
// 28 → 1 + 2 + 4 + 7 + 14 = 28 (Perfect)
// Example 1

// Output:6, 28


// Input:

let array = [6, 28, 12, 97,27,496,8128,2,1]




function perfectNumber(arr){
    let result=[]
    for(let i=0;i<arr.length;i++){
        let sum=0
        for(let j=1;j<arr[i];j++){
            if(j<arr[i] && arr[i]%j==0){
                sum+=j
            }
        }
        if(sum==arr[i]){
            result.push(arr[i])
        }
    }
    return result
}

console.log(perfectNumber(array))