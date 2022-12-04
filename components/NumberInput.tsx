import { Platform, TextInput, TextInputProps } from "react-native";

const NUM_KEYBOARD =
  Platform.OS === "android" ? "decimal-pad" : "numbers-and-punctuation";

type NumberInputProps = TextInputProps;

export default function NumberInput(props: NumberInputProps) {
  return <TextInput keyboardType={NUM_KEYBOARD} {...props} />;
}
