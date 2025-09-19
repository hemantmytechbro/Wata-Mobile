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
   
   resendContainer: {
     alignItems: "center",
     marginTop: 16,
   },
   resendTitle: {
     fontSize: 14,
     color: "#8C8C8C",
     marginBottom: 8,
     fontWeight: "500",
   },
   resendText: {
     fontSize: 14,
     color:colors.primary,
     fontWeight: "600",
   },
 });
 