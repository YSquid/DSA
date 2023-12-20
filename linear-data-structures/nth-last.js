const LinkedList = require('./LinkedList')

//Create a function that returns the nth last element of a singly linked list.
//So for a list of 5, n=2 would get second last element, or 4th element
//Assumptions -1 < n < list.length



//two pointer strategy
//runner and chaser. keep chaser n positions behind runner
//O(n) time, O(1) space
// const nthLast = (list, n) => {
//     console.log(list.length)
//     //exclude cases that return a negative index
//     if (n >= list.length) {
//         console.log("Error, nth last would return negative")
//         return
//     }


//     let runner = list.head
//     let chaser = list.head

//     //get runner to the end
//     //keep chaser n spots behind

//     while (runner.getNextNode() !== null) {
//         let count = 0;
//         while (count < n) {
//             runner = runner.getNextNode()
//             count++
//         }

//         while(runner.getNextNode() !== null) {
//             runner = runner.getNextNode()
//             chaser = chaser.getNextNode()
//         }
//     }

//     return chaser
// }

//More general solution. 
//Handles less than n < 1, which is nonsensical for this problem
//Handles n >= list length, which is invalid as it returns negative index

const nthLast = (list, n) => {
    let length = 0
    let count = 1
    let tailFinder = list.head
    let nthLast = list.head;

    if (n < 1) {
        console.log("Error: cannot define 0th or negative indexes")
    }

    while (tailFinder) {
        length++
        tailFinder = tailFinder.getNextNode()
    }

    if (n >= length) {
        console.log('Error - nth last is a negative index')
        return
    }

    while (count < (length - n)) {
        nthLast = nthLast.getNextNode()
        count++
    }

    return nthLast
}


const testList = new LinkedList()

testList.addToHead('one')
testList.addToTail('two')
testList.addToTail('three')
testList.addToTail('four')
testList.addToTail('five')

//I expect this to return  three
let result1 = nthLast(testList, 5)
let result2 = nthLast(testList, 0)
let result3 = nthLast(testList, 3)

console.log(result1) //expect error
console.log(result2) //expect five
console.log(result3) //expect two