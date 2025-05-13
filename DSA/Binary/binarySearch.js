let array=[7,24,20,7,2,4,67,2,46,767,24,8]


function binarySearch(arr,target){
    arr.sort((a,b)=>a-b);
    let left=0;
    let right=arr.length-1
    while(left<=right){
        let mid=Math.floor((left+right)/2)
        if(target==arr[mid]){
            return mid
        }

        if(target<=arr[mid]){
            right=mid-1
        }else{
            left=mid+1
        }
    }
    return -1
}

console.log(binarySearch(array,46))