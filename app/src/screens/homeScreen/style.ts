


import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
import { colors, fonts } from "../../theme";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary, 
  },
  slide: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  bgWrapper: {
    position: "absolute",
    top: 0,
     width: "100%",
    height: height * 0.69, 
    alignItems: "center",
    justifyContent: "flex-start",
    overflow: "hidden",
  },
  topText: {
    fontFamily:fonts.otmedium,
    position: "absolute",
    top: height * 0.08,
    color: "#fff",
    fontSize: width * 0.045,
    textAlign: "center",
    paddingHorizontal: "10%",
  },
  circleWrapper: {
    marginTop: height * 0.15, 
    alignItems: "center",
    justifyContent: "center",
  },
  characterWrapper: {
   
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "110%",
   
  },
  bottomWrapper: {
    marginTop: height * 0.08,
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontFamily:fonts.otbold,
    fontSize: width * 0.06,
    fontWeight: "bold",
    color: colors.secondary, 
    marginBottom: "2%",
  },
  desc: {
     fontFamily:fonts.otregular,
    fontSize: width * 0.04,
    color: "#ffffff", 
    textAlign: "center",
    width: "80%",
  },
 buttonWrapper: {
  marginTop: "6%",
  alignItems: "center",
  width: "100%",
  paddingHorizontal: "10%",
},

  login: {
    color: "#fff",
    
    
  },
  dotContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: height * 0.06,
    alignSelf: "center",
  },
  dot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
   signUpText: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.secondary
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "2%",
  },
});
