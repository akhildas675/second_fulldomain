let str='hello world from javascript'


function upperCase(str){

   return str
   .split(' ').map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ')
}


console.log(upperCase(str))