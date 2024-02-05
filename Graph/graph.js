// vertex, vertices, edge
// types: directed, undirected, weighted, unweighted
// storing graph: Adjacency Matrix, Adjacency List

 
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(v1, v2) {
    if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
      this.adjacencyList[v1].push(v2);
      this.adjacencyList[v2].push(v1);
    }
  }
  dfs(start) {
    let res = [];
    let viseted = {};
    const dfsHelper = (vertex) => {
      if (!this.adjacencyList[vertex]) return null;

      viseted[vertex] = true;
      res.push(vertex);

      this.adjacencyList[vertex].forEach((v) => {
        if (!viseted[v]) return dfsHelper(v);
      });
    };
    dfsHelper(start);
    return res;
  }
  bfs(start) {
    let res = [];
    let visited = {};
    let queue = [start];
    visited[start] = true;

    while (queue.length) {
      let shift = queue.shift();
      // visited[shift] = true;
      res.push(shift);

      this.adjacencyList[shift].forEach((v) => {
        if (!visited[v]) {
          visited[v] = true;
          queue.push(v);
        }
      });
    }
    return res;
  }
  removeEdge(v1, v2) {
    if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
      this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
      this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
    }
  }

  removeVertex(v) {
    if (this.adjacencyList[v]) {
      const edges = this.adjacencyList[v];

      for (let i = 0; i < edges.length; i++) {
        this.removeEdge(v, edges[i]);
      }

      delete this.adjacencyList[v];
    }
  }
  search(start_node, target) {
    const deque = [];
    const visited = new Set();
    deque.push(start_node);
    visited.add(start_node);

    while (deque.length) {
      let currentNode = deque.shift();

      if (currentNode === target) {
        console.log(`${target} found`);
        return true;
      }
      const neighbors = this.adjacencyList[currentNode];
      console.log("neighbors: " + neighbors);
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          deque.push(neighbor);
          visited.add(neighbor);
        }
      }
    }
    console.log(`${target} not found `);
    return false;
  }

  log(text) {
    console.log(text, this.adjacencyList);
  }
}

const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");

graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.addEdge("C", "D");
graph.addEdge("D", "A");
// console.log(graph.dfs("A"));
console.log(graph.bfs("A"));
// graph.log("Original:");
// graph.removeVertex("Tokyo");
// graph.log("After remove:");

// search
// graph.search("Sydney", 'Pekin');

// {
//   A:[B,F],
//   B:[A,C],
//   C:[E,D,B],
//   D:[C,E],
//   E:[F,D,C],
//   F:[A,E],
// }




//recurstion
// 1 pure rec 2 helper recursion
// faktorial qilib kelish
// Bfs recurtion
// dfs  iterative

