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
 * @return {boolean}
 */
var isBalanced = function(root) {
    const dfs = (node) => {
        if(!node) return [true, 0];
        const [leftBal, leftHeight] = dfs(node.left);
        const [rightBal, rightHeight] = dfs(node.right);
        const isBalanced = leftBal && rightBal && Math.abs(leftHeight - rightHeight) <= 1;
        return [isBalanced, 1 + Math.max(leftHeight, rightHeight)];
    }

    return dfs(root)[0];
};