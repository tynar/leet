/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let head = new ListNode(0);
  let a = 0;
  let current = head;
  while (l1 || l2 || a) {
    let n = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + a;
    a = 0;
    if (n > 9) {
      n = n - 10;
      a = 1;
    }
    current.next = new ListNode(n);
    current = current.next;
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }
  return head.next;
};
