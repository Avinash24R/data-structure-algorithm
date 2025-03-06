/*
problem 1:

Write a function, hasPath, that takes in an object representing 
the adjacency list of a directed acyclic graph and two nodes (src, dst). 
The function should return a boolean indicating whether or not there exists a directed path 
between the source and destination nodes.

Hey. This is our first graph problem, so you should be liberal with watching 
the Approach and Walkthrough. Be productive, not stubborn. -AZ


example :
const graph = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: []
};

hasPath(graph, 'f', 'k'); // true
*/

const hasPathUsingDFS = (graph, start, end, visited = new Set()) => {
    if (start === end) {
        return true;
    }
    if (visited.has(start)) {
        return false;
    }
    visited.add(start);
    for (let neighbor of graph[start]) {
        if (hasPathUsingDFS(graph, neighbor, end, visited) === true) {
            return true;
        }
    }
    return false;
};

const hasPathUsingBFS = (garph,start , end) =>{
    const queue = [ start];
    while (queue.length > 0){
        const curr = queue.shift();
        if (curr === end) return true;

        for (let neighbor of garph[curr]){
            queue.push(neighbor);
        }
    }
    return false;
};

/*
problem 2:

Write a function, undirectedPath, that takes in an array of edges for an undirected graph and two nodes (nodeA, nodeB). The function should return 
a boolean indicating whether or not there exists a path between nodeA and nodeB.

example :
const edges = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n']
];

undirectedPath(edges, 'j', 'm'); // -> true
*/

const undirectedPath =(edges,start,end) =>{
    const graph = buildgraph(edges);
    console.log(graph)
    return hasPathUsingDFS(graph,start,end)

}; 

const buildgraph =(edges) =>{
    const graph = {};
    for (let edge of edges){
        const [a,b]=edge;
        if(!(a in graph)) graph[a] = [];
        if(!(b in graph)) graph[b] = []; 
        graph[a].push(b);
        graph[b].push(a);

    }
    return graph;
};
/*
problem 3:

Write a function, connectedComponentsCount, that takes in the adjacency list of an 
undirected graph. The function should return the number of connected components within the graph.
example :
connectedComponentsCount({
  0: [8, 1, 5],
  1: [0],
  5: [0, 8],
  8: [0, 5],
  2: [3, 4],
  3: [2, 4],
  4: [3, 2]
}); // -> 2

*/
const connectedComponentsCount = (graph) =>{
    const visited = new Set();
    let count =0;
    for(let node in graph){
        if (explore(graph , node,visited) === true){
            count +=1;
        }
    }
    return count;
};
const explore = (graph , node,visited) => {
    // This function explore every possible nodes from a given node.
    if(visited.has(String(node))) return false;

    visited.add(String(node));
    for(let neighbor of graph[node]){
        explore(graph,neighbor,visited);
    }
    return true
};
/*
problem 4:
Write a function, largestComponent, that takes in the adjacency list
 of an undirected graph. The function should return the size of the largest connected component in the graph.
 largestComponent({
  0: ['8', '1', '5'],
  1: ['0'],
  5: ['0', '8'],
  8: ['0', '5'],
  2: ['3', '4'],
  3: ['2', '4'],
  4: ['3', '2']
}); // -> 4
*/
const largestComponent = (graph) => {
    const visited = new Set();
    let largestComponent = 0;
    for(let node in graph){
        const size =exploresize(graph,node,visited);
        if(size > largestComponent) largestComponent=size;

    }
  };
const exploresize =(graph,node,visited) =>{
    if(visited.has(String(node))) return 0;
    let size = 1;
    visited.add(String(node));
    for(let neighbor of graph[node]){
        size += exploresize(graph,neighbor,visited);
    }
    return size;
}
/*
problem 5:
Write a function, shortestPath, that takes in an array of edges for an 
undirected graph and two nodes (nodeA, nodeB). The function should return 
the length of the shortest path between A and B. Consider the length as the number 
of edges in the path, not the number of nodes. If there is no path between A and B, 
then return -1. You can assume that A and B exist as nodes in the graph.

example :
const edges = [
  ['w', 'x'],
  ['x', 'y'],
  ['z', 'y'],
  ['z', 'v'],
  ['w', 'v']
];

shortestPath(edges, 'w', 'z'); // -> 2
*/
const shortestPath =(edges , src, dst) =>{
    const graph = buildGraph(edges);
    const visited = new Set([src]);
    const queue = [[src,0]]

    while(queue.length > 0){
        const [cur , distance] = queue.shift();
        if( cur === dst) return distance;

        for(let neighbour of graph[cur]){
            if(visited.has(neighbour)) continue;
            visited.add(neighbour)
            queue.push([neighbour,distance+1])
        }

    }
    return -1;

}
const buildGraph = (edges) =>{
    const graph = {};
    for (let edge of edges){
        const [a,b]=edge;
        if(!(a in graph)) graph[a] = [];
        if(!(b in graph)) graph[b] = []; 
        graph[a].push(b);
        graph[b].push(a);

    }
    return graph;
}
/*
problem 6:
Write a function, islandCount, that takes in a grid containing 
Ws and Ls. W represents water and L represents land. The function should 
return the number of islands on the grid. An island is a vertically or horizontally 
connected region of land.
example :
const grid = [
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'W'],
  ['W', 'W', 'L', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['L', 'L', 'W', 'W', 'W'],
];

islandCount(grid); // -> 3
*/

const islandCount = (grid)=>{
    const visited = new Set();
    let count =0;
    for(let r=0;r<grid.length;r++){
        for(let c=0;c<grid[0].length;c++){
            if(dfs(grid,r,c,visited) === true) count++;
        }
    }
}

const dfs =(grid,r,c,visited)=>{
    const rowInbounds = 0 <= r && r < grid.length;
    const colInbounds = 0 <= c && r < grid[0].length;

    if(!rowInbounds || !colInbounds) return false;

    if(grid[r][c] === 'w') return false
    const pos = r +','+c;
    if(visited.has(pos)) return false;
    visited.add(pos);

    dfs(grid,r-1,c,visited);
    dfs(grid,r+1,c,visited);
    dfs(grid,r,c-1,visited);
    dfs(grid,r,c+1,visited);
    return true;

}