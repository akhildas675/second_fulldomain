let array=[4,51,34,25,2,46,234,23,4,42,456,432,23,43,3,32]


// function mergeSort(arr){
//     if(arr.length<=1){
//         return arr
//     }
//     let mid=Math.floor(arr.length/2);

//     let left=mergeSort(arr.slice(0,mid))
//     let right=mergeSort(arr.slice(mid))
//     return merge(left,right)
// }


// function merge(left,right){
//     let sortedArray=[];
//     while(left.length && right.length){
//         if(left[0]<=right[0]){
//             sortedArray.push(left.shift())
//         }else{
//             sortedArray.push(right.shift())
//         }
//     }
//     return [...sortedArray,...left,...right]
// }

// console.log('array merge Sort',mergeSort(array))


// //Using String

// let name='akhildas'

// function namedMergeSort(str){


//     if(str.length<=1){
//         return str
//     }

//     let mid=Math.floor(str.length/2)

//     let left=namedMergeSort(str.slice(0,mid))

//     let right=namedMergeSort(str.slice(mid))

//     return namedMerge(left,right)
// }


// function namedMerge(left,right){
//     let namedSort=[]
//     while(left.length && right.length){
//         if(left[0]<=right[0]){
//             namedSort.push(left.shift())
//         }else{
//             namedSort.push(right.shift())
//         }
//     }
//     return [...namedSort,...left,...right]
// }


// console.log(namedMergeSort(name.split('')))





// function mergeSort(arr){
//         if(arr.length<2){
//             return arr
//         }

//        let mid = Math.floor(arr.length/2);

//        let left = mergeSort(arr.slice(0,mid))
//        let right = mergeSort(arr.slice(mid));
//        return merge(left,right)
// }


// function merge(left,right){
//     let sortedArray=[];

//    while(left.length && right.length){
//         if(left[0]<=right[0]){
//             sortedArray.push(left.shift())
//         }else{
//             sortedArray.push(right.shift())
//         }
//    }

//    return [...sortedArray,...left,...right]
// }


// console.log(mergeSort(array))



const students = [
    { name: 'Akhildas', age: 24, marks: 85 },
    { name: 'Rahul', age: 22, marks: 92 },
    { name: 'Priya', age: 23, marks: 78 },
    { name: 'Arjun', age: 25, marks: 88 }
];



function mergeSort(arr,key){
    if(arr.length<2){
        return arr
    }

    let mid=Math.floor(arr.length/2);

    let left=mergeSort(arr.slice(0,mid),key)
    let right=mergeSort(arr.slice(mid),key)

    return merge(left,right,key)
}


function merge(left,right,key){
    let sortedArray=[];

    while(left.length && right.length){
        if(left[0][key]<=right[0][key]){
            sortedArray.push(left)
        }
    }
}