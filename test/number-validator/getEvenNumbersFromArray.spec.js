const NumbersValidator = require("../../number-validators");
const { expect } = require("chai");

describe("Testing getEvenNumbersFromArray function", () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  describe("positive tests", () => {
    it("should return all even numbers in array", () => {
      const arr = [1, 2, 5, -8, 24];
      expect(validator.getEvenNumbersFromArray(arr)).to.deep.equal([2, -8, 24]);
    });
  });

  describe("negative tests", () => {
    it("should return empty array if there is no even numbers in array", () => {
      const arr = [1, 3.14, -7, 25];
      expect(validator.getEvenNumbersFromArray(arr)).to.deep.equal([]);
    });
  });

  it("should throw error if value is not an array of 'Numbers'", () => {
    const value = [1, 3.14, "-8", 24];
    expect(() => {
      validator.getEvenNumbersFromArray(value);
    }).to.throw(`[${value}] is not an array of "Numbers"`);
  });
});
