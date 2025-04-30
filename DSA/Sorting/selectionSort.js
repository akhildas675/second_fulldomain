let array=[4,51,34,25,2,46,234,23,4,42,456,432,23,43,3,32]



function selectionSort(arr){
    for(let i=0;i<arr.length;i++){
        let minIndex=i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[minIndex]){
                minIndex=j
            }
        }
        if(minIndex!==i){
            [arr[minIndex],arr[i]]=[arr[i],arr[minIndex]]
        }
    }
    return arr
}


console.log(selectionSort(array))


let name='akhildas'

function namedSelectionSort(str){
    for(let i=0;i<str.length;i++){
        let minIndex=i;
        for(let j=i+1;j<str.length;j++){
            if(str[j]<str[minIndex]){
                minIndex=j
            }
        }
        if(minIndex!==i){
            [str[i],str[minIndex]]=[str[minIndex],str[i]]
        }
    }
    return str
}

console.log(namedSelectionSort(name.split('')))