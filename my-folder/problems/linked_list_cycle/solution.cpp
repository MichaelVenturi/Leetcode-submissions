/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution {
public:
    bool hasCycle(ListNode *head) {
        map<ListNode*, int> m;
        ListNode* cur = head;
        while(cur){
            if(m[cur] == 1) return true;
            m[cur] = 1;
            cur = cur->next;
        }
        return false;
    }
};