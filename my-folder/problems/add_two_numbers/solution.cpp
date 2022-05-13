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
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        ListNode* root = new ListNode();
        ListNode* curNode = root;
        ListNode* l1_ref = l1;
        ListNode* l2_ref = l2;
        bool carry = false;
        while(l1_ref != nullptr || l2_ref != nullptr){
            int addend, augend, sum;
            std::cout << "step1\n";
            addend = (l1_ref!=nullptr ? l1_ref->val : 0);
            augend = (l2_ref!=nullptr ? l2_ref->val : 0);
            sum = addend + augend;
            std::cout<<"step2\n";
            if(carry){
                sum += 1;
                carry = false;
            }
            if(sum >= 10){
                carry = true;
                sum -= 10;
            }
            std::cout<<"step3 sum = " << sum << "\n";
            curNode->next = new ListNode(sum);
            curNode = curNode->next;
            if(l1_ref!=nullptr)l1_ref = l1_ref->next;
            if(l2_ref!=nullptr)l2_ref = l2_ref->next;
        }
        if(carry){
            curNode->next = new ListNode(1);
        }
        return root->next;
    }
};