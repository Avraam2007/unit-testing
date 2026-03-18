const NumbersValidator = require("../../number-validators");
const { expect } = require("chai");

describe("Testing isNumberEven function", () => {

    let validator;

    beforeEach(()=>{
        validator = new NumbersValidator();
    })

    afterEach(()=>{
        validator = null;
    })

    describe("positive tests", ()=> {
        it("should return true if number is even", ()=>{
            expect(validator.isNumberEven(2)).to.be.true;
        })
    })

    describe("negative tests", () => {
        it("should return false if number is odd", () => {
            expect(validator.isNumberEven(3)).to.be.false;
        })
    })

    it("should throw error if value is not number", () => {
        const value = null;
        expect(()=>{
            validator.isNumberEven(value)
        }).to.throw(`[${value}] is not of type "Number" it is of type "${typeof value}"`);
    })
})