import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { ReactNode, createContext, useContext } from "react";

type SelectorModalContextObj = { onClose?: () => void };
export const SelectorModalContext = createContext<SelectorModalContextObj>({});

type SelectorModalProps = {
  header: string;
  visible: boolean;
  children: ReactNode;
  onClose?: () => void;
};

export function SelectorModal(props: SelectorModalProps) {
  const { header, visible, children, onClose } = props;

  return (
    <SelectorModalContext.Provider value={{ onClose }}>
      <Modal animationType="none" transparent={true} visible={visible}>
        <View style={styles.wrapper}>
          <View style={styles.container}>
            <Text style={styles.header}>{header}</Text>
            {children}
            <View style={styles.separator} />
            <TouchableOpacity
              style={[styles.row, styles.closeRow]}
              onPress={onClose}
            >
              <Text style={styles.closeText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SelectorModalContext.Provider>
  );
}

type SelectorModalOptionProps = {
  children: ReactNode;
  onPress: () => void;
};

export function SelectorModalOption(props: SelectorModalOptionProps) {
  const { children, onPress } = props;
  const contextObj = useContext(SelectorModalContext);

  const callOnPressAndClose = () => {
    onPress();
    contextObj.onClose?.();
  };

  return (
    <>
      <View style={styles.separator} />
      <TouchableOpacity style={styles.row} onPress={callOnPressAndClose}>
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
