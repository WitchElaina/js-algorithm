function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

function createList(nodeVal) {
    if(nodeVal.length === 0)
        return null;
    let head = new ListNode(nodeVal[0]);
    let cur = head;
    for (let i = 1; i < nodeVal.length; i++) {
        cur.next = new ListNode(nodeVal[i]);
        cur = cur.next;
    }
    return head;
}

function outputList(list) {
    let nodeArray = []
    for (let i = list; i !== null; i = i.next) {
        nodeArray.push(i.val);
    }
    console.log(nodeArray);
    return nodeArray;
}

let list1 = createList([])
let list2 = createList([])

outputList(list1)
outputList(list2)

var mergeTwoLists = function(list1, list2) {
    if(list1 === null)
        return list2;
    if(list2 === null)
        return list1;
    if(list1.val <= list2.val) {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    }
    if(list2.val <= list1.val) {
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }
};

outputList(mergeTwoLists(list1, list2))