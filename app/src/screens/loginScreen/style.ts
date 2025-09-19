
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
  orText: {
    textAlign: "center",
    marginVertical: "4%",
    fontSize: 14,
    color: "#8C8C8C",
  },
  forgotText: {
    fontSize: width * 0.032,
    textAlign: "center",
    
    marginTop: "5%",
    color: colors.primaryBlack,
    fontWeight: "600",
    fontFamily:fonts.otmedium,
  },
  // footer: {
  //   flexDirection: "row",
  //   justifyContent: "center",
  //   marginTop: "8%",
  // },
  footerText: {
    fontFamily: fonts.regular,
   
    fontSize: width * 0.03,
    color: "#8C8C8C",
  },
  signUpText: {
    fontFamily: fonts.semiBold,
    fontSize: 14,
    fontWeight: "600",
    color: colors.secondary,
  },
  orContainer: {
  flexDirection: "row",
  alignItems: "center",
  marginVertical: 12,  
},

orLine: {
  flex: 1,                 
  height: 1,              
  backgroundColor: colors.divider, 
},

orText1: {
  marginHorizontal: 8,     
  fontSize: width * 0.035,
  color: "#5E6C7A",
  fontWeight: "400",
  fontFamily:fonts.otregular,
},


footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: height * 0.07,
    flexDirection: "row",
    justifyContent: "center",
   
    alignItems: "center",
  
  },

});
