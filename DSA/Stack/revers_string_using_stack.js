function reverseString(str){
    let stack=[];

    for(let i=0;i<str.length;i++){
        stack.push(str[i])
    }
    let rev=''
    while(stack.length>0){
        rev+=stack.pop()
    }

    return rev
}

console.log(reverseString('Akhildas'))