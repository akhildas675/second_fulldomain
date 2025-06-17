let arr=[6,23,234,67,58,82,23,3,46,6,1,8]

// function secondLargest(arr){
//     const [first,second]=arr.reduce((acc,cuc)=>{
//         let [first,second]=acc;
//         if(cuc>first){
//             return [cuc,first]
//         }else if(cuc > second && cuc!==first){
//             return [first,cuc]
//         }else {
//             return [first,second]
//         }
//     },[-Infinity,-Infinity])

//     return second
// }

// console.log(secondLargest(arr))


function thirdLargest(arr){
    let [first,second,third]=arr.reduce((acc,cuc)=>{
        let [first,second,third]=acc;
        if(cuc>first){
            return [cuc,first,second]
        }else if(cuc>second && cuc!==first){
            return [first,cuc,second]
        }else if(cuc>third && cuc!==second && cuc!==first){
            return [first,second,cuc]
        }else{
            return [first,second,third]
        }
    },[-Infinity,-Infinity,-Infinity])
    return third
}

console.log(thirdLargest(arr))