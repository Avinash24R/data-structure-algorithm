# Graph

## Problems Solved

### 1. Directed Path (hasPath)
Write a function, `hasPath`, that takes in an object representing the adjacency list of a directed acyclic graph and two nodes (src, dst). The function should return a boolean indicating whether or not there exists a directed path between the source and destination nodes.

Example:
```javascript
const graph = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: []
};

hasPath(graph, 'f', 'k'); // true
```

### 2. Undirected Path (undirectedPath)
Write a function, `undirectedPath`, that takes in an array of edges for an undirected graph and two nodes (nodeA, nodeB). The function should return a boolean indicating whether or not there exists a path between nodeA and nodeB.

Example:
```javascript
const edges = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n']
];

undirectedPath(edges, 'j', 'm'); // true
```

## Traversal Algorithms

### Depth-First Traversal (DFS)
Depth-First Traversal explores as far as possible along each branch before backtracking.

Example:
```javascript
const depthFirst = (graph, start) => {
  const visited = [];
  const stack = [start];

  while (stack.length > 0) {
    const vertex = stack.pop();
    console.log(vertex);

    if (visited.includes(vertex)) {
      continue;
    }

    visited.push(vertex);

    for (let neighbor of graph[vertex]) {
      stack.push(neighbor);
    }
  }
};
```

### Breadth-First Traversal (BFS)
Breadth-First Traversal explores all neighbors at the present depth prior to moving on to nodes at the next depth level.

Example:
```javascript
const breadthFirstTraversal = (graph, start) => {
  const visited = [];
  const queue = [start];

  while (queue.length > 0) {
    const vertex = queue.shift();
    console.log(vertex);

    if (visited.includes(vertex)) {
      continue;
    }

    visited.push(vertex);

    for (let neighbor of graph[vertex]) {
      queue.push(neighbor);
    }
  }
};
```
