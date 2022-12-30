import {
  RenderResult,
  fireEvent,
  render,
  screen,
} from "@testing-library/react-native";

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

  describe("when user inputs", () => {
    let changeValueHandler: jest.Mock;
    let input: ReturnType<RenderResult["getByTestId"]>;

    beforeEach(() => {
      changeValueHandler = jest.fn();
      render(<NumberInput onChangeValue={changeValueHandler} />);
      input = screen.getByTestId("input");
    });

    describe("integer", () => {
      beforeEach(() => fireEvent.changeText(input, "50"));

      it("calls `onChangeValue` prop", () => {
        expect(changeValueHandler).toBeCalledWith(50);
      });

      it("displays value", () => {
        expect(input).toHaveProp("value", "50");
      });
    });

    describe("zero", () => {
      beforeEach(() => fireEvent.changeText(input, "0"));

      it("calls `onChangeValue` prop", () => {
        expect(changeValueHandler).toBeCalledWith(0);
      });

      it("displays value", () => {
        expect(input).toHaveProp("value", "0");
      });
    });

    describe("decimal", () => {
      beforeEach(() => fireEvent.changeText(input, "50.5"));

      it("calls `onChangeValue` prop", () => {
        expect(changeValueHandler).toBeCalledWith(50.5);
      });

      it("displays value", () => {
        expect(input).toHaveProp("value", "50.5");
      });
    });

    describe("negative decimal", () => {
      beforeEach(() => fireEvent.changeText(input, "-50.5"));

      it("calls `onChangeValue` prop", () => {
        expect(changeValueHandler).toBeCalledWith(-50.5);
      });

      it("displays value", () => {
        expect(input).toHaveProp("value", "-50.5");
      });
    });

    describe("invalid number --482", () => {
      beforeEach(() => fireEvent.changeText(input, "--482"));

      it("calls `onChangeValue` prop with sanitized value", () => {
        expect(changeValueHandler).toBeCalledWith(-482);
      });

      it("displays sanitized value", () => {
        expect(input).toHaveProp("value", "-482");
      });
    });

    describe("invalid number 45-8", () => {
      beforeEach(() => fireEvent.changeText(input, "45-8"));

      it("calls `onChangeValue` prop with sanitized value", () => {
        expect(changeValueHandler).toBeCalledWith(458);
      });

      it("displays sanitized value", () => {
        expect(input).toHaveProp("value", "458");
      });
    });

    describe("invalid number 42.4.3.2", () => {
      beforeEach(() => fireEvent.changeText(input, "42.4.3.2"));

      it("calls `onChangeValue` prop with sanitized value", () => {
        expect(changeValueHandler).toBeCalledWith(42.432);
      });

      it("displays sanitized value", () => {
        expect(input).toHaveProp("value", "42.432");
      });
    });

    describe("invalid number 42foo.2", () => {
      beforeEach(() => fireEvent.changeText(input, "42foo.2"));

      it("calls `onChangeValue` prop with sanitized value", () => {
        expect(changeValueHandler).toBeCalledWith(42.2);
      });

      it("displays sanitized value", () => {
        expect(input).toHaveProp("value", "42.2");
      });
    });

    describe("number with trailing dot", () => {
      beforeEach(() => fireEvent.changeText(input, "123."));

      it("calls `onChangeValue` prop with sanitized value", () => {
        expect(changeValueHandler).toBeCalledWith(123);
      });

      it("displays value with trailing dot, allowing user to continue inputting a decimal", () => {
        expect(input).toHaveProp("value", "123.");
      });
    });

    describe("non-number text", () => {
      beforeEach(() => fireEvent.changeText(input, "foo"));

      it("calls `onChangeValue` prop with sanitized null`", () => {
        expect(changeValueHandler).toBeCalledWith(null);
      });

      it("displays empty field", () => {
        expect(input).toHaveProp("value", "");
      });
    });
  });
});
