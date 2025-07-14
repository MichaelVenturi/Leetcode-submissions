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
    const arr = [];
    let cur = head;
    while(cur){
        arr.unshift(cur.val);
        cur = cur.next;
    }
    let sum = 0;
    console.log(arr);
    for(let i = 0; i < arr.length; i++){
        sum += arr[i] * 2 ** i;
    }
    return sum;
};