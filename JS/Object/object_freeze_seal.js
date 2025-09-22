//Object.freeze


const person = {
    name: 'Akhildas',
    age: 23,
    address: {
        place: 'Thrissur'
    }
}



function deepFreeze(obj){
    if(obj==null || typeof obj!=='object'){
        return obj
    }

    Object.keys(obj).forEach((key)=>{
       deepFreeze(obj[key])
    })

    return Object.freeze(obj)
}


deepFreeze(person)

person.name="Akhil";
person.address.place="Kochi";

console.log(person)


// Object.seal


// const person={
//     name:'Akhildas',
//     age:23,


// }

// Object.seal(person);

// person.name='Akhil'

// person.city='Palakkad'

// console.log(person)