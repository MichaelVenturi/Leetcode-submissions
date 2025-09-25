/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    const dfs = (root, vals) => {
        if(!root) return;
        if(!root.left && !root.right) vals.push(root.val); // leaf
        dfs(root.left, vals);
        dfs(root.right, vals);
    }

    const vals1 = [];
    const vals2 = [];
    dfs(root1, vals1);
    dfs(root2, vals2);

    return JSON.stringify(vals1) === JSON.stringify(vals2);
};