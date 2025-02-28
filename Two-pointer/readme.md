# Two pointer

### when to use it 

1. Linear data structures (arrays, lists, strings)

2. When you need to scan the start and end of a list

3. When you have a sorted list and need to find pairs

4. Removing duplicates or filtering

### Technique

Instead of scanning all possible subarrays or substrings, use two pointers i and j at the ends of a string or sorted array to be clever how you increment i or decrement j as you scan the input. This will lower your time complexity from O(N^2) to O(N). In the example above, to detect if a string is a palindrome we scan the ends of the string one character at a time. If the characters are equal, move i and j closer together. If they are not equal, the string is not a palindrome.

### leetcode Question 

[125. Valid Palindrome](https://leetcode.com/problems/valid-palindrome/description/)

[15. 3Sum](https://leetcode.com/problems/3sum/description/)

[11. Container With Most Water](https://leetcode.com/problems/container-with-most-water/description/)

