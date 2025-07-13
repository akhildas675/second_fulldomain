function duplicateRemove(arr,i=0,result=[]){
    if(arr.length==i){
        return result
    }
    if(!result.includes(arr[i])){
        result.push(arr[i])
    }

    return duplicateRemove(arr,i+1,result)
}
let arr=[5,13,1,1,5,6,3,2,2,7]

console.log(duplicateRemove(arr))