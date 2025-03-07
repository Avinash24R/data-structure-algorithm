class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// In-order Traversal
const inOrderTraversal = (root, result = []) => {
    if (root === null) return result;
    inOrderTraversal(root.left, result);
    result.push(root.value);
    inOrderTraversal(root.right, result);
    return result;
};

// Pre-order Traversal
const preOrderTraversal = (root, result = []) => {
    if (root === null) return result;
    result.push(root.value);
    preOrderTraversal(root.left, result);
    preOrderTraversal(root.right, result);
    return result;
};

// Post-order Traversal
const postOrderTraversal = (root, result = []) => {
    if (root === null) return result;
    postOrderTraversal(root.left, result);
    postOrderTraversal(root.right, result);
    result.push(root.value);
    return result;
};

// Level-order Traversal
const levelOrderTraversal = (root) => {
    if (root === null) return [];
    const result = [];
    const queue = [root];
    while (queue.length > 0) {
        const levelSize = queue.length;
        const currentLevel = [];
        for (let i = 0; i < levelSize; i++) {
            const currentNode = queue.shift();
            currentLevel.push(currentNode.value);
            if (currentNode.left !== null) queue.push(currentNode.left);
            if (currentNode.right !== null) queue.push(currentNode.right);
        }
        result.push(currentLevel);
    }
    return result;
};

// Example usage:
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

console.log("In-order Traversal:", inOrderTraversal(root)); // [4, 2, 5, 1, 6, 3, 7]
console.log("Pre-order Traversal:", preOrderTraversal(root)); // [1, 2, 4, 5, 3, 6, 7]
console.log("Post-order Traversal:", postOrderTraversal(root)); // [4, 5, 2, 6, 7, 3, 1]
console.log("Level-order Traversal:", levelOrderTraversal(root)); // [[1], [2, 3], [4, 5, 6, 7]]