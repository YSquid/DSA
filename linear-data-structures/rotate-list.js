//Given the head of a linked list, rotate the list to the right by k places.
/*
The number of nodes in the list is in the range [0, 500].
-100 <= Node.val <= 100
0 <= k <= 2 * 109 
*/

//Input: head = [1,2,3,4,5], k = 2
//Output: [4,5,1,2,3]

//Input: head = [0,1,2], k = 4
//Output: [2,0,1]

//Try to implement with two pointer solution
//keep a pointer at the head and the tail
//make the tail the head, increment counter
//only know the head, so find the tail
//once counter equals k, stop

const LinkedList = require("./LinkedList");

//brute force it with two pointer
//go through find the last node and the n-1 node
//make last node new head, set n-1 node next to null
//repeat k times
const rotateRight = function (list, k) {
  let nMinusOne = list.head;
  let tailPointer = list.head;
  let count = 0;

  //get tailPointer 1 ahead
  tailPointer = tailPointer.getNextNode();

  //find the tail and the n-1
  while (count < k) {
    while (tailPointer.getNextNode()) {
      tailPointer = tailPointer.getNextNode();
      nMinusOne = nMinusOne.getNextNode();
    }

    // console.log("tail", tailPointer);
    // console.log("n-1", nMinusOne);

    //set next node for tail to head
    tailPointer.setNextNode(list.head);

    //set n-1 next to null, since we are "removing" tail
    nMinusOne.setNextNode(null);

    //reset references
    tailPointer = list.head
    nMinusOne = list.head
    count++

  }

  return list

};

list1 = new LinkedList();
list1.addToHead("one");
list1.addToTail("two");
list1.addToTail("three");

// list1.printList();

console.log(rotateRight(list1, 1));

// list2 = new LinkedList();
// list2.addToHead("one");
// list2.addToTail("two");
// list2.addToTail("three");
// list2.addToTail("four");
// list2.addToTail("five");

// console.log(rotateRight(list2, 1));
