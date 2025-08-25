
//Shallow Copy



// const person={
//     name:'Akhildas',
//     age:23,
//     place:{
//         city:'Kochi',
//         state:'Kerala'
//     }
// }

// const user = Object.assign({},person)



// user.name='Akhil'

// user.place.city='Chennai'
// user.place.state='Tamilnadu'

// console.log(person);
// console.log(user)



//Deep copy 


const person={
    name:'Akhildas',
    age:23,
    place:{
        city:'Thrissur',
        state:'Kerala'
    }
}

// const user = JSON.parse(JSON.stringify(person))

const user = structuredClone(person)




user.name='Arun';

user.place.city="Manglore"

user.place.state='Karnataka'

console.log(user);
console.log(person);
