import { toCelsius, toFahrenheit } from "./temperature";

describe("temperature utils", () => {
  describe(toCelsius.name, () => {
    test("with positive numbers", () => {
      expect(toCelsius(68)).toBe(20);
    });
    test("with negative numbers", () => {
      expect(toCelsius(-22)).toBe(-30);
    });
    test("with 0°C", () => {
      expect(toCelsius(32)).toBe(0);
    });
    test("with 0°F", () => {
      expect(toCelsius(0)).toBeCloseTo(-17.78);
    });
  });

  describe(toFahrenheit.name, () => {
    test("with positive numbers", () => {
      expect(toFahrenheit(20)).toBe(68);
    });
    test("with negative numbers", () => {
      expect(toFahrenheit(-30)).toBe(-22);
    });
    test("with 0°C", () => {
      expect(toFahrenheit(0)).toBe(32);
    });
    test("with 0°F", () => {
      expect(toFahrenheit(-17.78)).toBeCloseTo(0);
    });
  });
});
