 import { StyleSheet, Dimensions } from "react-native";
 const { width, height } = Dimensions.get("window");
 
 export const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: "#fff",
   },
 
   /* Top Green Header */
   topHeader: {
     width: "100%",
     flexDirection: "row",
     alignItems: "center",
     justifyContent: "space-between",
     backgroundColor: "#0a5735",
     paddingHorizontal: "4%",
     paddingVertical: "6%",
     
   },
   headerAvatar: {
     width: width * 0.1,
     height: width * 0.1,
     borderRadius: (width * 0.1) / 2,
   },
   headerTitle: {
     color: "#fff",
     fontSize: width * 0.05,
     fontWeight: "bold",
   },
   headerIcons: {
     flexDirection: "row",
     alignItems: "center",
   },
   icon: {
     fontSize: 20,
     color: "#fff",
   },
 
   /* Tabs */
 
 tabsRow: {
   flexDirection: "row",
   backgroundColor: "#0a5735",
    borderBottomLeftRadius: 18,   
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
 },
 activeTabWrapper: {
   borderBottomWidth: 4,
   borderBottomColor: "#fff",
   
 },
 
 
   /* Feed */
   listContainer: {
     paddingBottom: height * 0.12,
   },

   username: {
     fontWeight: "bold",
     fontSize: width * 0.04,
   },
   title: {
     fontSize: width * 0.045,
     marginBottom: 4,
     fontWeight: "600",
   },

   postImage: {
     width: "100%",
     height: height * 0.25,
     borderRadius: 10,
     marginVertical: "2%",
   },
   
   followBtn: {
     paddingHorizontal: "4%",
     paddingVertical: "2%",
     backgroundColor: "#0a5735",
     borderRadius: 20,
   },
   followText: {
     color: "#fff",
     fontSize: width * 0.035,
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
 
card: {
  width: "100%",
  paddingVertical: 14,
  paddingHorizontal: 16,
  borderBottomWidth: 1,
  borderColor: "#eee",
},
cardHeader: {
  flexDirection: "row",
  alignItems: "flex-start",
  gap: 12,
},
avatar: {
  width: 32,
  height: 32,
  borderRadius: 16,
  marginTop: 2,
},
description: {
  flex: 1,
  fontSize: width * 0.038,
  color: "#333",
  lineHeight: 20,
},

specialCircle: {
  width: 50,
  height: 50,
  borderRadius: 25,
  alignItems: "center",
  justifyContent: "center",
},



   
 });
 