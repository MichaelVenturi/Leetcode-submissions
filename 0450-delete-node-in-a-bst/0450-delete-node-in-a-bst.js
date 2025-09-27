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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    if(root) {
        if(key < root.val) root.left = deleteNode(root.left, key);
        else if(key > root.val) root.right = deleteNode(root.right, key);
        else {
            if(!root.left && !root.right) return null;
            if(!root.left || !root.right) return root.left ?? root.right; 
            let temp = root.left;
            while(temp.right !== null) temp = temp.right;
            root.val = temp.val;
            root.left = deleteNode(root.left, temp.val);
        }
    }
    return root;
};