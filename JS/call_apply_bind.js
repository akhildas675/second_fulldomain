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



const person={
    name:"Akhildas",
    id:21,

}


function student(...place){
    console.log(`Hi, I am ${this.name}, I am from ${place}`);
    
}


student.call(person,'Palakkad')
student.apply(person,['Kochi'])
const dom=student.bind(person,'Thrissur')

dom()