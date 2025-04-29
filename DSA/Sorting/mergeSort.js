let array=[4,51,34,25,2,46,234,23,4,42,456,432,23,43,3,32]


function mergeSort(arr){
    if(arr.length<=1){
        return arr
    }
    let mid=Math.floor(arr.length/2);

    let left=mergeSort(arr.slice(0,mid))
    let right=mergeSort(arr.slice(mid))
    return merge(left,right)
}


function merge(left,right){
    let sortedArray=[];
    while(left.length && right.length){
        if(left[0]<=right[0]){
            sortedArray.push(left.shift())
        }else{
            sortedArray.push(right.shift())
        }
    }
    return [...sortedArray,...left,...right]
}

console.log('array merge Sort',mergeSort(array))

let name='akhildas'

function namedMergeSort(str){


    if(str.length<=1){
        return str
    }

    let mid=Math.floor(str.length/2)

    let left=namedMergeSort(str.slice(0,mid))

    let right=namedMergeSort(str.slice(mid))

    return namedMerge(left,right)
}


function namedMerge(left,right){
    let namedSort=[]
    while(left.length && right.length){
        if(left[0]<=right[0]){
            namedSort.push(left.shift())
        }else{
            namedSort.push(right.shift())
        }
    }
    return [...namedSort,...left,...right]
}


console.log(namedMergeSort(name.split('')))