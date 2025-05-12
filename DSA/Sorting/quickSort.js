let array=[4,51,34,25,2,46,234,23,4,42,456,432,23,43,3,32]

function quickSort(arr){
 if(arr.length<2){
    return arr
 }
 let left=[];
 let right=[];
 let pivot=arr[arr.length-1]
 for(let i=0;i<arr.length-1;i++){
    if(arr[i]<pivot){
        left.push(arr[i])
    }else{
        right.push(arr[i])
    }
 }
 return [...quickSort(left),pivot,...quickSort(right)]
}

console.log(quickSort(array))


let name='akhildas'
function namedQuickSort(str){
    if(str.length<2){
        return str
    }

    let left=[];
    let right=[];
    let pivot=str[str.length-1]

    for(let i=0;i<str.length-1;i++){
        if(str[i]<pivot){
            left.push(str[i])
        }else{
            right.push(str[i])
        }
    }
    return [...namedQuickSort(left),pivot,...namedQuickSort(right)]
}


console.log(namedQuickSort(name.split('')))