class Node{
    constructor(value) {
        this.value=value;
        this.next=null;
    }
}

class Node{
    constructor() {
        this.head=null;
        this.tail=null;
        this.size=0;
    }

    isEmpty(){
        return this.size==0
    }

    addEnd(value){
        let newNode = new Node(value);

        if(this.isEmpty()){
            this.head=this.tail=newNode;
        }else{
            
        }
    }
}