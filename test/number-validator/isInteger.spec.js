const NumbersValidator = require("../../number-validators");
const { expect } = require("chai");

describe("Testing isInteger function", () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  describe("positive tests", () => {
    it("should return true if number is integer", () => {
      expect(validator.isInteger(2)).to.equal(true);
    });
  });

  describe("negative tests", () => {
    it("should return false if number isn't integer", () => {
      expect(validator.isInteger(3.14)).to.equal(false);
    });

    it("should return false if number is NaN", () => {
      expect(validator.isInteger(NaN)).to.equal(false);
    });
  });

  it("should throw error if value isn't number", () => {
    const value = null;
    expect(() => {
      validator.isInteger(value);
    }).to.throw(`[${value}] is not a number`);
  });
});
