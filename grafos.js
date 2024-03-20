class Graph {
    constructor(){
        this.nodes = []
        this.adjList = {}
    }

    addNode(node){
        this.nodes.push(node)
        this.adjList[node.name] = []
    }
    addEdge(node1,node2){
        this.adjList[node1.name].push(node2)
        this.adjList[node2.name].push(node1)
    }

    printGraph(){
        console.log(this.adjList)
    }

    searchNode(value){
         if(!this.nodes.length){
            return
        }
        return this.nodes.find(x => x ===value) 
    }

    printAdjacency(value){
        if(this.searchNode(value)){
            console.log(this.adjList[value.name])
        }else{
            return;
        }

    }
}

const grafo = new Graph();

class city{
    constructor(name){
        this.name = name
    }
}
class friend{
    constructor(name,age, city){
        this.city = city
        this.name = name
        this.age = age
    }

}

const city1 = new city("Cali")
const city2 = new city("Bogota")
const city3 = new city("Medellin")

grafo.addNode(city1)
grafo.addNode(city2)
grafo.addNode(city3)


const friend1 = new friend("Juan","19",city1)
const friend2 = new friend("Sebastian","19",city2)
const friend3 = new friend("Alfonso","18",city2)
const friend4 = new friend("Miguel","17",city3)
const friend5 = new friend("Valeria","21",city3)
const friend6 = new friend("Isabel","20",city3)

grafo.addNode(friend1)
grafo.addNode(friend2)
grafo.addNode(friend3)
grafo.addNode(friend4)
grafo.addNode(friend5)
grafo.addNode(friend6)

grafo.addEdge(friend1, city1)
grafo.addEdge(friend2, city2)
grafo.addEdge(friend3, city2)
grafo.addEdge(friend4, city3)
grafo.addEdge(friend5, city3)
grafo.addEdge(friend6, city3)

grafo.printGraph()
grafo.printAdjacency(city3)

