let arr=[9,3,23,6,74,78,32,3]


function stackSorting(arr){
    let tempStack=[]
    while(arr.length>0){
        let temp=arr.pop()
        while(tempStack.length>0 && tempStack[tempStack.length-1]>temp){
            arr.push(tempStack.pop())
        }
        tempStack.push(temp)
    }
    return tempStack
}

console.log(stackSorting(arr))