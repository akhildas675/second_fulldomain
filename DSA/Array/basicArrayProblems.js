/**
 * 1.Largest element
 * 
 * 
 * 
 * 
 * 
 * 
 */




// 1.Largest element

let array=[6,2,1,7,3,0,41,23,34,123,12,36,413,135]


function largestElement(arr) {
    let max=0
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i]
        }
    }
    return max
}

console.log(largestElement(array))