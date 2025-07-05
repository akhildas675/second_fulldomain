class Node{
    constructor(value) {
        this.value=value;
        this.next=null;
    }
}


class StackUsingLinkedList{
    constructor() {
        this.top=null;
        this.size=0
    }

    push(value){
        let newNode = new Node(value);

        newNode.next=this.top;
        this.top=newNode
        this.size++
    }

    pop(){

        if(!this.top){
            console.log('the stack is empty')
        }

        let removedValue=this.top.value;
        this.top=this.top.next;
        this.size--
        return removedValue

    }

    peak(){
      
        return this.top ? this.top.value :'Stack is empty'
    }

    print(){
        let current =this.top;
        let result ='';

        while(current){
            result+=current.value + ' -> ';
            current=current.next
        }
        console.log(result + 'null');
        
    }

    isEmpty(){
        return this.size===0;
    }
}


const stack = new StackUsingLinkedList();

stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)


stack.print()