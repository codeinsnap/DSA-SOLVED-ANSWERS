// Strivers Question Sloving 

//Q1 - Reverse a Link List 

//Ans 
class DSANode{
    constructor(value){
        this.value = value
        this.next = null
    }
}

let nodeInput = new DSANode(10)
nodeInput.next = new DSANode(20)
nodeInput.next.next = new DSANode(30)
nodeInput.next.next.next = new DSANode(40)

class Ninput{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    // Reverse Question Solved
    // My Solution
    // reverse(){
    //     this.head = nodeInput 
    //     var current = this.head
    //     var temp = current
    //     while(current.next){
    //         temp = current;
    //         current = current.next;
    //         this.length++
    //     }
    //     this.tail = temp.next
    //     var node = this.head
    //     this.head = this.tail
    //     this.tail = node
    //     var next;
    //     var prev = null
    //     for(let i=0; i < this.length+1; i++){
    //         next = node.next
    //         node.next = prev
    //         prev = node
    //         node = next
    //     }
    //     return this
    // }
}


//Striver Solution

// var reverseList = function(head) {
//     let empty = new ListNode();
//     empty = null;
//     if(head === null) return empty;    
//     let prev = null;
//         let curr = new ListNode()
//         let temp = new ListNode();
//         curr = head;
//         temp = head.next;
//     while(curr !== null){
//         curr.next = prev;
//         prev = curr;
//         curr = temp;
//         temp = temp?.next;
//     }
//         return prev;
     

// };
let nInput = new Ninput()

