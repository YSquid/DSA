const Node = require('./Node.js');

class LinkedList {
  constructor() {
    this.head = null;
  }

  addToHead(data) {
    const newHead = new Node(data)
    const currentHead = this.head

    //set head to new Head Node
    this.head = newHead

    //if there was already a head, it is now the next node for new head
    if(currentHead) {
      this.head.setNextNode(currentHead)
    }

  }

  addToTail(data) {
    let tail = this.head

    //if head was null, head and tail are same Node, the new data
    if (tail === null){
      this.head = new Node(data)
    } else {
    //else loop through and update tail to next node until the current node has no next. At that point you've reached current tail
      while(tail.getNextNode() !== null) {
        tail = tail.getNextNode()
      }
      //once you find the tail, set its next node to the new data
      tail.setNextNode(new Node(data))
    }
  }

  removeHead() {
    const removedHead = this.head

    //case where there is no head
    if (!removedHead) {
     return
    }

    //set lists head to the removed heads next node

    this.head = removedHead.getNextNode()
  }

  printList() {
    //start at head
    let currentNode = this.head;
    //format start of output
    let output = "<head> "

    //loop through all nodes until current node is null
    while (currentNode!== null) {
      //add the nodes data to the output, plus a space
      output += currentNode.data + ' '
      //update currentNode to next node
      currentNode = currentNode.getNextNode()
    }

    //format end of output
    output += ' <tail>'
    console.log(output)
  }
}

module.exports = LinkedList;