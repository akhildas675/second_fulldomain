class Node{
    constructor(value) {
        this.value=value;
        this.next=null
    }
}


class LinkedList{
    constructor() {
        this.head=null;
        this.tail=null;
        this.size=0
    }

    isEmpty(){
        return this.size===0
    }

    append(value){
        let newNode = new Node(value);
        if(this.isEmpty()){
            this.head=this.tail=newNode
        }else{
            this.tail.next=newNode;
            this.tail=newNode
        }
        this.size++

    }

    removeOdd(){
        

        while(this.head && this.head.value%2!==0){
            this.head=this.head.next;
            this.size--
        }

        let curr=this.head;

        while(curr && curr.next){
            if(curr.next.value%2!==0){
                curr.next=curr.next.next;
                this.size--
            }else{
                curr=curr.next
            }
        }

      this.tail=curr

        
    }

    printList(){
        let curr=this.head;
        let listValues='';
        while(curr){
            listValues+= `${curr.value}->`;
            curr=curr.next
        }

        console.log(listValues)
    }
}

let list = new LinkedList()

list.append(1)
list.append(2)
list.append(3)
list.append(4)
list.append(5)
list.append(6)

list.removeOdd()

list.printList()