let array = [23, { a: 20, b: { c: 52 } }, [[10, 50]], undefined, null, [10, 50, 40],[[[70],50]]];

let sum=0
const findSum=(value)=>{
    if(typeof value==='number'){
        sum+=value
    }else if(typeof value==='object' && value!==null){
        for(let key in value){
            findSum(value[key])
        }
    }
}

for(let i=0;i<array.length;i++){
    findSum(array[i])
}

console.log(sum)