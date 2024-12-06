# Slow and Fast Pointer

### When to use it?

1. Linear data structures (arrays, lists, strings)

2. Detect cycle in linked list

3. Find middle of linked list

4. Perform in one pass with O(1) space

### Technique

Use two pointers, a slow and fast pointer. Slow moves once and fast moves twice at every iteration. Instead of using a data structure to store previous nodes to detect a cycle which requires O(N) space, using the two pointer technique will find a cycle with O(1) space if fast loops around the cycle and will eventually meet slow. You can also use this technique to find the middle of a linked list in O(1) space and 1 pass.

### LeetCode Questions

[141. Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/description/)

[142. Linked List Cycle II](https://leetcode.com/problems/linked-list-cycle-ii/description/)

[19. Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/submissions/)

