/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    int sumNumbers(TreeNode* root) {
        int ans = 0;
        rootToLeaf(root, 0, ans);
        return ans;
    }

    void rootToLeaf(TreeNode* cur, int num, int &ans){
        if(!cur->left && !cur->right){
            // reached leaf
            num *= 10;
            num += cur->val;
            ans += num;
            return;
        }
        num *= 10;
        num += cur->val;
        if(cur->left) rootToLeaf(cur->left, num, ans);
        if(cur->right) rootToLeaf(cur->right, num, ans);
    }
};