class Queue{
    constructor() {
        this.item=[];
    }

    enqueue(value){
        return this.item.push(value)
    }

    dequeue(){
        if(this.isEmpty()){
            console.log('The queue is empty');
            
        }

        return this.item.shift()
    }

    isEmpty(){
        return this.item.length===0
    }

    peak(){
        if(this.isEmpty()){
            console.log('The queue is empty');
            
        }

        return this.item[this.item[0]]
    }

    print(){
        if(this.isEmpty()){
            return `The queue is empty`
        }

        console.log(this.item.join('->'));
        
    }


}

let queue= new Queue()

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(5)


queue.print()
