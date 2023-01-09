/** Converts a temperature from F to C. */
export function toCelsius(inFahrenheit: number) {
  return ((inFahrenheit - 32) * 5) / 9;
}

/** Converts a temperature from C to F. */
export function toFahrenheit(inCelsius: number) {
  return (inCelsius * 9) / 5 + 32;
}
