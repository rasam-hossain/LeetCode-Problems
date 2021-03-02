public class LinkedListCycle
    {
        
         //DEFINITION FOR SINGLY-LINKED LIST.
         public class ListNode
         {
                    public int val;
                    public ListNode next;
            public ListNode(int x) {
            val = x;
            next = null;
            }
         }

        /// <summary>
        ///  Detecting a cycle in Singly Linked List
        ///  Time Complexity: O(n), becuase we're visiting each node 
        ///  Space Complexity: O(1). We only use two nodes (slow and fast) so the space complexity is O(1)
        /// </summary>
        /// <param name="head"></param>
        /// <returns></returns>
        public bool HasCycle(ListNode head)
        {
            // detecteing a cycle in the singly linked list
            // using the tortoise and hare algorithm
            // starting hare and tortoise at the same node

            // initially both pointers will point to the head node
            var hare = head;
            var tortoise = head;

            // keep chaning the nodes for both of them
            // hare will move at a double the speed of tortoise
            while (hare != null && hare.next != null)
            {
                hare = hare.next.next;
                tortoise = tortoise.next;

                // at some point they'll eventually meet
                if (ReferenceEquals(hare, tortoise))
                    return true;
            }
            return false;
        }
    }