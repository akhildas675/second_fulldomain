class Node{
    constructor(value) {
        this.value=value;
        this.next=null;
        this.prev=null;
    }
}


class Doubly{
    constructor() {
        this.head=null;
        this.tail=null;
        this.size=0;
    }


    isEmpty(){
        return this.size==0
    }


    append(value){
        let newNode = new Node(value);
        if(this.isEmpty()){
            this.head=this.tail=newNode;
        }else{
            this.tail.next=newNode;
            newNode.prev=this.tail;
            this.tail=newNode
        }
        this.size++
    }



    print(){
        let curr = this.head;
        let listValues='';

        while(curr){
            listValues+=`${curr.value} <-> `;
            curr=curr.next;
        }

        console.log(listValues)
    }
    printLast(){
        let curr = this.tail;
        let listValues='';

        while(curr){
            listValues+=`${curr.value} <-> `;
            curr=curr.prev;
        }

        console.log(listValues)
    }


    
}


const list = new Doubly();

for(let i=0;i<=10;i++){
    list.append(i)
}

list.print()
list.printLast()