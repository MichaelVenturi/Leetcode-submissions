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
    vector<vector<int>> levelOrder(TreeNode* root) {
        if(root == nullptr) return {};
        queue<TreeNode*> nodes;
        vector<vector<int>> res;
        nodes.push(root);

        while(!nodes.empty()){
            vector<int> v;
            int size = nodes.size();
            for(int i = 0; i < size; i++){
                TreeNode* temp = nodes.front();
                nodes.pop();
                v.push_back(temp->val);
                if(temp->left != nullptr) nodes.push(temp->left);
                if(temp->right != nullptr) nodes.push(temp->right);
            }
            res.push_back(v);
        }
        
        return res;
    }
    
   
    
};