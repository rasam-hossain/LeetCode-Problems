using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestDome
{
    //Definition for a binary tree node.
    public class TreeNode
    {
        public int val;
        public TreeNode left;
        public TreeNode right;
        public TreeNode(int val = 0, TreeNode left = null, TreeNode right = null)
        {
            this.val = val;
            this.left = left;
            this.right = right;
        }
    }
    public class InvertBinaryTree
    {
        /// <summary>
        /// DFS recursive solution for inverting a binary tree
        /// ==== Complexity Analysis ====
        /// Time Complexity: O(n), each node visited only once
        /// Space Complexity:  O(h) for recursion call stack, where h is the height of the tree
        /// Since each node in the tree is visited only once, 
        /// the time complexity is O(n), 
        /// where n is the number of nodes in the tree. 
        /// We cannot do better than that, since at the very least we have to visit each node to invert it.
        /// Space complexity is equal to the height of the tree O(h).
        /// </summary>
        /// <param name="root"></param>
        /// <returns></returns>
        public TreeNode InvertTree(TreeNode root)
        {
            // Inversion of an empty tree is an empty tree
            if (root == null)
                return null;
            
            // Flip the nodes without using a temp variable
            (root.left, root.right) = (InvertTree(root.right), InvertTree(root.left));
            return root;
        }
    }
}
