/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if(!root) return false;
    return dfs(root, 0, targetSum);
};

const dfs = (node, sum, target) => {
    if(node) sum += node.val;
    if(!node.left && !node.right) {
        return sum === target;
    }
    if(!node.left) return dfs(node.right, sum, target);
    if(!node.right) return dfs(node.left, sum, target);
    return dfs(node.left, sum, target) || dfs(node.right, sum, target);
}