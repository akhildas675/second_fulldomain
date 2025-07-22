class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}


class LinkedList{
    constructor(){
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
            this.tail=newNode;
        }
        this.size++
    }


    printList(){
        let listValues='';
        let curr=this.head;

        while(curr){
            listValues+=`${curr.value} -> `
            curr=curr.next;
        }
        console.log(listValues)
    }


   isPalindrome(){
    let fast=this.head;
    let slow=this.head;
    while(fast && fast.next){
        slow=slow.next;
        fast=fast.next.next;
    }

    let prev=null;
    let curr=slow;

    while(curr){
        let next=curr.next;
        curr.next=prev;
        prev=curr;
        curr=next;
    }


    let first=this.head;
    let second=prev;

    while(second){
        if(first.value!==second.value) return false;
        first=first.next;
        second=second.next;
    }
    return true



   }

}

let list = new LinkedList()


list.append(1)
list.append(2)
list.append(1)
list.append(2)
list.append(1)
list.append(1)

list.printList()
console.log(list.isPalindrome())