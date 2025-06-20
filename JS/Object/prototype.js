// function person(name){
//     this.name=name
// }

// person.prototype.sayHello = function(){
//     console.log(`Hi all I am ${this.name}`);
    
// }

// const user1=new person('Akhildas')
// const user2=new person('Akhil')

// user1.sayHello()
// user2.sayHello()



function person (name){
    this.name=name
}

person.prototype.greet=function(){
    console.log(`Hi i am ${this.name}`);
    
}


const user1= new person('Akhildas')
const user2= new person('Das')

user1.greet()
user2.greet()

