class MaxHeap{
    constructor(){
        this.heap=[]
    }


    insert(value){
        this.heap.push(value);
        this.bubbleUp()
    }


    bubbleUp(){
        let index = this.heap.length -1;
        while(index>0){
            let parentIndex = Math.floor((index-1)/2)
            if(this.heap[index]<=this.heap[parentIndex]) break

            [this.heap[index],this.heap[parentIndex]]=[this.heap[parentIndex],this.heap[index]]
            index=parentIndex
        }
    }

    extractMax(){
        if(this.heap.length==0) return null;
        if(this.heap.length==1) return this.heap.pop()
            const max = this.heap[0]

            this.heap[0]=this.heap.pop()
            this.heapify(0)
            return max
    }

    heapify(i){
        let leftChildIndex=2*i+1;
        let rightChildIndex =2*i+2;
        let largest=i

        if(leftChildIndex<this.heap.length && this.heap[leftChildIndex]>largest){
            largest=leftChildIndex;
        }

        if(rightChildIndex <this.heap.length && this.heap[rightChildIndex]>largest){
            largest=rightChildIndex
        }

        if(largest!==i){
            [this.heap[i],this.heap[largest]]==[this.heap[largest],this.heap[i]]
            this.heapify(largest)
        }
    }
}


const maxHeap = new MaxHeap()

maxHeap.insert(9)
maxHeap.insert(4)
maxHeap.insert(7)
maxHeap.insert(8)

console.log(maxHeap.heap)