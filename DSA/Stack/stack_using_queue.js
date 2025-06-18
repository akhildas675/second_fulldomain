class StackUsingQueue{
    constructor() {
        this.queue1=[]
        this.queue2=[]
    }

    push(value){
        this.queue1.push(value)
    }

    pop(){
        if(!this.queue1.length){
            return `The stack is empty`
        }

        while(this.queue1.length>1){
            this.queue2.push(this.queue1.shift());
        }

        const popped = this.queue1.shift();
        [this.queue1,this.queue2]=[this.queue2,this.queue1];
        return popped;
    }

    print(){
        console.log(this.queue1.join(' -> '));
        
    }
}

let stackQueue=new StackUsingQueue()
stackQueue.push(7)
stackQueue.push(2)
stackQueue.push(4)
stackQueue.push(8)
stackQueue.push(3)
stackQueue.print()
console.log(stackQueue.pop());