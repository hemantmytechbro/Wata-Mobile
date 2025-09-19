
 

import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../../theme";

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

 

  card: {
    marginHorizontal: 20,
    marginTop: -SCREEN_HEIGHT * 0.08, // floating effect
    backgroundColor: colors.white,
    borderRadius: 16,
    paddingVertical: 25,
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },

  button: {
    marginTop: 24,
  },
});













