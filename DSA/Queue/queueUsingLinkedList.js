class Node{
    constructor(value) {
        this.value=value;
        this.next=null;

    }
}

class queueUsingLinkedList{
    constructor(){
        this.front=null;
        this.rear=null;
        this.size=0;
    }

    enqueue(value){
        let newNode = new Node(value);
        if(!this.front){
            this.front=this.rear=newNode;
        }else{
            this.rear.next=newNode;
            this.rear=newNode
        }

        this.size++
    }

    dequeue(){
        if(!this.front){
            console.log('The queue is empty')
        }
        let removed=this.front.value;
        this.front = this.front.next

        if(!this.front){
            this.rear=null;
        }

        this.size--;
        return removed
    }

    print(){
        let curr=this.front;
        let result='';
        while(curr){
            result+=`${curr.value}  -> `;
            curr=curr.next;
        }

        console.log(result)
    }


}


let queue = new queueUsingLinkedList()


queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)

queue.print()

console.log('dequeue -> ',queue.dequeue())