


import { StyleSheet, Dimensions } from "react-native";
import { colors, fontSizes, fonts } from "../../theme";


const { height, width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  
    formCard: {
    width: "90%",
    backgroundColor: "#FFF",
    borderRadius: 16,
    padding: "6%",
    marginTop: -height * 0.09, 
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
    marginLeft:20,
  },
  cardText: {
    fontSize: fontSizes.md,
    fontFamily: fonts.otmedium,
    color: colors.text,
    textAlign: "center",
    marginBottom: 20,
    lineHeight: 22,
  },

  goldBtn: {
    width: "100%",
    borderRadius: 12,
    backgroundColor: "#E6A93C", 
    paddingVertical: 14,
    alignItems: "center",
  },

  goldBtnText: {
    fontSize: fontSizes.md,
    fontFamily: fonts.medium,
    color: colors.white,
  },
});
