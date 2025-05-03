class MinHeap{
    constructor() {
        this.heap=[]
    }

    insert(value){
        this.heap.push(value)
        this.bubbleUp()
    }

    bubbleUp(){
        let index=this.heap.length-1;
        while(index>0){
            let parentIndex=Math.floor((index-1)/2)
            if(this.heap[index]>=this.heap[parentIndex]) break;

            [this.heap[index],this.heap[parentIndex]]=[this.heap[parentIndex],this.heap[index]]

            index=parentIndex;
        }
    }

    extractMin(){
        if(this.heap.length==0) return null;
        if(this.heap.length==1) return this.heap.pop();

        const min=this.heap[0];
        this.heap[0]=this.heap.pop();
        this.heapify(0)
        return min
    }

    heapify(i){
        let leftChildIndex=2*i+1
        let rightChildIndex=2*i+2;
        let smallest=i;
        

        if(leftChildIndex<this.heap.length && this.heap[leftChildIndex]<this.heap[smallest]){
            smallest=leftChildIndex
        }

        if(rightChildIndex<this.heap.length && this.heap[rightChildIndex]<this.heap[smallest]){
            smallest=rightChildIndex
        }
        if(smallest!==i){
            [this.heap[i],this.heap[smallest]]=[this.heap[smallest],this.heap[i]]
            this.heapify(smallest)
        }
    }
}

const minHeap=new MinHeap()

minHeap.insert(4)
minHeap.insert(7)
minHeap.insert(9)
minHeap.insert(3)
minHeap.insert(1)

minHeap.heapify(0)

console.log(minHeap.heap)