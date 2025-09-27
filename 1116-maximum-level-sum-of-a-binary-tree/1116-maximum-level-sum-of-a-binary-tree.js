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
var maxLevelSum = function(root) {
    const q = [root];
    let maxSum = root.val;
    let lvl = maxLvl = 1;
    while(q.length > 0){
        let size = q.length;
        let sum = 0;
        while(size--){
            const cur = q.shift();
            sum += cur.val;
            if(cur.left) q.push(cur.left);
            if(cur.right) q.push(cur.right);
        }
        if(sum > maxSum) {
            maxSum = sum;
            maxLvl = lvl;
        }
        lvl++;
    }
    return maxLvl;
};