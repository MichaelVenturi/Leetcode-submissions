/*
// Definition for a Node.
class Node {
public:
    int val;
    vector<Node*> children;

    Node() {}

    Node(int _val) {
        val = _val;
    }

    Node(int _val, vector<Node*> _children) {
        val = _val;
        children = _children;
    }
};
*/

class Solution {
public:
    void helperFunc(Node* n, vector<int> &arr){
        arr.push_back(n->val);
        for(auto i : n->children){
            helperFunc(i, arr);
        }   
    }
    vector<int> preorder(Node* root) {
        vector<int> output;
        if(root == nullptr) return output;
        helperFunc(root, output);
        return output;
    }
    
    
    
    
};