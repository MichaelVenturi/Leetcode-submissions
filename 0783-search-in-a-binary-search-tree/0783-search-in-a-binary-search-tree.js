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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    if(!root) return null;
    const dfs = (cur) => {
        if(!cur) return null;
        if(cur.val === val) return cur;
        if(cur.val > val) return dfs(cur.left);
        return dfs(cur.right);
    }
    return dfs(root);
};