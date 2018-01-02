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

