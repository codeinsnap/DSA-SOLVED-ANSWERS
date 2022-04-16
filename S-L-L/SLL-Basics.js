// Data Structures In JavaScript 

// Starting from the Basic Classes and their use

// Why we r using classes in javascript for data structures 
// the reason behind is that classes r used to make own datastructure or can say own method that can be used 
// again and again.

// let write our first class base code 

// class Student{
//     constructor( firstName , lastName , year){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.grade = year;
//     }
// }

//OutPut Student {firstName: 'Yogesh', lastName: 'Sharma', grade: 3}

// Now What are Instance Method
// Instance Method are the one that provide functionality that are based on a specific instances
// for example let say our Student method which is mention above
// now let say it is an array and we are adding a new array element to it 
// so for that i'm using push() method , student.push(), here we are using student as a specific instance 
// another example given below 

// class Student{
//     constructor( firstName , lastName , year){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.grade = year;
//         this.late = 0;
//     }
//     fullName(){
//         return `Your FullName is ${this.firstName} ${this.lastName}`;
//     }
//     markLate(){
//         this.late += 1;
//         if(this.late >= 3){
//             return 'You are Expeled!!!!'
//         }
//         return `${this.firstName} ${this.lastName} is late ${this.late} times`
//     }
// }

// let firstStudent = new Student("shivam" , 'singh' , 2);
// let secondStudnet = new Student('gurdeep' , 'singh', 1);

//outPut firstName => Student {firstName: 'shivam', lastName: 'singh', grade: 2}
//outPut firstName.fullName => ƒ fullName(){ return `Your FullName is ${this.firstName} ${this.lastName}`}
//outPut firstName.fullName() => 'Your FullName is shivam singh'

// let create an another Example using class 

// class Point{
//     constructor(x ,y){
//         this.x = x
//         this.y = y
//     }

//     static Distance(a ,b){
//         const dx = a.x - b.x;
//         const dy = a.y - b.y;

//         return Math.hypot( dx ,dy)
//     }
// }

// let p1 = new Point( 10 , 10)
// let p2 = new Point(6 , 2)

// Now to access the Static Method we use class Name which is Point and then we use the Distance method name 
// Point.Distance(p1 , p2)
// outPut => 8.94427190999916 , this is the distance between 2 point.
// we cannot use Static method directly 

//I M P  N O T E S 
// Classes are blueprints that when created make objects known as instances
// Classes are created with the new Keyword 
// The constructor function is a special function that gets run when the class is instantiated
// Instance methods can be added to classes similar to methods in objects
// Class methods can be added using the static keyword


//  LET START WITH OUT FIRST DATA STRUCTURES => SINGLY LINKED LIST 

// what is a Linked List 
// it is used to store values 
// it does have index of any value 
// it consist of nodes 
// it depends on head node and tail node , and each node is connected with the next or another node ,
// starting from the head to the tail node.
// Random access not allowed
// In Array Insertion and deletion has a cascade ripple effect, every this has to be reIndexed
// In Singly Linked list , insertion and deletion is very effiecient and very quick

//Singly Linked List have 2 things 
// it have data or value 
// and a reference to next node 

//Now if we want to the value of the 5th node , we cannot access the value of 5th node directly 
// for that we have to start with the first node till up 5th node or until we get our value 

//In Singly Linked list, each node is connected with one node in only one direction.
//eg : 1 -> 2 -> 3-> 4->

//Doubly Linked List 
//eg: 1 <=> 2 <=> 3 <=> 4


//Creating our first Singly Linked list

// Creating the Push and pop method

class Node{
    constructor(value){
        // console.log(value)
        this.value = value;
        this.next = null;
    }
}

class Input{
    //Here Assigned the head and tail to null for the very first time.
        constructor(){
            this.head = null;
            this.tail = null;
            this.length = 0;
        }
    
        //This below code is a push method, which will add a new node to the list
        //starting with taking input as a value
        push(value){
            //then assigning Node value to a variable 
            var newNode = new Node(value);
            //then I will check weather the head is empty or not, if it is not empty then goes to else part
            if(!this.head){
                //here i will assign header pointer with the value of a node 
                this.head = newNode;
                // and also assign the tail with same value as of the header
                this.tail = this.head;
            }else{
                //here i create a new node after the tail node which was head node in previous
                // and assign the comming value to the node
                this.tail.next = newNode;
                //then i will shift the tail pointer to the last created node or to the last value i have inserted 
                this.tail = newNode;
            }
            //here i am increasing the length of the list of nodes by 1, when ever i insert the new node
            this.length++;
            //and return whatever list of nodes i have with their value
            return this;
        } 

        //the below method is a traverse method, which will display all the values we have in all the nodes
        // traverse(){
        //     var current = this.head;
        //     while(current){
        //         console.log(current.value)
        //         current = current.next;
        //     }
        // }

        //below method is the pop method
        pop(){
            // at first i will the whether do i have the head node or not 
            // if i dont have the head node then simply return undefined
            if(!this.head) return undefined;
            // now as i have the head node 
            // i will create 2 pointers, one will be the current, and second one will be the new tail pointer
            // then i will assign the current pointer to the head node
            var current = this.head;
            // and assign the new tail pointer to the current point value 
            var newTail = current;

            //then creating the loop in which the current point will move to the new node or the next node(if it exists)
            while(current.next){
                //here i will assign the current point's previous value to the newTail
                newTail = current;
                // and move the current point to the next node
                current = current.next;
            }
            //after the completion of the loop we will get the last node in the list and  the last second node in list
            //so now i will assign the tail with the value of the newTail 
            this.tail = newTail;
            //and assign the next node value null
            this.tail.next = null;
            // also decrease the value of the list length by 1, because we detached the last node with the SLL or list of nodes 
            this.length--
            // then i will check the value of length , if it is zero then i will make the head and tail to null
            //which means no nodes exists and prints the undefined at last.
            if(this.length === 0){
                this.head = null;
                this.tail = null;
            }
            return current
        }

        shift(){
            if(!this.head) return undefined;
            var current = this.head;
            if(current.next){
                this.head = current.next;
            }
            this.length--
            if(this.length === 0){
                this.head = null
                this.tail = null
                return undefined
            }
            return current.value;
        }

        unShift(value){
            var newNode = new Node(value)
            if(!this.head){
                this.head = newNode
                this.tail = this.head
            }else{
                var current = this.head
                this.head = newNode
                this.head.next = current
            }
            this.length++
            return this
        }

        get(index){
            if(index >= this.length || index < 0) return "unValid Index number"
            var counter = 0
            var current = this.head;
            while(counter !== index){
                current = current.next;
                counter++;
            }
            return current;
        }

        set( index , value){
            var foundNode = this.get(index)
            if(foundNode){
                foundNode.value = value
                return true
            }
            return false
        }

        insert(index , value){
            if(index === 0) return this.unShift(value)
            if(index === this.length) return this.push(value)
            if(index > 0 && index < this.length){
                var foundNode = this.get(index-1)
                var oldNextNode = foundNode.next
                var newNode =  new Node(value)
                foundNode.next = newNode
                newNode.next = oldNextNode
                this.length++
                return this
            }
            return this
        }

        remove(index ){
            if(index >= this.length || index < 0) return "unValid Index number"
            if(index === 0 ){
                this.shift()
                return true;
            }
            if(index ===     this.length-1){
                this.pop()
                return true
            }
            if(index > 0 && index < this.length-1){
                var foundNode = this.get(index-1)
                var nextNode = foundNode.next
                foundNode.next = nextNode.next
                this.length--
                return true
            }
        }

        reverse(){
            var  node = this.head
            this.head = this.tail
            this.tail = node
            var next;
            var prev = null
            for(let i=0; i < this.length; i++){
                next = node.next
                node.next = prev
                prev = node
                node = next
            }
        }
    }

//one way of accessing the node 
let first = new Input()
let second = new Node()
first.push('1')
first.push('2')
first.push('3')
first.push('4')
first.push('5')
first.push('6')


