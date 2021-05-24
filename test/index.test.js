const assert = require("chai").assert;
const index = require("../index");

describe("App", () => {
  it("should return hello world", () => {
    assert.equal(index(), "hello world");
  });
});
