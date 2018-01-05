const expect = require('chai').expect;
const BST = require('../binaryTrees.js');

describe("Testing Insert Method on BST", function() {
    it("Inserts a node on a BST", function() {
        var bst = new BST(50);
        
        bst.insert(30);
        bst.insert(70);
        bst.insert(100);
        bst.insert(60);
        bst.insert(59);
        bst.insert(20);
        bst.insert(45);
        bst.insert(35);
        bst.insert(85);
        bst.insert(105);
        bst.insert(10);

        var result = bst.right.left.left.value;

        expect(result).to.be.equal(59);

        result = bst.right.right.value;

        expect(result).to.be.equal(100);

        result = bst.left.right.left.value;
        
        expect(result).to.be.equal(35);

    })
})

describe("Testing Contains Method on BST", function() {
    it("When BST contains the queried value", function() {
        var bst = new BST(50);
        
        bst.insert(30);
        bst.insert(70);
        bst.insert(100);
        bst.insert(60);
        bst.insert(59);
        bst.insert(20);
        bst.insert(45);
        bst.insert(35);
        bst.insert(85);
        bst.insert(105);
        bst.insert(10);

        var result = bst.contains(100);

        expect(result).to.be.true;

    })

    it("When BST does not contain the queried value", function() {
        var bst = new BST(50);
        
        bst.insert(30);
        bst.insert(70);
        bst.insert(100);
        bst.insert(60);
        bst.insert(59);
        bst.insert(20);
        bst.insert(45);
        bst.insert(35);
        bst.insert(85);
        bst.insert(105);
        bst.insert(10);

        var result = bst.contains(110);

        expect(result).to.be.false;

    })

    it("Testing BST on root node", function() {
        var bst = new BST(50);
        
        bst.insert(30);
        bst.insert(70);
        bst.insert(100);
        bst.insert(60);
        bst.insert(59);
        bst.insert(20);
        bst.insert(45);
        bst.insert(35);
        bst.insert(85);
        bst.insert(105);
        bst.insert(10);

        var result = bst.contains(50);

        expect(result).to.be.true;

    })
})

describe("Testing Depth First Traversal Method on BST", function() {
    it("When BST contains only the root node", function() {
        var bst = new BST(50);
        var resultArray = [];

        bst.depthFirstTraversal(function(node) {
            resultArray.push(node.value);
        });

        expect(resultArray).to.deep.equal([50]);

    })

    it("When BST contains three nodes", function() {
        var bst = new BST(50);
        bst.insert(30);
        bst.insert(70);

        var resultArray = [];

        bst.depthFirstTraversal(function(node) {
            resultArray.push(node.value);
        });

        expect(resultArray).to.deep.equal([30, 50, 70]);

    })

    it("When BST contains multiple nodes", function() {
        var bst = new BST(50);
        
        bst.insert(30);
        bst.insert(70);
        bst.insert(100);
        bst.insert(60);
        bst.insert(59);
        bst.insert(20);
        bst.insert(45);
        bst.insert(35);
        bst.insert(85);
        bst.insert(105);
        bst.insert(10);

        var resultArray = [];

        bst.depthFirstTraversal(function(node) {
            resultArray.push(node.value);
        });

        expect(resultArray).to.deep.equal([10, 20, 30, 35, 45, 50, 59, 60, 70, 85, 100, 105]);

    })
})