/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* middleNode(ListNode* head) {
        ListNode* cur = head;
        int count = 0;
        while(cur != nullptr){
            cur = cur->next;
            count++;
        }
        int half = count/2;
        cur = head;   
        count = 0;
        while(count < half){
            cur = cur->next;
            count++;
        }
        return cur;
    }
};