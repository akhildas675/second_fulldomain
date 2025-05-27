let nested = [1, [2, [3], [4,[8,9]], 5], 6];


function flattedArray(arr){
    let result=[]

    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            let flat=flattedArray(arr[i])
            for(let j=0;j<flat.length;j++){
                result.push(flat[j])
            }
        }else{
            result.push(arr[i])
        }
    }
    return result
}

console.log(flattedArray(nested));
