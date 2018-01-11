const expect = require('chai').expect;
const HashTable = require('../hashTable.js').HashTable;
const HashNode = require('../hashTable.js').HashNode;

describe('Testing hash method of HashTable', function() {

    it("Returns a number when a string is sent", function() {
        var myHT = new HashTable(30);

        var result = myHT.hash("Becca");

        expect(typeof result).to.be.equal('number');
        expect(result).to.be.equal(12);
    });

    it("Returns the correct hash for a string", function() {
        var myHT = new HashTable(30);

        var result = myHT.hash("Becca");

        expect(result).to.be.equal(12);

    })

});

describe('Testing insert method of HashTable', function() {

    it("Inserts a new HashNode in an empty bucket in the HashTable", function() {
        var myHT = new HashTable(30);

        myHT.insert("Dean", "dean@gmail.com");
        myHT.insert("Megan", "megan@gmail.com");

        var result = myHT.buckets[16];

        expect(result).to.deep.equal({ key: "Dean", value: "dean@gmail.com", next: null })

    });

    it("Inserts a new HashNode in an already occupied bucket in the HashTable", function() {

        var myHT = new HashTable(30);

        myHT.insert("Dean", "dean@gmail.com");
        myHT.insert("Dane", "dane@gmail.com");
        myHT.insert("Megan", "megan@gmail.com");

        var result = myHT.buckets[16];

        expect(result.next).to.deep.equal({ key: "Dane", value: "dane@gmail.com", next: null })

    })

})

describe('Testing insert method of HashTable to update an earlier entry', function() {

    it("Updates a HashNode where there is only a single bucket in the HashTable", function() {
        var myHT = new HashTable(30);

        myHT.insert("Dean", "dean@gmail.com");
        myHT.insert("Dean", "deanedited@gmail.com");

        var result = myHT.buckets[16];

        expect(result).to.deep.equal({ key: "Dean", value: "deanedited@gmail.com", next: null })

    });

    it("Updates a HashNode in a bucket in the HashTable with multiple HashNodes", function() {

        var myHT = new HashTable(30);

        myHT.insert("Dean", "dean@gmail.com");
        myHT.insert("Dane", "dane@gmail.com");
        myHT.insert("Megan", "megan@gmail.com");
        myHT.insert("Dane", "daneedited@gmail.com");

        var result = myHT.buckets[16];

        expect(result.next).to.deep.equal({ key: "Dane", value: "daneedited@gmail.com", next: null })

    })

})