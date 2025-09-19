 import { StyleSheet, Dimensions } from "react-native";
 const { width, height } = Dimensions.get("window");
 import { colors, fonts, fontSizes } from "../../theme";
 
 export const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: "#fff",
   },



   topHeader: {
  width: "100%",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center", // center the content
  backgroundColor: "#0a5735",
  paddingHorizontal: "4%",
  paddingVertical: "6%",
  position: "relative",
},
headerAvatar: {
  width: width * 0.1,
  height: width * 0.1,
  borderRadius: (width * 0.1) / 2,
  position: "absolute", // so avatar stays on left
  left: "4%",
},
headerTitle: {
  color: "#fff",
  fontSize: width * 0.052,
  fontWeight: "bold",
  fontFamily:fonts.otbold,
},
headerTitle2: {
  color: "#fff",
  fontSize: width * 0.03,
  
  fontFamily:fonts.otregular,
},

 headerSubtitle: {
  fontSize: 10,
  
},
   
   headerIcons: {
     flexDirection: "row",
     alignItems: "center",
   },
 

   tabsRow: {
  flexDirection: "row",
  backgroundColor: "#0a5735",
   borderBottomLeftRadius: 18,   // adjust radius as per Figma
  borderBottomRightRadius: 18,
  overflow: "hidden",    

},
tabWrapper: {
  flex: 1, 
  alignItems: "center",
  paddingVertical: 10,
},
tabText: {
  fontSize: width * 0.04,
  color: "#fff",
  fontWeight: "500",
   fontFamily:fonts.otmedium,
},
activeTabWrapper: {
  borderBottomWidth: 4,
  borderBottomColor: "#fff",
  
},

   /* Form */

formContainer: {
  flex: 1,
  paddingHorizontal: "5%",
  marginTop: 20,
  paddingBottom: 50, 
},

  
   uploadPreview: {
     width: "100%",
     height: 150,
     borderRadius: 8,
     marginBottom: 10,
   },
 
   /* Bottom Navigator */
   bottomNav: {
     position: "absolute",
     bottom: 0,
     left: 0,
     right: 0,
     height: height * 0.08,
     backgroundColor: "#fff",
     flexDirection: "row",
     justifyContent: "space-around",
     alignItems: "center",
     borderTopWidth: 1,
     borderTopColor: "#eee",
   },
   uploadBox: {
   borderWidth: 1,
   borderColor: "#ccc",
   borderRadius: 8,
   padding: 12,
   marginVertical: 10,
   minHeight: 80,
   justifyContent: "center",
 },
 
 uploadRow: {
   flexDirection: "row",
   alignItems: "center",
   justifyContent: "space-between",
 },
 
 uploadText: {
   flex: 1,
   color: "#555",
   fontSize: 14,
   textAlign: "left",
   marginLeft:5,
 },
 
 browseButton: {
   backgroundColor: colors.secondary,
   paddingVertical: 12,
   paddingHorizontal: 19,
   borderRadius: 40,
 },
 
 browseButtonText: {
   color: "#fff",
   fontSize: 12,
 },
 
 });
 