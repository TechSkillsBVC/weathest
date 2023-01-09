import { Platform, TextInput, TextInputProps } from "react-native";
import { useEffect, useState } from "react";

const NUM_KEYBOARD =
  Platform.OS === "android" ? "decimal-pad" : "numbers-and-punctuation";

type NumberInputProps = {
  /** The value to show for the number input. */
  value?: number | null;
  /** Callback that is called when the number input's content changes. */
  onChangeValue?: (val: number | null) => void;
} & Omit<TextInputProps, "value" | "onChangeText">;

/**
 * A standardized component similar to {@link TextInput} but optimized for
 * inputting numbers. Discards non-numeric characters, and receives and outputs
 * numbers instead of strings.
 */
export default function NumberInput(props: NumberInputProps) {
  const { onChangeValue, value, ...rest } = props;
  const [internalVal, setInternalVal] = useState<string>(toInternalVal(value));

  useEffect(() => {
    setInternalVal(toInternalVal(value));
  }, [value]);

  return (
    <TextInput
      testID="input"
      keyboardType={NUM_KEYBOARD}
      value={internalVal}
      {...rest}
      onChangeText={(text) => {
        const sanitized = removeNonNumericChars(text);
        setInternalVal(sanitized);

        const cast = sanitized ? Number(sanitized) : null;
        if (!Number.isNaN(cast)) {
          onChangeValue?.(cast);
        }
      }}
    />
  );
}

function toInternalVal(num: number | null | undefined): string {
  return num != null ? num.toString() : "";
}

function removeNonNumericChars(text: string): string {
  let sanitized = "";
  for (let chr of text) {
    if (
      // it's a dash at the very beginning
      (chr === "-" && !sanitized) ||
      // it's the very first dot
      (chr === "." && !sanitized.includes(".")) ||
      // it's a digit
      !isNaN(parseInt(chr, 10))
    ) {
      sanitized += chr;
    }
  }
  return sanitized;
}
