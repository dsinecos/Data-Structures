const assert = require('chai').assert;
const should = require('chai').should();
const expect = require('chai').expect;

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

describe('Testing removeTail method', function() {
    it('removeTail returns null when the Linked List is empty', function() {
        var testLL = new LinkedList();
        var result = testLL.removeTail();

        should.not.exist(result);
    })

    it('removeTail works when Linked List has only one element', function() {
        var testLL = new LinkedList();
        testLL.addToHead(2000);
        var result = testLL.removeTail();

        // should.not.exist(testLL.head);
        // should.not.exist(testLL.tail);
        // testLL.should.deep.equal({ head: null, tail: null });
        // expect(testLL).to.equal({ head: null, tail: null });
        expect(testLL.head).to.be.null;
        expect(testLL.tail).to.be.null;
        // expect(testLL).to.deep.equal({ head: null, tail: null });
        result.should.equal(2000);
    })

    it('removeTail works when Linked List has multiple elements', function() {
        var testLL = new LinkedList();
        testLL.addToHead(2000);
        testLL.addToHead(1000);
        testLL.addToTail(3000);
        testLL.addToTail(4000);

        var result = testLL.removeTail();

        result.should.equal(4000);
        expect(testLL.tail).to.exist;
        expect(testLL.tail.next).to.be.null;
        expect(testLL.tail.prev).to.exist;
        // testLL.tail.should.equal('3000');
    })
});

describe("Testing removeTail method using Udemy's test cases", function() {
    it("Case 1", function() {
        var ll = new LinkedList();
        ll.addToHead('one');
        ll.addToHead('two');
        ll.addToHead('three');

        var result = ll.removeTail();

        expect(result).to.be.equal('one');
    })
});

describe("Testing search method", function() {
    it("Returns null on an empty Linked List", function() {
        var testLL = new LinkedList();

        var result = testLL.search(1000);

        expect(result).to.be.null;
    })

    it("Returns search result which is an instanceOf Node when search value is present in Linked List", function() {
        var testLL = new LinkedList();
        testLL.addToHead(1000);
        testLL.addToHead(2000);
        testLL.addToHead(3000);
        testLL.addToHead(4000);

        var result = testLL.search(1000);

        expect(result).to.be.instanceOf(Node);
        expect(result.value).to.be.equal(1000);
    })

    it("Returns null when search value is not present in Linked List", function() {
        var testLL = new LinkedList();
        testLL.addToHead(1000);
        testLL.addToHead(2000);
        testLL.addToHead(3000);
        testLL.addToHead(4000);

        var result = testLL.search(5000);

        expect(result).to.be.null;
    })
})

describe("Testing search method using Udemy courses test cases", function() {
    it("Case 1", function() {
        var testLL = new LinkedList();
        testLL.addToHead(123);
        testLL.addToHead(70);
        testLL.addToHead('hello');
        testLL.addToHead(19);
        testLL.addToHead('world');
        testLL.addToHead(20);

        var result = testLL.search(70);

        expect(result).to.be.instanceOf(Node);
        expect(result.value).to.be.equal(70);
    })

    it("Case 2", function() {
        var testLL = new LinkedList();
        testLL.addToHead(123);
        testLL.addToHead(70);
        testLL.addToHead('hello');
        testLL.addToHead(19);
        testLL.addToHead('world');
        testLL.addToHead(20);

        var result = testLL.search('world');

        expect(result).to.be.instanceOf(Node);
        expect(result.value).to.be.equal('world');
    })

    it("Case 3", function() {
        var testLL = new LinkedList();
        testLL.addToHead(123);
        testLL.addToHead(70);
        testLL.addToHead('hello');
        testLL.addToHead(19);
        testLL.addToHead('world');
        testLL.addToHead(20);

        var result = testLL.search(10);

        expect(result).to.be.null;
    })

})

describe("Testing indexOf method", function() {
    it("Returns null on an empty Linked List", function() {
        var testLL = new LinkedList();

        var result = testLL.search(1000);

        expect(result).to.be.null;
    })

    it("Returns null when search value is not present in Linked List", function() {
        var testLL = new LinkedList();
        testLL.addToHead(1000);
        testLL.addToHead(2000);
        testLL.addToHead(3000);
        testLL.addToHead(4000);

        var result = testLL.indexOf(5000);

        expect(result).to.be.null;
    })

    it("Returns result array when search value is present only once in Linked List", function() {
        var testLL = new LinkedList();
        testLL.addToHead(1000);
        testLL.addToHead(2000);
        testLL.addToHead(3000);
        testLL.addToHead(4000);

        var result = testLL.indexOf(1000);

        expect(result).to.be.instanceOf(Array);
        expect(result).to.deep.equal([3]);
    })

    it("Returns result array when search value is present multiple times in Linked List", function() {
        var testLL = new LinkedList();
        testLL.addToHead(1000);
        testLL.addToHead(2000);
        testLL.addToHead(3000);
        testLL.addToHead(4000);
        testLL.addToHead(1000);

        var result = testLL.indexOf(1000);

        expect(result).to.be.instanceOf(Array);
        expect(result).to.deep.equal([0, 4]);
    })
})

describe("Testing indexOf method using Udemy courses test cases", function() {

    it("Case 1", function() {
        var testLL = new LinkedList();
        testLL.addToTail(1);
        testLL.addToTail(5);
        testLL.addToTail(3);
        testLL.addToTail(5);
        testLL.addToTail(8);
        testLL.addToTail(7);
        testLL.addToTail(5);

        var result = testLL.indexOf(5);

        expect(result).to.be.instanceOf(Array);
        expect(result).to.deep.equal([1, 3, 6]);
    })

})
