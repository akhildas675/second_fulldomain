let array =[6,35,3,6,11,35,7,8,95,3,2345,234,234,32345,234,52,4]


function secondLargest(arr){
    let first=-Infinity;
    let second=-Infinity ;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>first){
            second=first;
            first=arr[i]
        }else if(arr[i]>second && arr[i]!==first){
            second=arr[i]
        }
    }
    return second
}

console.log(secondLargest(array))