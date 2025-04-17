//Generate function example

// function* generate(){
//     yield a=10
//     yield b=20
//     yield c=30
// }

// const gen=generate()

// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());


//print even number using generate function

// function* printNumbers(limit){
//     for(let i=1;i<=limit;i++){
//         if(i%2==0){
//             yield i
//         }
//     }
// }


// const gen=printNumbers(10)

// for(let num of gen){
//     console.log(num);
// }


//Print even number in reverse order

function* printEvenNumber(limit){
  for(let i=limit;i>0;i--){
    if(i%2==0){

        yield i;
    }
  }
}

const even=printEvenNumber(10)

for(let key of even){
    console.log(key);
    
}
