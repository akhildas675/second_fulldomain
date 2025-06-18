let array = [23, { a: 20, b: { c: 52 } }, [[10, 50]], undefined, null, [10, 50, 40],[[[70],50]]];

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




let sum=0
function findTheSum(value){
  if(typeof value=='number'){
    sum+=value
  }else if(Array.isArray(value)){

    for(let i=0;i<value.length;i++){
      findTheSum(value[i])
    }
  }else if(typeof value==='object' && value!==null && value!==undefined){
    for(let key in value){
      findTheSum(value[key])
    }
  }

}

for(let i=0;i<array.length;i++){
  findTheSum(array[i])
}

console.log(sum)