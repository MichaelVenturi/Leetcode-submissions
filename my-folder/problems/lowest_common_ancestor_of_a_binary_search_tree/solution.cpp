/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */

class Solution {
public:
    TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
        int low = min(p->val, q->val);
        int high = max(p->val, q->val);
        return helperFunc(root, high, low);
        
    }
    TreeNode* helperFunc(TreeNode* root, int high, int low){
        if(root->val <= high && root->val >= low) return root;
        else if(root->val > high) return helperFunc(root->left, high, low);
        else  return helperFunc(root->right, high, low);
    }
};