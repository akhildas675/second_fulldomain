let arr=[1,2,3,4,5]

function sumOfArray(arr,index=0,sum=0){
    if(arr.length==index){
        return sum
    }
    sum+=arr[index]
    return sumOfArray(arr,index+1,sum)
}

console.log(sumOfArray(arr))