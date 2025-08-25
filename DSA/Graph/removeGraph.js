class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = new Set();
        }
    }

    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1]) {
            this.addVertex(vertex1);
        }

        if (!this.adjacencyList[vertex2]) {
            this.addVertex(vertex2);
        }

        this.adjacencyList[vertex1].add(vertex2);
        this.adjacencyList[vertex2].add(vertex1);
    }

    display() {
        for (let vertex in this.adjacencyList) {
            console.log(`${vertex} -> ${[...this.adjacencyList[vertex]].join(',')}`);
        }
    }

    removeEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1]) {
            this.adjacencyList[vertex1].delete(vertex2);
        }
        if (this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex2].delete(vertex1);
        }
    }

    removeVertex(vertex) {
        if (!this.adjacencyList[vertex]) return null;

        // Remove all edges connected to this vertex
        for (let neighbor of this.adjacencyList[vertex]) {
            this.adjacencyList[neighbor].delete(vertex);
        }

        // Remove the vertex itself
        delete this.adjacencyList[vertex];
    }
}

// Example usage
let graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'C');
graph.addEdge('D', 'A');
graph.addEdge('D', 'B');

console.log("Before removing vertex:");
graph.display();

graph.removeVertex('B');
console.log("\nAfter removing vertex B:");
graph.display();
