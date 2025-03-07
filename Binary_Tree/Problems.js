class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

/*
Write a function, depthFirstValues, that takes in the root of a binary tree. 
The function should return an array containing all values of the tree in depth-first order.

example :
      a
    /   \
   b     c
  / \     \
 d   e     f

depthFirstValues(a); 
//    -> ['a', 'b', 'd', 'e', 'c', 'f']
*/
const dfs = (root) =>{
    const stack = [root]; 
    while (stack.length > 0){
        let cur = stack.pop();
        console.log(cur.val);
        if(cur.right) stack.push(cur.right); 
        if(cur.left) stack.push(cur.left);
    }
}
const dfs_rec = (root) =>{
    if(root === null) return [];
    const leftvalue = dfs_rec(root.left);
    const rightvalue = dfs_rec(root.right);

    return [ root.val , ...leftvalue , ...rightvalue]
}
/*
Write a function, breadthFirstValues, that takes in the root of a binary tree.
 The function should return an array containing all values of the tree in breadth-first order.
 example :
       a
    /   \
   b     c
  / \     \
 d   e     f

breadthFirstValues(a); 
//    -> ['a', 'b', 'c', 'd', 'e', 'f']
*/
const bfs = (root) => {
    const queue = [root]
    let res = []
    while(queue.length > 0){
      let cur = queue.shift()
      res.push(cur.val)
      console.log(cur.val)
      if(cur.left) queue.push(cur.left)
      if(cur.right) queue.push(cur.right)
    }
    return res
  };

/*
Write a function, treeSum, that takes in the root of a binary tree that contains number values. 
The function should return the total sum of all values in the tree.
example :
       3
    /    \
   11     4
  / \      \
 4   -2     1

treeSum(a); // -> 21
*/

const treeSum = (root) => {
    if(root === null) return 0;
    
    return root.val + treeSum(root.left) + treeSum(root.right);
};
/*
Write a function, treeIncludes, that takes in the root of a binary tree and a target value. 
The function should return a boolean indicating whether or not the value is contained in the tree.

example:

      a
    /   \
   b     c
  / \     \
 d   e     f

treeIncludes(a, "e"); // -> true
*/
const treeIncludes = (root, target) => {
    if(root === null) return false;
  
    if(root.val === target) return true;
  
    return treeIncludes(root.left,target) || treeIncludes(root.right,target)
};

/*

Write a function, treeMinValue, that takes in the root of a binary tree that contains number values.
 The function should return the minimum value within the tree.
       3
    /    \
   11     4
  / \      \
 4   -2     1

treeMinValue(a); // -> -2
*/
const treeMinValue = (root) => {
    if(root === null) return Infinity;
    return Math.min(treeMinValue(root.left) , treeMinValue(root.right), root.val)
};
const treeMinValue_bfs = (root) => {
    const queue = [root];
  
    let smallest = Infinity;
    while (queue.length) {
      const current = queue.shift();
      if (current.val < smallest) smallest = current.val;
  
      if (current.left !== null) queue.push(current.left);
      if (current.right !== null) queue.push(current.right);
    }
    return smallest;
};
/*
Write a function, maxPathSum, that takes in the root of a binary tree that contains number values.
 The function should return the maximum sum of any root to leaf path within the tree.
 example :
       3
    /    \
   11     4
  / \      \
 4   -2     1

maxPathSum(a); // -> 18
*/
const maxPathSum = (root) => {
    if(root === null) return -Infinity;
    if (root.left === null && root.right === null) return root.val;
    return root.val + Math.max(maxPathSum(root.left), maxPathSum(root.right));
};

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
ans = bfs(a);
console.log(ans)