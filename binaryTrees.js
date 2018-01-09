function BST(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

module.exports = BST;
// Is the value we want to insert less than or greater than the root node
// If it is less than the root node is the left child empty. If yes insert value there. Else traverse to that node and make it the root node
// If it is greater than the root node is the right child empty. If yes insert value there. Else traverse to that node and make it the root node 

// The following insert function will work only if it is called on the root node of the binary search tree
// How to handle the case when the insert method is not called on the root of the node at the beginning

BST.prototype.insert = function (value) {

    if (value <= this.value) {
        (!this.left) ? this.left = new BST(value) : this.left.insert(value);
    } else {
        (!this.right) ? this.right = new BST(value) : this.right.insert(value);
    }

}

// If value is present return true
// If value is not present return false

BST.prototype.contains = function (value) {

    if (this.value === value) {
        return true;
    } else {
        if (this.left && this.right) {
            return this.left.contains(value) || this.right.contains(value);
        } else if (this.left) {
            return this.left.contains(value);
        } else if (this.right) {
            return this.right.contains(value);
        }
    }

    return false;

}

// Depth First Traversal method in - pre order, in order and post order

BST.prototype.depthFirstTraversal = function (iteratorFunc, type) {

    if (type === "pre-order") iteratorFunc(this);
    if (this.left) this.left.depthFirstTraversal(iteratorFunc, type);
    if (type === "in-order") iteratorFunc(this);
    if (this.right) this.right.depthFirstTraversal(iteratorFunc, type);
    if (type === "post-order") iteratorFunc(this);

}

BST.prototype.breadthFirstTraversal = function (iteratorFunc) {
    var queue = [this];

    while (queue.length) {
        var currentNode = queue.shift();

        iteratorFunc(currentNode);

        if (currentNode.left) queue.push(currentNode.left);
        if (currentNode.right) queue.push(currentNode.right);
    }
}

BST.prototype.getMinVal = function () {

    if (this.left) {
        return this.left.getMinVal();
    } else {
        return this.value;
    }

}

BST.prototype.getMaxVal = function () {
    
    if (this.right) {
        return this.right.getMaxVal();
    } else {
        return this.value;
    }

}