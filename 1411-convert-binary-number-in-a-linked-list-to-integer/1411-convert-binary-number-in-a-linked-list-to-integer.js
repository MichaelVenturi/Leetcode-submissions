/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    let res = 0;
    let cur =  head;
    while(cur){
        res = res * 2 + cur.val;
        cur = cur.next;
    }
    
    return res;
};