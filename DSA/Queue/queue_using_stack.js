class QueueUsingStack {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  enqueue(value){
    this.stack1.push(value)
  }

  dequeue(){
    if(!this.stack1.length && !this.stack2.length){
        return `The queue is empty`
    }
    if(!this.stack2.length){
        while(this.stack1.length){
            this.stack2.push(this.stack1.shift())
        }
    }
    return this.stack2.pop()
  }
  print(){
    console.log([...this.stack2.reverse(),...this.stack1].join("<-"));
    
  }
}


let queueStack = new QueueUsingStack()

queueStack.enqueue(5)
queueStack.enqueue(3)
queueStack.enqueue(6)
queueStack.enqueue(2)
queueStack.enqueue(1)

console.log("Dequeued:",queueStack.dequeue());

queueStack.print()
