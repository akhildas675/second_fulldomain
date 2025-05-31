let arr=[6,32,4,3,3,4,4,4,4,8,1,1,14]


function frequency(arr){
    let set={}

    for(let i=0;i<arr.length;i++){
        if(set[arr[i]]){
            set[arr[i]]++
        }else{
            set[arr[i]]=1
        }
    }
    return set
}

console.log(frequency(arr))


//Recursion

// function freq(arr,i=0,set={}){
//     if(i>=arr.length) return set
//       let val=arr[i]
//       set[val]=set[val]?set[val]+1:1
//     return freq(arr,i+1,set)
// }

// console.log(freq(arr))