function recursiveSort(arr,n=arr.length){
    if(n==1){
        return arr
    }

    for(let i=0;i<n-1;i++){
        if(arr[i]>arr[i+1]){
            [arr[i],arr[i+1]]=[arr[i+1],arr[i]]
        }
    }
    return recursiveSort(arr,n-1)
}

let arr=[4,6,11,35,2,6,7,1]

console.log(recursiveSort(arr))