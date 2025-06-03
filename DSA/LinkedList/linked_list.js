// class Node{
//     constructor(value) {
//         this.value=value;
//         this.next=null;
//     }
// }


// class linkedList{
//     constructor() {
//         this.head=null;
//         this.tail=null;
//         this.size=0;
//     }

//     isEmpty(){
//         return this.size==0
//     }

//     append(value){
//         let newNode = new Node(value)
//         if(this.isEmpty()){
//             this.head=this.tail=newNode;
//         }else{
//             this.tail.next=newNode;
//             this.tail=newNode;
//         }

//         this.size++

//     }

//     prepend(value){
//         let newNode = new Node(value)

//         if(this.isEmpty()){
//             this.head=newNode
//         }else{
//             newNode.next=this.head;
//             this.head=newNode;
//         }
//         this.size++
//     }

//     removeFirst(){
//         if (this.isEmpty()) {
//             console.log('The list is empty');
            
//         }else{
//             this.head=this.head.next
//         }
//         this.size--
//     }

//     removeEnd(){
//         if (this.isEmpty()) {
//             console.log('The list is empty');
            
//         }else{
//             let prev=this.head
//             while (prev.next && prev.next.next) {
//                 prev=prev.next
//             }
//             if(prev.next){
//                 prev.next=null;
//                 this.size--
//             }
//         }
//     }

//     removeByValue(value){
//         if(this.isEmpty()){
//             console.log('The list is empty');
            
//         }

//         if(this.head==value){
//             this.head=this.head.next;
//             this.size--
//         }else{
//             let prev=this.head;
//             while (prev.next && prev.next.value!==value) {
//                 prev=prev.next
//             }

//             if(prev.next){
//                 prev.next=prev.next.next;
//                 this.size--
//             }else{
//                 console.log('There is no value in the list');
                
//             }
//         }
//     }

//     removeByIndex(index){
//         if(index<0 ||index>this.size){
//             console.log('The index is out of the bounds');
            
//         }
        
//         if(index==0){
//             this.head=this.head.next;
//         }else{
//             let prev=this.head;
//             for(let i=0;i<index-1;i++){
//                 prev=prev.next;
//             }
//             if(prev.next){
//                 prev.next=prev.next.next
//                 this.size--
//             }
//         }
//     }

//     insert(value,index){
//         if(index<0 || index>this.size){
//             console.log('The index is out fo the bounds');
            
//         }

//         let newNode = new Node(value)

//         if(index==0){
//             newNode.next=this.head;
//             this.head=newNode
//         }else{
//             let prev=this.head
//             for(let i=0;i<index-1;i++){
//                 prev=prev.next
//             }
//             newNode.next=prev.next;
//             prev.next=newNode;
//         }
//         this.size++
//     }

//     findMiddle(){
//         let slow=this.head;
//         let fast=this.head;
//         while(fast && fast.next){
//             slow=slow.next;
//             fast=fast.next.next

//         }
//         console.log(slow.value)
//     }
//     removeMiddle() {
//         if (this.isEmpty()) {
//             console.log('The list is empty');
//             return;
//         }
    
//         let slow = this.head;
//         let fast = this.head;
//         let prev = null;
    
//         while (fast && fast.next) {
//             fast = fast.next.next;
//             prev = slow;
//             slow = slow.next;
//         }
    
//         // Normal case: remove the middle
//         prev.next = slow.next;
    
//         if (slow === this.tail) {
//             this.tail = prev;
//         }
    
//         this.size--;
//     }
    

//     printList(){
//         let listValues='';
//         let curr=this.head;
//         while(curr){
//             listValues+=`${curr.value} -> `;
//             curr=curr.next
//         }
//         console.log(listValues)
//     }

// }


// let list = new linkedList()

// list.append(1)
// list.append(2)
// list.append(3)
// list.append(4)

// list.prepend(-1)
// list.prepend(-2)
// list.prepend(-3)
// list.prepend(-4)
// // list.removeFirst()
// // list.removeEnd()

// // list.removeByValue(2)
// list.removeByIndex(3)
// list.insert(5,5)
// list.printList()

// list.findMiddle()

// list.removeMiddle()
// list.printList()





class Node{
    constructor(value) {
        this.value=value;
        this.next=null;
    }
}


class linkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.size=0;
    }

    isEmpty(){
        return this.size===0;
    }

    append(value){
       let newNode =  new Node(value)

        if(this.head===null){
            this.head=this.tail=newNode;
        }else{
            this.tail.next=newNode;
            this.tail=newNode
        }
        this.size++
    }

    printList(){
        let listValues='';
        let curr=this.head;
        while(curr){
            listValues+=`${curr.value} -> `;
            curr=curr.next;
        }

        console.log(listValues)
    }
}

let list = new linkedList()

list.append(1)
list.append(2)
list.append(3)
list.append(4)

list.printList()