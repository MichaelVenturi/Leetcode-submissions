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
    int pairSum(ListNode* head) {
    
    int n = 0;
    ListNode* temp = head;
    while(temp){
        n++;
        temp = temp->next;
    }

    vector<int> arr(n/2, 0);
    temp = head;
    int i = 0;
    while(i < n/2){
        arr[i++] += temp->val;
        temp = temp->next;
    }
    i--;
    int res = INT_MIN;
    while(i >= 0){
        arr[i] += temp->val;
        res = max(arr[i--], res);
        temp = temp->next;
    }


    return res;


    }
};