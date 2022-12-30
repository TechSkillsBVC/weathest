import { render, screen } from "@testing-library/react-native";

import NumberInput from "./NumberInput";

describe(NumberInput.name, () => {
  test("value from prop is displayed on first render", () => {
    render(<NumberInput value={50} />);
    expect(screen.getByTestId("input")).toHaveProp("value", "50");
  });

  test("value from prop is reactive", () => {
    const { rerender } = render(<NumberInput value={50} />);
    rerender(<NumberInput value={100} />);
    expect(screen.getByTestId("input")).toHaveProp("value", "100");
  });
});
