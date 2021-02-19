/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    // case 001 - both tree is null
    // case 002 - either of the tree is null but not both
    // case 003 - checking with the values
    // case 004 - recursing the left sub-tree and right sub-tree
    if(p == null && q == null) return true;
    else if (p == null || q == null ) return false;
    else if (p.val != q.val) return false;
    else return isSameTree (p.left, q.left) && isSameTree(p.right, q.right); 
};