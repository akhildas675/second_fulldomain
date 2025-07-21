// Prototype  Inheritance

// Using constructor function


    // function Person(name){
    //     this.name=name
    // }

    // Person.prototype.greet=function(){
    //     console.log(`Hello User welcome  ${this.name}`)
    // }

    // const user = new Person('Akhildas')
    // const user2 = new Person('Rahul')

    // user.greet()
    // user2.greet()


    class Parent{
        greet(){
            console.log('The parent class')
        }
    }

    class Child extends Parent {}

    const child = new Child();
    child.greet()
