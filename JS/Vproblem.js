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


function findSum(array){
    let sum=0;

    let arr=[]

    for(let i=0;i<array.length;i++){
        if(typeof array[i]==='number'){
            arr.push(array[i])
        }else if(typeof Object.values(array[i])==='number' && array[i]!==null){
            arr.push(array[i])
        }
    }

    sum=arr.reduce((acc,cuc)=>acc+cuc,0)
}

findSum(array)