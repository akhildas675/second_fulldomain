
//call

// const person = {
//   name: "Akhildas",
//   id: 263,
// };

// function student(...place) {
//   console.log(`My name is ${this.name} , I am from ${place}`);
// }

// student.call(person, "Palakkad");



//apply


// const person={
//     name:'akhildas',
//     id:23,
// }


// function student(...place){
//     console.log(`Hai I am ${this.name} , I am from ${place}`);
    
// }


// student.apply(person,['Palakkad'])


//bind


// const person={
//     name:'Akhildas',
//     id:876
// }


// function student(...place){
//     console.log(`My name is ${this.name}, I am from ${place}`);
    
// }

// let result=student.bind(person,'Palakkad')

// result()



//Call Apply Bind

// const person = {
//     name:'Akhildas',
//     age:'22'
// }

// function greet(place){
//     console.log(`I am ${this.name} my age is ${this.age}, I am from ${place}`)
// }

// const user = greet.call(person,'Palakkad')
// const userApply = greet.apply(person,['Kochi'])
// // const userBind = greet.bind(person,'Thrissur')

// // userBind()

// const delayedGreet = greet.bind(person, 'Calicut');
// setTimeout(delayedGreet, 1000); 
