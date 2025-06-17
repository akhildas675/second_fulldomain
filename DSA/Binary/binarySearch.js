// let array=[7,24,20,7,2,4,67,2,46,767,24,8]


// function binarySearch(arr,target){
//     arr.sort((a,b)=>a-b)

//     let left=0;
//     let right=arr.length-1

//     while(left<=right){
//         let mid=Math.floor((left+right)/2)
//         if(target==arr[mid]){
//             return mid
//         }

//         if(target<arr[mid]){
//             right=mid-1
//         }else{
//             left=mid+1
//         }
//     }
//     return -1
// }


// console.log(binarySearch(array,67));



let array=[1,3,4,6,7,9,22,34,45,67]


function recursiveBinarySearch(arr,target,left=0,right=arr.length-1){
    while(left<=right){
        let mid=Math.floor((left+right)/2)
        if(arr[mid]==target){
            return mid
        }
        if(target<arr[mid]){
            return recursiveBinarySearch(arr,target,left,mid-1)
        }else{
            return recursiveBinarySearch(arr,target,mid+1,right)
        }
    }
    return -1
}


console.log(recursiveBinarySearch(array.sort,22));

