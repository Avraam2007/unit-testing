const NumbersValidator = require("../../number-validators");
const { expect } = require("chai");

describe("Testing isAllNumbers function", () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  describe("positive tests", () => {
    it("should return true if all elements in array are numbers", () => {
      const arr = [1, 3.14, -8, 24];
      expect(validator.isAllNumbers(arr)).to.be.true;
    });
  });

  describe("negative tests", () => {
    it("should return false if all elements in array aren't numbers", () => {
      const arr = [1, 3.14, "-8", 24];
      expect(validator.isAllNumbers(arr)).to.be.false;
    });
  });

  it("should throw error if value is not number", () => {
    const value = undefined;
    expect(() => {
      validator.isAllNumbers(value);
    }).to.throw(`[${value}] is not an array`);
  });
});
