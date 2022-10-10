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
    ListNode *detectCycle(ListNode *head) {
        map<ListNode *,int>c;
        int count=0;
        ListNode* cur = head;
        while(cur){
            //cout << cur->val << endl;
            if(c.count(cur)) return cur;
            c[cur] = count;
            cur = cur->next;
            count++;
        }
        return NULL;
    }
};