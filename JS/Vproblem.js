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


let sum=0;
function findSum(value){
    if(typeof value==='number'){
        sum+=value
    }else if(typeof value==='object' && value!==null){
        for(let key in value){
            findSum(value[key])
        }
    }
    
}


for(let i=0;i<array.length;i++){
    findSum(array[i])
}

console.log(sum);
