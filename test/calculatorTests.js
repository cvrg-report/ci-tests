// Mocha using Chai
const expect = require("chai").expect;

// Load handler
const Calculator = require( "../lib/Calculator");

// Tests
describe("Tests for our most stupid calculator", function() {

    const calculator = new Calculator();

    it( "Check if it can add correctly", function() {

        expect(calculator.add(1, 2)).to.equal(3);

    });

    it( "Check if it can subtract correctly", function() {

        expect(calculator.subtract(5, 2)).to.equal(3);

    });

    it( "Check if it can multiply correctly", function() {

        expect(calculator.multiply(2, 2)).to.equal(4);

    });

    it( "Check if it can divide correctly", function() {

        expect(calculator.divide(2, 2)).to.equal(1);

    });

});