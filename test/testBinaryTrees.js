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