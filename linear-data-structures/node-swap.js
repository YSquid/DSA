const Node = require('./Node')
const LinkedList = require('./LinkedList')


//Given an input of a linked list, data1, and data2, the general steps for doing so is as follows:

//find the nodes that match the data for nodes1 and 2

const swapNode = (list, data1, data2) => {
    let node1 = list.head;
    let node2 = list.head;
    let node1Prev = null;
    let node2Prev = null;

    //handle edge case - data is the same
    if (data1 === data2) {
        console.log("No Swap necessary - data 1 equals data 2")
        return
    }


    //search list until node1 data matches input data.
    while (node1 !== null) {
        if (node1.data === data1) {
            break
        }

        //if we don't break, save the previous node, and advance through lst
        node1Prev = node1
        node1 = node1.getNextNode()
    }

    //find node 2
    while(node2 !== null) {
        if (node2.data === data2) {
            break
        }

        node2Prev = node2
        node2 = node2.getNextNode()
    }


    //handle edge case - one or more nodes not found
    if (node1 === null || node2 === null) {
        console.log('Error - one or more of the nodes was not found')
        return
    }

    //check if either was head
    //if they were, swap other node to head
    //then update the points TO the swapped nodes
    if (node1Prev === null) {
        list.head = node2
    } else {
        node1Prev.setNextNode(node2)
    }

    if (node2Prev === null) {
        list.head = node1
    } else {
        node2Prev.setNextNode(node1)
    }


    //update the pointers FROM the swapped nodes
    //note the order matters here to avoid a circular reference
    let temp = node1.getNextNode()
    node1.setNextNode(node2.getNextNode())
    node2.setNextNode(temp)
   
    list.printList()
    return
}


let one = new Node('one')
let two = new Node('two')
let three = new Node('three')

let oneTwoThree = new LinkedList()

console.log(one, two, three)
console.log(oneTwoThree)

oneTwoThree.addToHead('one')
oneTwoThree.addToTail('two')
oneTwoThree.addToTail('three')

console.log(oneTwoThree)
oneTwoThree.printList()

swapNode(oneTwoThree, 'two', 'two')

