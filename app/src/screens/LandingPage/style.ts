
import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
import { colors,fonts } from "../../theme";

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
    backgroundColor: colors.primary,
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
    fontFamily:fonts.otsemiBold,
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
 backgroundColor: colors.primary,
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
  fontFamily:fonts.otmedium,
},
activeTabWrapper: {
  borderBottomWidth: 4,
  borderBottomColor: "#fff",
  
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

  /* Modals */
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  modalTitle: {
    backgroundColor: "#fff",
    padding: "5%",
    borderRadius: 10,
    fontSize: width * 0.05,
    fontWeight: "bold",
  },
  closeBtn: {
    marginTop: "5%",
    color: "red",
    fontSize: width * 0.045,
  },
  actionsRow: {
  flexDirection: "row",
  justifyContent: "space-around", // spreads actions evenly
  alignItems: "center",
  marginTop: 10,
},

actionButton: {
  flexDirection: "row",
  alignItems: "center",
  paddingHorizontal: 6,
},

actionText: {
  fontSize: 14,
  color: "#333",
  marginLeft: 4, // small space between icon & number
},

// commments
modalOverlayComments: {
   flex: 1,
  justifyContent: "flex-end",
},

modalContainerComments: {
  maxHeight: "80%",   
           flex: 1, 
  backgroundColor: "#fff",
  borderTopLeftRadius: 16,
  borderTopRightRadius: 16,
  padding: 16,
},

modalHeaderComments: {
  
   justifyContent: "center", 
  alignItems: "center",     
  marginBottom: 10,
},
modalTitleComments: {
 
    
  fontSize: 18,
  fontWeight: "600",
},
closeBtnComments: {
  fontSize: 16,
  color: "red",
},

commentRowComments: {
  flexDirection: "row",
  marginBottom: 15,
},
avatarComments: {
  width: 40,
  height: 40,
  borderRadius: 20,
  marginRight: 10,
},
usernameComments: {
  fontSize: 14,
  fontWeight: "600",
  color: "#333",
},
commentTextComments: {
  fontSize: 14,
  color: "#555",
  marginVertical: 2,
},
commentActionsComments: {
  flexDirection: "row",
  alignItems: "center",
  gap: 15,
},
commentTimeComments: {
  fontSize: 12,
  color: "#999",
},
replyBtnComments: {
  fontSize: 12,
  fontWeight: "500",
  color: "#0a5735",
},

commentInputRowComments: {
  flexDirection: "row",
  alignItems: "center",
  paddingVertical: 8,
  borderTopWidth: 1,
  borderTopColor: "#eee",
},
avatarSmallComments: {
  width: 32,
  height: 32,
  borderRadius: 16,
  marginRight: 10,
},
inputComments: {
  flex: 1,
  fontSize: 14,
  color: "#333",
  paddingVertical: 6,
},
sendBtnComments: {
  fontSize: 14,
  fontWeight: "600",
  color: "#0a5735",
},
underlineComments: {
  height: 6,               
  width: "30%",             
  backgroundColor: "#ccc",
  marginBottom: 16,
  borderRadius: 50,
  alignSelf: "center",     
},



 
});
