const assert = require('chai').assert;
const should = require('chai').should();

const LinkedList = require('../linkedList.js').LinkedList;
const Node = require('../linkedList.js').Node;

describe('Testing LinkedList', function () {
    it("Function constructor for Linked List exists", function () {
        // assert.equal(typeof LinkedList, 'function');
        LinkedList.should.be.a('function');
    })

    it("Function constructor for Node exists", function () {
        // assert.equal(typeof Node, 'function');
        Node.should.be.a('Function');
    })
});

describe('Testing removeHead method', function () {
    it("removeHead returns null when Linked List is empty", function () {
        var testLL = new LinkedList();
        var result = testLL.removeHead();
        should.not.exist(result);
    })

    it("removeHead works when Linked List has only one element", function () {
        var testLL = new LinkedList();
        testLL.addToHead(2000);
        var result = testLL.removeHead();
        result.should.equal(2000);
    })

    it("removeHead works when Linked List has multiple elements", function () {
        var testLL = new LinkedList();
        testLL.addToHead(1000);
        testLL.addToHead(2000);
        testLL.addToTail(3000);

        var result = testLL.removeHead();
        result.should.equal(2000);
    })
})

