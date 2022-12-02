import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

type ButtonProps = {
  label: string;
  palette: "light" | "dark";
} & TouchableOpacityProps;

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
