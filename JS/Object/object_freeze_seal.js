//Object.freeze


// const person={
//     name:'Akhildas',
//     age:23
// }

// Object.freeze(person)

// person.name='Akhil';
// person.city='Palakkad';

// console.log(person)


// Object.seal


const person={
    name:'Akhildas',
    age:23,

}

Object.seal(person);

person.name='Akhil'

person.city='Palakkad'

console.log(person)