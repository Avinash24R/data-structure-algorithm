# Sliding window
### when to use it?
1. Linear data structures (arrays, lists, strings)

2. Must scan through a subarray or substring

3. When the subarray must satisfy some condition (shortest/longest/min/max)

4. Improve time complexity from O(N^2) to O(N)

### Technique
In the sliding window, you have 2 pointers, i and j. Move j as far as you can until your condition is no longer valid, then move the i pointer closer to j until the condition is valid again to shrink the window. At every iteration, keep track of the min/max length of the subarray for the result. Without the sliding window technique, we would need to use a double for loop resulting in O(N^2) time. The sliding window is O(N) time complexity.

## Types of Sliding window 

### Dynamic Sliding Window


![Screenshot 2024-12-05 095139](https://github.com/user-attachments/assets/1d5e7ee5-5100-4b9d-a713-fd2852c81ea7)


In the dynamic sliding window, the size of the window (subarray between i and j) changes throughout the algorithm. In this example, we scan the subarray “bacb” and find that we have a duplicate “b”, so we will move the i pointer to shrink the window and move on to letter “a”, resulting in “acb”, then we start moving j again.

### Fixed Sliding Window

![Screenshot 2024-12-05 095251](https://github.com/user-attachments/assets/5543a7fd-8d7d-49ad-9384-8087813588c3)

In the fixed sliding window, the size of the window is the same length throughout the algorithm. In this case, we need scan subarrays of length 3 for the final result, so we initialize i and j to indices 0 and 2 and at every iteration we increment i and j by 1.
