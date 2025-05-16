class Stack{
    constructor() {
        this.arr=[]
    }

    push(value){
        this.arr.push(value)
    }

    isEmpty(){
       return this.arr.length===0
    }

    pop(){
        if(this.isEmpty()){
            console.log('The stack is empty');
            
        }
        return this.arr.pop()
    }

    peak(){
        if(this.isEmpty()){
            console.log('The stack is empty');
            
        }
        return this.arr[this.arr.length-1]
    }

    print(){
        console.log(this.arr.toString());
        
    }
}

let stack = new Stack()


stack.push(5)
stack.push(6)
stack.push(8)
stack.push(3)

stack.print()