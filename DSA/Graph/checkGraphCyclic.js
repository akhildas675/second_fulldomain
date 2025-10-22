class Graph {
  constructor() {
    this.adjacentList = {};
  }

  addVertex(vertex) {
    if (!this.adjacentList[vertex]) {
      this.adjacentList[vertex] = new Set();
    }
  }

  addEdge(vertex1, vertex2) {
    if (!this.adjacentList[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.adjacentList[vertex2]) {
      this.addVertex(vertex2);
    }

    this.adjacentList[vertex1].add(vertex2);
    this.adjacentList[vertex2].add(vertex1);
  };


  isCyclic(){
    let visited=new Set();

    for(let vertex in this.adjacentList){
        if(!visited.has(vertex)){
            if(this.dfsCycle(vertex,visited,null)){
                return true
            }
        }
    }
    return false
  }


  dfsCycle(vertex,visited,parent){
    visited.add(vertex);

    for(let neighbor of this.adjacentList[vertex]){
        if(!visited.has(neighbor)){
            if(this.dfsCycle(neighbor,visited,vertex)){
                return true;
            }
        }else if(neighbor!==parent){
            return true;
        }
    }
    return false
  }

  display() {
    for (let vertex in this.adjacentList) {
      console.log(`${vertex} -> ${[...this.adjacentList[vertex]].join(",")}`);
    }
  }
}

let graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");

graph.addEdge("A", "D");
graph.addEdge("A", "C");
graph.addEdge("B", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "D");
graph.addEdge("C", "A");

graph.display();

console.log(`graph is cyclic?`,graph.isCyclic())