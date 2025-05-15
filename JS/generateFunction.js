//Generate function example

// function* generate(){
//   yield a=10
//   yield d='Hello user'
//   yield b=20
//   yield c=30

// }


// const gen=generate()

// console.log(gen.next().value)
// gen.next().value // skip the execution
// console.log(gen.next().value)
// console.log(gen.next().value)





//print even number using generate function

// function* printNumber(limit){
//   for(let i=0;i<=limit;i++){
//     yield i
//   }
// }

// const gen=printNumber(10)

// for(let num of gen){
//   console.log(num);
  
// }



//Print even number in reverse order

// function* printEvenNumber(limit){
//   for(let i=limit;i>0;i--){
//     if(i%2==0){

//         yield i;
//     }
//   }
// }

// const even=printEvenNumber(10)

// for(let key of even){
//     console.log(key);
    
// }
