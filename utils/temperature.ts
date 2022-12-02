export function toCelsius(inFahrenheit: number) {
  return ((inFahrenheit - 32) * 5) / 9;
}

export function toFahrenheit(inCelsius: number) {
  return (inCelsius * 9) / 5 + 32;
}
