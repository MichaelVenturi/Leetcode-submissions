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
 * @return {number}
 */
var goodNodes = function(root) {
    let count = 0;
    const dfs = (cur, max) => {
        if(!cur) return;
        if(cur.val >= max) {
            count++;
            max = cur.val;
        }
        dfs(cur.left, max);
        dfs(cur.right, max);
    }
    dfs(root, root.val);
    return count;
};

