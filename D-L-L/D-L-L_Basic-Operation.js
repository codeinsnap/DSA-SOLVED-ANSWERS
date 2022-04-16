class DNode{
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value){
        var newNode = new DNode(value)
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else{
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length++
        return this
    }

    pop(){
        if(this.length === 0) return null
        if(this.length === 1){
            this.head = null
            this.tail = null
            this.length = 0
        }
        if(this.length > 0){ 
            var temp = this.tail.prev
            temp.next = null
            this.tail.prev = null
            this.tail = temp
            this.length--
        }
        return this
    }

    shift(){
        if(!this.head) return null
        if(this.length === 1){
            this.head = null
            this.tail = null
            this.length = 0
            return this
        }
            var temp = this.head
            this.head = temp.next
            this.head.prev = null
            temp.next = null
            this.length--
            return temp
    }

    unShift(value){
        var newNode =new DNode(value)
        if(!this.head){
            this.head = newNode
            this.tail = this.head
        } else{
            var temp = this.head
            this.head = newNode
            this.head.next = temp
            temp.prev = this.head
        }
        this.length++
        return this
    }

    get(index){
        if(index >= this.length || index < 0 ) return null
        if(index === 0) return this.head
        if(index === this.length-1) return this.tail
        if(index > this.length/2 ){
            var counter = this.length-1
            var temp = this.tail
            while(counter != index){
                temp = temp.prev
                counter--
            }
            return temp
        }else{
            var counter = 0
            var temp = this.head
            while(counter != index){
                temp = temp.next
                counter++
            }
            return temp
        }   
    }

    set(index , value){
        var foundNode = this.get(index)
        if(foundNode != null){
            foundNode.value = value
            return foundNode
        }
        return null
    }

    insert(index, value){
        var newNode = new DNode(value)
        if(index >= this.length || index < 0 ) return null
        if(index === 0) return this.unShift(value)
        if(index === this.length-1) return this.push(value)
        var temp = this.get(index-1)
        var temp2 = temp.next
        temp.next = newNode
        newNode.prev = temp
        newNode.next = temp2
        temp2.prev = newNode
        this.length++
        return this
    }

    remove(index){
        if(index >= this.length || index < 0 ) return null
        if(index === 0 ) return this.shift()
        if(index === this.length-1) return this.pop()
        var foundNode = this.get(index)
        var nextNode = foundNode.next
        var preNode = foundNode.prev
        preNode.next = nextNode
        nextNode.prev = preNode
        foundNode.next = null
        foundNode.prev = null
        this.length--
        return foundNode
    }
}

let list = new DoublyLinkList()
list.push('a')
list.push('b')
list.push('c')
list.push('d')
list.push('e')
list.push('f')
list.push('g')
