/* eslint-env mocha */
const assert = chai.assert;

suite("FizzBuzzTest", () => {
  test("greeting", () => {
    assert.equal(greeting(), "Hello, world");
  });
});
function greeting() {
  return "Hello, world";
}
