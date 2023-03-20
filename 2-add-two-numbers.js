// https://leetcode.cn/problems/add-two-numbers/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let flag = false;
    let last = ret = cur = new ListNode();
    while(l1!==null || l2!==null || flag) {
        if(l1!==null) {
            cur.val += l1.val;
            l1 = l1.next;
        }
        if(l2!=null) {
            cur.val += l2.val;
            l2 = l2.next;
        }
        if(flag) {
            cur.val++;
            flag = false;
        }
        if(cur.val>9) {
            cur.val -= 10;
            flag = true;
        }
        cur.next = new ListNode();
        last = cur;
        cur = cur.next;
    }
    if(cur.val===0) {
        last.next = null;
    }

    return ret;
};