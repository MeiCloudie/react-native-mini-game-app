import { Text, StyleSheet } from "react-native";

import Colors from "../../constants/color";

function InstructionText({ children, style }) {
  return <Text style={[styles.instructorText, style]}>{children}</Text>;
}

export default InstructionText;

const styles = StyleSheet.create({
  instructorText: {
    fontFamily: 'open-sans',
    color: Colors.accent500,
    fontSize: 24,
  },
});
