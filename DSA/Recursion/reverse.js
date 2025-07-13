// Input: "hello" → Output: "olleh"
function reverseString(str,i=0,val='') { 

    if(str.length==i){
        return val
    }

    val+=str[str.length-1-i]
    return reverseString(str,i+1,val)
}

console.log(reverseString('hello'))
