import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { ReactNode } from "react";

type SelectorModalProps = {
  header: string;
  visible: boolean;
  children: ReactNode;
};

export function SelectorModal(props: SelectorModalProps) {
  const { header, visible, children } = props;

  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <Text style={styles.header}>{header}</Text>
          {children}
          <View style={styles.separator} />
          <TouchableOpacity style={[styles.row, styles.closeRow]}>
            <Text style={styles.closeText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

type SelectorModalOptionProps = {
  children: ReactNode;
};

export function SelectorModalOption(props: SelectorModalOptionProps) {
  const { children } = props;

  return (
    <>
      <View style={styles.separator} />
      <TouchableOpacity style={styles.row}>
        {children}
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 70,
    backgroundColor: "#000000aa",
  },
  container: {
    backgroundColor: "white",
    borderRadius: 13,
    maxWidth: 250,
    flexGrow: 1,
  },
  header: {
    color: "#999",
    textAlign: "center",
    marginTop: 9,
    marginBottom: 8,
    fontSize: 11,
  },
  separator: {
    height: 1,
    backgroundColor: "#ddd",
  },
  row: {
    height: 47,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  closeRow: {
    justifyContent: "center",
    height: 52,
  },
  closeText: {
    color: "crimson",
    fontWeight: "bold",
  },
});
