class Graph{
    constructor() {
        this.adjacencyList={}
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex]=new Set();
        }
    }

    addEdge(vertex1,vertex2){
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
        }

        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }

    display(){
        for(let vertex in this.adjacencyList){
            console.log(`${vertex} -> ${[...this.adjacencyList[vertex]].join(', ')}`);
            
        }
    }
}

let graph = new Graph()


graph.addVertex("a")
graph.addVertex("b")
graph.addVertex("c")

graph.addEdge("a","b")
graph.addEdge("a","c")
graph.addEdge("b","c")
graph.addEdge("b","a")


graph.display()