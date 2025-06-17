let arr=[9,3,23,6,74,78,32,3]

function stackUsingSort(stack){

    let tempStack=[];
    while(stack.length>0){
        let temp=stack.pop()

        while(tempStack.length>0 && tempStack[tempStack.length-1]>temp){
            stack.push(tempStack.pop())
        }

        tempStack.push(temp)
    }

    return tempStack

}

console.log(stackUsingSort(arr))