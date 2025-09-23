// Prototype  Inheritance

// Using constructor function


    function person(name){
        this.name=name
    }

    person.prototype.greet=function(){
        console.log(`Hello User welcome  ${this.name}`)
    }

    const user = new person('Akhildas')
    const user2 = new person('Rahul')

    user.greet()
    user2.greet()


    // class Parent{
    //     greet(){
    //         console.log('The parent class')
    //     }
    // }

    // class Child extends Parent {}

    // const child = new Child();
    // child.greet()
