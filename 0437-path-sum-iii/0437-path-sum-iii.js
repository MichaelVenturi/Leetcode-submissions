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
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    const sums = new Map();
    sums.set(0, 1);
    const dfs =(cur, sum) => {
        if(!cur) return 0;
        sum += cur.val;
        let count = sums.get(sum - targetSum) || 0;
        sums.set(sum, (sums.get(sum) || 0) + 1);
        count += dfs(cur.left, sum);
        count += dfs(cur.right, sum);
        sums.set(sum, sums.get(sum) - 1);

        return count;
    }
    return dfs(root, 0);
};