const depthFirst = (graph, start) => {
    const visited = [];
    const stack = [start];

    while(stack.length > 0) {
        const vertex = stack.pop();
        console.log(vertex);

        if(visited.includes(vertex)) {
            continue;
        }

        visited.push(vertex);

        for(let neighbor of graph[vertex]) {
            stack.push(neighbor);
        }
    }
};
BreathFirstTraversal = (graph, start) => {
    const visited = [];
    const queue = [start];

    while(queue.length > 0) {
        const vertex = queue.shift();
        console.log(vertex);

        if(visited.includes(vertex)) {
            continue;
        }

        visited.push(vertex);

        for(let neighbor of graph[vertex]) {
            queue.push(neighbor);
        }
    }
};

const garph = {
    a: ['b', 'c'],
    b:['d'],
    c:['e'],
    d:['f'],
    e:[],
    f:[]
};

depthFirst(garph, 'a');//acebdf
console.log('-----------------');
BreathFirstTraversal(garph, 'a');//abcdef


