/*

Pending Bucket Practicals Questions

1.create a function to find average of even numbers in an array;
2.ForEach - Sum of array
3.Removing the nth element from an array;
4.Create a JavaScript function that uses the rest parameter (...) to accept any number of arguments and returns their sum.
    
6.Write a JavaScript function to check whether a given string is a palindrome or not.
7.Change 'hello world' to 'world hello'
8.Concatenating arrays, use spread operator(task)
9.Combined ternary operator
10.Remove duplicates from an array using reduce 
11.Combine two objects 
12.Delete property from an object
13.remove multiples of 3 from array
14.how to check if an object is empty
15.find key corresponds to highest value in an object 
16.capitalize every words in a sentence

//--

17.remove duplicate even numbers from array,
18.how to remove an array element without in-built methods,
19.how to remove a character from string?
20.sum of even numbers using forEach
21.remove even numbers from an array
22.find the count of 1 in the array
23.merge 2 array using apply







*/

//1.Example Input:
// const arr=[4, 7, 10, 13, 8, 5, 2]

// Expected Output:
// Average of even numbers: 6

// function findAverageEvenNumbers(arr){
//     let sumEven=0;
//     let count=0;

//     for(let i=0;i<arr.length;i++){
//         if(arr[i]%2==0){
//             sumEven+=arr[i];
//             count++
//         }
//     }
//     return sumEven/count
// }

// console.log(findAverageEvenNumbers(arr))

//-----------------------------------------------------

// 2. ForEach - Sum of array

// function forEachSum(arr){
//     let sum=0;
//      arr.forEach(element => {

//         sum+=element
//     });
//     return sum
// }

// console.log(forEachSum(arr))
//---------------------------------------------------------------------

// 3. Removing the nth element from an array

// Array: [10, 20, 30, 40, 50]
// n = 2

// const arr = [10, 20, 30, 40, 50];

// let n = 2;

// function removeNthEle(arr, n) {
//   for (let i = n; i < arr.length - 1; i++) {
//     arr[i] = arr[i + 1];
//   }
//   arr.length = arr.length - 1;
//   return arr;
// }

// console.log(removeNthEle(arr, n));

// using push

// function removeNthEle(arr,n){
//     let newArr=[];

//     for(let i=0;i<arr.length;i++){
//         if(i!==n){
//             newArr.push(arr[i])
//         }
//     }
//     return newArr
// }

// console.log(removeNthEle(arr,2))

//using splice

// function  removeNthEle(arr,n){

//     for(let i=0;i<arr.length;i++){
//         if(i==n){
//             arr.splice(i,1)
//         }
//     }
//     return arr

// }

// console.log(removeNthEle(arr,2))

//---------------------------------------------------------------------

//4.

// function findSumRest(...rest){
// let sum=0;
//    for(let i=0;i<rest.length;i++){
//         sum+=rest[i]
//    }
//    return sum
// }

// console.log(findSumRest(5, 10, 15, 20))

//---------------------------------------------------------

//5.

// function* multipleOfNum(){

//     let i=0
//     while(true){
//         yield i*3;
//         i++
//     }

// }

// const gen = multipleOfNum()

// for(let i=0;i<=10;i++){
//     console.log(gen.next().value)
// }

//-------------------------------------------------

//6.

// function checkPalindrome(str){
//     let val='';
//     for(let i=str.length-1;i>=0;i--){
//         val+=str[i]
//     }
//     if(str==val){
//         return `${str} is Palindrome`
//     }
//     return `${str} not is Palindrome`
// }

// console.log(checkPalindrome('akhildas'))
// console.log(checkPalindrome('malayalam'))

//--------------------------------------------------------

//7.

// function reverseWords(words){
//     let word=words.split(' ')

//     for(let i=0;i<word.length;i++){
//         word[i]=word[i].split('').reverse().join('')
//     }
//     return word.join(' ')

// }

// console.log(reverseWords('hello world'))

//without in-build methods

// function reverseWords(words){

//     let result='';
//     let word='';

//     for(let i=0;i<=words.length;i++){
//         if(words[i]===' ' || i==words.length){
//             for(let j=word.length-1;j>=0;j--){
//                 result+=word[j]
//             }

//             if(i!==words.length){
//                 result+=' '
//             }
//             word=''
//         }else{
//             word+=words[i]
//         }

//     }
//     return result

// }

// console.log(reverseWords('hello world'))

// hello world to world hello

// function reverseWords(sentence) {
//   let word = "";
//   let result = "";
//   let words = [];

//   for (let i = 0; i <= sentence.length; i++) {
//     if (sentence[i] === " " || i == sentence.length) {
//       if (word !== "") {
//         words[words.length] = word;
//         word ="";
//       }
//     } else {
//       word += sentence[i];
//     }
//   }

//   for (let i = words.length - 1; i >=0; i--) {
//     result += words[i];
//     if (i !== 0) {
//       result += " ";
//     }
//   }
//   return result;
// }

// console.log(reverseWords("hello world"));





// function reverseWord(sentence){
//     return sentence.split(' ').reverse().join(' ')
// }
// console.log(reverseWord("hello world"))


//--------------------------------------------------------------------

//8.concat


// function concatArrays(arr1,arr2,arr3){
//     return [...arr1,...arr2,...arr3]
// }

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [7, 8];

// console.log(concatArrays(arr1, arr2, arr3))

//--------------------------------------------------------------------

// 9.Combined ternary operator


// function combined(x){
//     return x > 0 ? "Positive" : x < 0 ? "Negative" : "zero"
// }

// console.log(combined(10))
// console.log(combined(0))
// console.log(combined(-2))

//

//--------------------------------------------------------------------



// 10.Remove duplicates from an array using reduce 


// function removeDuplicates(arr){
    
//     return arr.reduce((acc,cuc)=>{
//        if(!acc.includes(cuc)){
//         acc.push(cuc)
//        }
//        return acc

//     },[])
// }

// const numbers = [1, 2, 2, 3, 4, 4, 5];

// console.log(removeDuplicates(numbers))

//11.Combine two objects 

// const obj1 = { a: 1, b: 2 };
// const obj2 = { b: 3, c: 4 };

// function combineObjects(obj1, obj2) {

//     return {...obj1,...obj2}

//  }






// function combineObjects(obj1, obj2) { 
    
//     const combined=Object.assign({},obj1,obj2)
//     return combined
// }




// console.log('Object.assign..',combineObjects(obj1, obj2))



//--------------------------------------------------------------------


// 12.Delete property from an object 

// function deleteObj(obj,key){

//     delete obj[key]
//     return obj

// }
// const person = { name: "Akhildas", age: 24, city: "Kochi" };

// console.log(deleteObj(person,"age"))



// function deleteObj(obj,key){

//     let result={}

//     for(let ele in obj){
//         if(ele!==key){
//             result[ele]=obj[ele]
//         }
//     }
//     return result

// }

//  const person = { name: "Akhildas", age: 24, city: "Kochi" };

// console.log(deleteObj(person,'age'))



//-----------------------------------------------------------------


// 13.remove multiples of 3 from array


// function removeMul3(arr){
//     let result=[]

//     for(let i=0;i<arr.length;i++){
//         if(arr[i]%3!==0){
//             result.push(arr[i])
//         }
//     }
//     return result

// }


// console.log(removeMul3([1,5,32,5,32,5,74,2,15,13,16,12,9]))



//------------------------------------------------------------------




// 14.how to check if an object is empty




// function checkEmpty(obj){

//     return Object.values(obj).length

// }

// const obj1 ={a:1,b:14,c:16}
// const obj2 ={}

// console.log(checkEmpty(obj1))
// console.log(checkEmpty(obj2))




//---------------------------------------------------------------

// 15.find key corresponds to highest value in an object 


// function findMaxKey(obj){
//     let max = -Infinity;
//     for(let key in obj){
//         if(obj[key]>max){
//             max=obj[key]
//         }
//     }
//     return max
// }
// const scores = { Alice: 85, Bob: 92, Charlie: 88 };
// console.log(findMaxKey(scores))



//-----------------------------------------------------------------





//16.capitalize every words in a sentence

// function capitalizeWords(sentence) {

//   let words = sentence.split(' ');

//   for(let i=0;i<words.length;i++){
//     words[i]=words[i].charAt(0).toUpperCase()+words[i].slice(1)
//   }
//   return words.join(' ')

// }

// const str = "welcome to soleway ecommerce project";
// console.log(capitalizeWords(str))



