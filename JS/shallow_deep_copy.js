
//Shallow Copy



// const person={
//     name:'Akhildas',
//     age:23,
//     address:{
//         place:'Kochi',
//         state:'Kerala'
//     }
// }

// const user = Object.assign({},person)

// user.address.place='Thrissur';
// user.name='Akhil'


// console.log('shallow copy ',user)
// console.log('shallow copy ',person)



//Deep copy 



const person={
    name:'Akhildas',
    age:24,
    address:{
        place:'Kochi',
        state:'Kerala'
    }
}


const user = JSON.parse(JSON.stringify(person))

user.name='Akhil'

user.address.place='Manglore'
user.address.state="Karnataka"

console.log('deep copy',user)
console.log('deep copy',person)