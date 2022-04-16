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

    // reverse(){
        // this.head = nodeInput
        //    if(!this.head) return null
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

let nInput = new Ninput()
