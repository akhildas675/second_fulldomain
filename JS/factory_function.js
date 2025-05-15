function factory(name,place){
    return {
        name,
        place,
        greet(){
            return `Hai I am ${this.name}, I am from ${this.place}`
        }
    }
}

const user = factory('Akhildas','Palakkad')

console.log(user.greet());
