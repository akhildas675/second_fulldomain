class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class linkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  append(value) {
    let newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  prepend(value) {
    let newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.size++;
  }

  insert(value, index) {
    if (index < 0 || index > this.size) {
      console.log("The index is out of the bounds");
    }
    let newNode = new Node(value);
    if (index == 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }

      newNode.next = prev.next;
      prev.next = newNode;
    }
    this.size++;
  }

  search(value) {
    if (this.isEmpty()) {
      console.log("The list is empty");
    }

    if (this.head.value == value) {
      return true;
    } else {
      let prev = this.head;
      while (prev !== null) {
        if (prev.value == value) {
          return true;
        }
        prev = prev.next;
      }
      return false;
    }
  }

  removeFirst(){
    if(this.isEmpty()){
      console.log('The list is empty');
    }else{
      this.head=this.head.next
    }
    this.size--
  }


  removeEnd(){
    if(this.isEmpty()){
      console.log('The list is empty')
    }
    let prev=this.head;
    while(prev.next && prev.next.next){
      prev=prev.next
    }
    if(prev.next){
      prev.next=null
    }
    this.size--
  }


  deleteByValue(value){
    if(this.isEmpty()){
      console.log('The list is empty')
    }

    
    if(this.head.value==value && this.head.value){
      this.head=this.head.next;
    }else{
      let prev=this.head;
      while(prev && prev.next.value!==value){
        prev=prev.next
      }
      if(prev.next){
        prev.next=prev.next.next;
        this.size--
      }
    }
  }

  deleteByIndex(index){
    if(index<0 || index>this.size){
      console.log('The index is out of the bounds');
      
    }
    if(index===0){
      this.head=this.head.next;
    }else{
      let prev=this.head;
      for(let i=0;i<index-1;i++){
        prev=prev.next;
      }
      if(prev.next){
        prev.next=prev.next.next
        this.size--
      }
    }
  }

  middleElement(){
    let fast=this.head;
    let slow=this.head;
    while(fast && fast.next){
      fast=fast.next.next;
      slow=slow.next;
    }
    return slow.value
  }

  removeMiddleElement(){
    let fast=this.head;
    let slow=this.head;
    let prev=null;
    while(fast && fast.next){
      fast=fast.next.next;
      prev=slow;
      slow=slow.next
    }
    prev.next=slow.next;
    if(slow===this.tail){
      slow=this.tail
    }
    this.size--

  }
findLastFive() {
    if (!this.head) return;

    let first = this.head;
    let second = this.head;

    // Move `first` pointer 5 steps ahead
    for (let i = 0; i < 5; i++) {
        if (first.next) {
            first = first.next;
        } else {
            // If list has less than 5 nodes
            break;
        }
    }

    // Move both pointers until `first` reaches the end
    while (first.next) {
    console.log('first.value',first.value)
    console.log('second.value',second.value)
    
        first = first.next;
        second = second.next;
    }

    // Now `second` points to the node where last 5 start
    let result = "";
    while (second) {
        result += `${second.value}->`;
        second = second.next;
    }

    console.log(result);
}






  reverse(){
    let curr=this.head;
    let prev=null;
    while(curr){
      let next=curr.next;
      curr.next=prev;
      prev=curr;
      curr=next;
    }
    this.head=prev
  }

  printList() {
    let curr = this.head;
    let listValues = "";
    while (curr) {
      listValues += `${curr.value} -> `;
      curr = curr.next;
    }
    console.log(listValues);
  }
}
let list = new linkedList();

list.append(1);
list.append(1);
list.append(5);
list.append(2);
list.append(12);
list.append(31);
list.append(13);
list.append(14);
list.append(13);

list.prepend(-1);
list.prepend(-2);
list.prepend(-3);
list.prepend(-4);
list.insert(0, 4);
console.log(list.search(3));
// list.removeFirst()
// list.removeEnd()

// list.deleteByValue(3)

// list.deleteByIndex(4)

// console.log(list.middleElement())

// list.removeMiddleElement()
list.reverse()
list.printList();
list.findLastFive()



