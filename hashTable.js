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
    var hashNode = new HashNode(key, value);

    if (!this.buckets[index]) this.buckets[index] = hashNode;
    else {
        var currentNode = this.buckets[index];

        while (currentNode.next) {
            currentNode = currentNode.next;
        }

        currentNode.next = hashNode;
    }
}