// const person={
//     name:'Akhildas',
//     id:21,
// }

// function students(...place){
// console.log(`Hai, I am ${this.name}, I am from ${place}`);

// }

// students.call(person,'Palakkad')
// students.apply(person,['Palakkad'])
// const dom=students.bind(person,'Thrissur')

// dom()



// const person={
//     name:'Akhildas',
//     id:12,
// }


// function students(...place){
//     console.log(`My name is ${this.name} I am from ${place}`)
// }


// students.call(person,'Palakkad')




const person={
    name:'Akhildas',
    id:12,
}


function students(place){
    console.log(`I am ${this.name}, I am from ${place}`)
}

students.call(person,'Palakkad')