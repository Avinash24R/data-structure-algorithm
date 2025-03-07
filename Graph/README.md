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

### 3. Connected Components Count (connectedComponentsCount)
Write a function, `connectedComponentsCount`, that takes in the adjacency list of an undirected graph. The function should return the number of connected components within the graph.

Example:
```javascript
const graph = {
  0: [8, 1, 5],
  1: [0],
  5: [0, 8],
  8: [0, 5],
  2: [3, 4],
  3: [2, 4],
  4: [3, 2]
};

connectedComponentsCount(graph); // -> 2
```

### 4. Largest Component (largestComponent)
Write a function, `largestComponent`, that takes in the adjacency list of an undirected graph. The function should return the size of the largest connected component in the graph.

Example:
```javascript
const graph = {
  0: ['8', '1', '5'],
  1: ['0'],
  5: ['0', '8'],
  8: ['0', '5'],
  2: ['3', '4'],
  3: ['2', '4'],
  4: ['3', '2']
};

largestComponent(graph); // -> 4
```

### 5. Shortest Path (shortestPath)
Write a function, `shortestPath`, that takes in an array of edges for an undirected graph and two nodes (nodeA, nodeB). The function should return the length of the shortest path between A and B. Consider the length as the number of edges in the path, not the number of nodes. If there is no path between A and B, then return -1. You can assume that A and B exist as nodes in the graph.

Example:
```javascript
const edges = [
  ['w', 'x'],
  ['x', 'y'],
  ['z', 'y'],
  ['z', 'v'],
  ['w', 'v']
];

shortestPath(edges, 'w', 'z'); // -> 2
```

### 6. Island Count (islandCount)
Write a function, `islandCount`, that takes in a grid containing Ws and Ls. W represents water and L represents land. The function should return the number of islands on the grid. An island is a vertically or horizontally connected region of land.

Example:
```javascript
const grid = [
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'W'],
  ['W', 'W', 'L', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['L', 'L', 'W', 'W', 'W'],
];

islandCount(grid); // -> 3
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
