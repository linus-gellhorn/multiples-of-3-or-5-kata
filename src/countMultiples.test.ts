import countMultiples from "./countMultiples";

test("countMultiples counts the number of multiples of 3 and 5 up to a given number", () => {
  expect(countMultiples(10)).toBe(23);
  expect(countMultiples(16)).toBe(60);
  expect(countMultiples(-5)).toBe(0);
});
