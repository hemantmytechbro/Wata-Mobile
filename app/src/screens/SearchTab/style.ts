
 import { StyleSheet, Dimensions } from "react-native";
 const { width, height } = Dimensions.get("window");
 
 export const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: "#fff",
   },


searchInput: {
  flex: 1,
  marginHorizontal: 18,
  paddingHorizontal: 12,
  paddingVertical: 8,
  backgroundColor: "rgba(113, 109, 109, 0.5)", 
  borderRadius: 20,
  fontSize: 14,
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
  backgroundColor: "#0a5735",
  borderBottomLeftRadius: 18,
  borderBottomRightRadius: 18,
  overflow: "hidden",
},

tabsContainer: {
  paddingHorizontal: 12,
  alignItems: "center",
},

tabWrapper: {
  paddingVertical: 12,
  paddingHorizontal: 18,   
  marginRight: 12,         
  borderBottomWidth: 3,
  borderBottomColor: "transparent",
},

tabText: {
  fontSize: width * 0.04,
  color: "#fff",
  fontWeight: "500",
},

activeTabWrapper: {
  borderBottomColor: "#fff",  
},

activeTabText: {
  color: "#fff",
  fontWeight: "700",
},

   /* Feed */
   listContainer: {
     paddingBottom: height * 0.12,
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
 
 });