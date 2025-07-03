//1.Write a JavaScript program to check two numbers and return true if one of the number is 100 or if the sum of the two numbers is 100

const isEqualTo100=(a,b)=>a==100 || b==100

console.log(isEqualTo100(10,100))
console.log(isEqualTo100(100,10))
console.log(isEqualTo100(10,10))




//2.Write a JavaScript program to get the extension of a filename.

const getFileExtension =(str)=>str.slice(str.lastIndexOf('.'))

console.log(getFileExtension('index.html'))
console.log(getFileExtension('javascript.js'))

console.log(getFileExtension('webpack.config.js'))


//3.Write a JavaScript program to replace every character in a given string with the character following it in the alphabet


const moveCharForward =(str)=>
    str.split('')
    .map(char=>String.fromCharCode(char.charCodeAt(0)+1))
    .join('');
    console.log(moveCharForward('abcd'))
    console.log(moveCharForward('z'))


//4.Write a JavaScript program to get the current date.
// Expected Output:
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy


const formatDate=(date=new Date())=>{
    const days=date.getDay();
    const month=date.getMonth();
    const year=date.getFullYear()
    return `${days}/ ${month} / ${year}`
}

console.log((formatDate()))



/*

Exercise 5:
Write a JavaScript program to create a new string adding "New!" in front of a given string.
If the given string begins with "New!" already then return the original string.

**/

const addNew =(str)=> str.indexOf('New!')==0 ? str : `New! ${str}`;

console.log(addNew('New! Offers'))
console.log(addNew('10% Offers'))
