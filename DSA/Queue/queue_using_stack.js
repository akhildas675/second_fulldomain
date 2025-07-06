class QueueUsingStack {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  enqueue(value) {
    this.stack1.push(value); // Push into input stack
  }

  dequeue() {
    if (!this.stack1.length && !this.stack2.length) {
      return "The queue is empty";
    }

    if (!this.stack2.length) {
      while (this.stack1.length) {
        this.stack2.push(this.stack1.pop()); // use pop instead of shift
      }
    }

    return this.stack2.pop(); // Dequeue from output stack
  }

  print() {
    // Create safe copies for display
    const output = [...this.stack2].reverse(); // Reverse output stack
    const input = [...this.stack1];            // Input stack (as is)
    console.log([...output, ...input].join(" <- "));
  }
}
