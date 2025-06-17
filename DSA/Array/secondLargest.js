let array=[25,253,6,323,24,56,423,8]


function secondLargest(arr){

    let largest=0;
    let secondLargest=0;
    let thirdLargest=0
    for(let i=0;i<arr.length;i++){
        if(arr[i]>largest){
            secondLargest=largest;
            largest=arr[i]
        }else if(secondLargest<arr[i] && secondLargest!==largest){
            secondLargest=arr[i]
        }else if(thirdLargest <arr[i] && thirdLargest !==secondLargest){
            thirdLargest=arr[i]
        }
    }

    return thirdLargest

}


console.log(secondLargest(array))