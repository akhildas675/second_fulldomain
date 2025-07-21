//  Min Heap Implementation
class MinHeap {
    constructor() {
        this.heap = [];
    }

    // Insert value into heap
    insert(value) {
        this.heap.push(value);
        console.log(this.heap)
        this.bubbleUp();
    }

    // Move the last inserted value up to maintain heap property
    bubbleUp() {
        let index = this.heap.length - 1;
        console.log('index ->',index)

        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);

            if (this.heap[index] >= this.heap[parentIndex]) {
                break;
            }

            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
        }
    }

    // Remove and return the minimum value from the heap
    extractMin() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const min = this.heap[0];
        this.heap[0] = this.heap.pop(); // Move last to root
        this.heapify(0); // Restore heap
        return min;
    }

    // Heapify (percolate down) from index i
    heapify(i) {
        let left = 2 * i + 1;
        let right = 2 * i + 2;
        let smallest = i;

        if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
            smallest = left;
        }

        if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
            smallest = right;
        }

        if (smallest !== i) {
            [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
            this.heapify(smallest);
        }
    }

    // Print the heap array
    printHeap() {
        console.log("Heap:", this.heap.join(" -> "));
    }
}


// 🧪 Example usage:
const minHeap = new MinHeap();

minHeap.insert(42);
minHeap.insert(56);
minHeap.insert(35);
minHeap.insert(13);
minHeap.insert(2);


minHeap.printHeap(); 

console.log("Extracted Min:", minHeap.extractMin());

minHeap.printHeap(); 