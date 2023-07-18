import { Text, StyleSheet } from "react-native";

import Colors from "../../constants/color";

function InstructionText({ children }) {
  return <Text style={styles.instructorText}>{children}</Text>;
}

export default InstructionText;

const styles = StyleSheet.create({
  instructorText: {
    color: Colors.accent500,
    fontSize: 24,
  },
});
