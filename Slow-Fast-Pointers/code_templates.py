from typing import Optional
def slow_fast_pointers(head):
    # Initialize pointers
    slow = head
    fast = head
    result = None

    # move slow once, move fast twice
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next

        # update result based on custom logic
        # Example: if fast == slow then cycle is detected

    return result

class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None


class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        d = ListNode()
        d.next = head
        slow = fast = d
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
            if slow is fast:
                return True
        return False
    
    def detectCycle(self, head: Optional[ListNode]) -> Optional[ListNode]:
        slow = fast = head
        
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next

            if slow == fast:
                break
        else: return None

        fast = head
        # Find the start of cycle 
        while fast != slow:
            fast = fast.next
            slow = slow.next
        
        return slow
    
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        dummy =  ListNode(0)
        dummy.next = head

        first ,second = dummy ,dummy

        for _ in range(n+1):
            first = first.next

        while first:
            first = first.next
            second = second.next
        
        #Removing nth node
        second.next = second.next.next

        return dummy.next
        