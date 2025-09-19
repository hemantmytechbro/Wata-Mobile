

import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");
import { colors, fonts } from "../../theme";

export default StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#F9F9F9",
  },
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "flex-start",
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
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  otpBox: {
    flex: 1,
    marginHorizontal: 4,
    height: 56,
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: 12,
    textAlign: "center",
    fontSize: 18,
    color: "#2D343C",
  },
  resendContainer: {
    alignItems: "center",
    marginTop: 16,
  },
  resendTitle: {
    fontSize: 14,
    color: "#7891A2",
    marginBottom: 8,
    fontWeight: "500",
    fontFamily:fonts.otmedium
  },
  resendText: {
    color: "#7891A2",
    fontSize: 14,
   marginVertical:8,
    fontWeight: "600",
  },
});
