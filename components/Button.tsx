import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

type ButtonProps = {
  /** Text displayed inside button. */
  label: string;
  /** Color palette used by button. */
  palette: "light" | "dark";
} & TouchableOpacityProps;

/** A standardized button component to be used throughout the app. */
export default function Button(props: ButtonProps) {
  const { label, palette, ...rest } = props;

  return (
    <TouchableOpacity
      {...rest}
      style={[
        styles.container,
        { backgroundColor: palette === "dark" ? "black" : "white" },
        props.style,
      ]}
    >
      <Text
        style={[styles.text, { color: palette === "dark" ? "white" : "black" }]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    height: 50,
  },
  text: {
    color: "black",
    fontSize: 17,
  },
});
