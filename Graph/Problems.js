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
const edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
  ];

if(undirectedPath(edges,'i','m')===true){
    console.log(true);
}
else{
    console.log(false)
}