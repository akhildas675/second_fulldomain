function reverseString(str){
    let stack=[];

    for(let i=0;i<str.length;i++){
        stack.push(str[i])
        console.log(stack)
    }
    let rev=''
    while(stack.length>0){
        rev+=stack.pop()
        console.log(rev)
    }

    return rev
}

console.log(reverseString('Akhildas'))