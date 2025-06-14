class Graph{
    constructor() {
        this.adjacencyList={}
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex]=new Set()
        }
    }

    addEdge(vertex1,vertex2){
        if(!this.adjacencyList[vertex1]){
            this.addEdge(vertex1)
        }

        if(!this.adjacencyList[vertex2]){
            this.addEdge(vertex2)
        }

        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }

    dfs(start,visited=new Set()){
        if(!this.adjacencyList[start]){
            return;
        }

        visited.add(start);
        console.log(start)

        for(let neighbor of this.adjacencyList[start]){
            if(!visited.has(neighbor)){
                this.dfs(neighbor,visited)
            }
        }
    }


    display(){
        for(let vertex in this.adjacencyList){
            console.log(`${vertex} -> ${[...this.adjacencyList[vertex]]}`)
        }
    }
}

let graph = new Graph()

graph.addVertex('a')
graph.addVertex('b')
graph.addVertex('c')


graph.addEdge('a','b')
graph.addEdge('a','c')
graph.addEdge('b','c')
graph.addEdge('b','a')

graph.display()

graph.dfs("b")



