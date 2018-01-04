// Create constructor functions for Linked List and Node

function Node(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
}

function LinkedList() {
    this.head = null;
    this.tail = null;

}

function learnTesting() {
    return 'Hello';
    // return 2;
}

exports.LinkedList = LinkedList;
exports.Node = Node;

// addToHead 
// Attaching the head and tail when using addToHead method
// If LL is empty both will point at the recently added node
// If LL is not empty, head will point at the recently added node whereas tail will remain unchanged
// The prev pointer of the node that was previously pointed to by this.head should point to the recently added node

LinkedList.prototype.addToHead = function (value) {
    var newNode = new Node(value, this.head, null);

    if (this.head) {
        this.head.prev = newNode;
    } else {
        this.tail = newNode;
    }

    this.head = newNode;
}

// addToTail
// If LL is empty - Tail and Head will point to the same node
// If LL is not empty - Tail will point to the new node | Previous Tail's next will point to the new node | New node's previous will point to the previous Tail

LinkedList.prototype.addToTail = function(value) {
    var newNode = new Node(value, null, this.tail);

    if(this.tail) {
        this.tail.next = newNode;
    } else {
        this.head = newNode;
    }

    this.tail = newNode;
}

// removeHead
// If LL is empty - No operation
// If LL is not empty - 
//   Has only one element - Return node | Set this.head to null | Set this.tail to null
//   Has more than one element - Return node | Set this.head to this.head.next | Set this.head.next.prev to null

LinkedList.prototype.removeHead = function() {
    if(this.head) { // LL is not empty

        if(this.head.next) { // LL has more than one element
            
            var removedNode = this.head;
            this.head.next.prev = null;
            this.head = this.head.next;
            return removedNode.value;     

        } else { // LL has only one element

            var removedNode = this.head;

            this.head = null;
            this.tail = null;
            return removedNode.value;

        }

    }

    return null;
}

LinkedList.prototype.removeTail = function() {
    if(this.tail) {

        if(this.tail.prev) { // LL has more than one element
            var removedNode = this.tail;

            this.tail = removedNode.prev;
            this.tail.next = null;
            return removedNode.value;
        } else {

            var removedNode = this.tail;

            this.tail = null;
            this.head = null;
            return removedNode.value;
        }
    }

    return null;
}

// If LL is empty return null
// If LL is not empty, traverse LL, compare value and return the specific node
// When LL is at last node - edge case

LinkedList.prototype.search = function(searchValue) {
    var currentNode = this.head;

    while(currentNode) {
        if(currentNode.value === searchValue) {
            return currentNode;
        }
        currentNode = currentNode.next;
    }

    return null;
}

