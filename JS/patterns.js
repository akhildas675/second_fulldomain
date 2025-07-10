//Right align pattern

// function rightAlignPattern(num) {
//   for (let i = 1; i <= num; i++) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//       row += "* ";
//     }
//     console.log(row);
//   }
// }

// rightAlignPattern(5);


//LeftAlign pattern


// function leftAlignPattern(num){
//    for(let i=0;i<=num;i++){
//     let row=" "; 
//     for(let j=1;j<=num-i;j++){
//         row+='  '
//     }

//     for(let k=1;k<=i;k++){
//         row+='* '
//     }

//     console.log(row)
//    }
// }

// leftAlignPattern(5)

// Inverted Right-Angled Star Triangle



// function invertedRightAngled(n){
//     for(let i=n;i>=1;i--){
//         let row="";
        
//         for(let j=1;j<=i;j++){
            
//             row+='* ';
            
//         }

//         console.log(row)
//     }
// }

// invertedRightAngled(5)


//Number left align pattern


// function NumberLeftAlign(n){
//     for(let i=1;i<=n;i++){
//         let row='';
//         for(let j=1;j<=i;j++){
//             row+= j+' '
//         }
//         console.log(row)
//     }
// }

// NumberLeftAlign(5)




// function leftPattern(n){
//     for(let i=1;i<=n;i++){
//         let row='';
//         for(let j=1;j<=i;j++){
//             row+='* '
//         }
//         console.log(row);
        
//     }
// }

// leftPattern(5)



// function NumberPattern(n){

//     for(let i=1;i<=n;i++){
//         let row='';
//         for(let j=1;j<=i;j++){
//             row+= j +" "
//         }
//         console.log(row)
//     }
// }

// NumberPattern(5)

// let val=[1,2,3,4,5]
// let result=[]
// for(let i=0;i<val.length;i++){
//     let obj={}
    
//     for(let j=0;j<=i;j++){
//         let key=`a${j+1}`
//         obj[key]=val[j]
       
//     }
//         result.push(obj)
// }
// console.log(result);
