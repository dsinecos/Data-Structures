exports.HashTable = HashTable;
exports.HashNode = HashNode;

function HashTable(size) {
    this.buckets = Array(size);
    this.numBuckets = this.buckets.length;
}

function HashNode(key, value, next) {
    this.key = key;
    this.value = value;
    this.next = next || null;
}

HashTable.prototype.hash = function (key) {
    var total = 0;

    for (char of key) {
        total += char.charCodeAt(0);
    }

    return total % this.numBuckets;
}

HashTable.prototype.insert = function (key, value) {

    var index = this.hash(key);

    if (!this.buckets[index]) this.buckets[index] = new HashNode(key, value);
    else {


        var currentNode = this.buckets[index];

        while (currentNode.next) {

            if (currentNode.key === key) {
                currentNode.value = value;
                return;
            } else {
                currentNode = currentNode.next;
            }
        }

        if (currentNode.key === key) {
            currentNode.value = value;
            return;
        } else {
            currentNode.next = new HashNode(key, value);
        }


    }
}

HashTable.prototype.get = function (key) {
    var index = this.hash(key);

    var currentNode = this.buckets[index];

    while (currentNode) {

        if (currentNode.key === key) {
            return currentNode;
        } else {
            currentNode = currentNode.next;
        }

    }

    return null;
}

HashTable.prototype.retrieveAll = function() {
    var arrayHashNodes = [];

    for(var startingHashNode of this.buckets) {
        
        var currentNode = startingHashNode;

        while(currentNode) {
            arrayHashNodes.push(currentNode);
            currentNode = currentNode.next;
        }

    }

    return arrayHashNodes;
}