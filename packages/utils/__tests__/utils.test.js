const { isValidPrice } = require("../lib");

describe("检测价格合法性", () => {
  test("isValidPrice 函数应正确验证价格", () => {
    expect(isValidPrice(100)).toBe(true);
    expect(isValidPrice("50.5")).toBe(true);
    expect(isValidPrice(0)).toBe(false);
    expect(isValidPrice(-10)).toBe(false);
    expect(isValidPrice(".1")).toBe(true);
    expect(isValidPrice("abc")).toBe(false);
  });
});
