const assert = require("chai").assert;
const index = require("../index");

describe("App", () => {
  it("returns hello world", () => {
    assert.equal(index(), "hello world");
  });
});
