 
 import { StyleSheet, Dimensions } from "react-native";
 const { width, height } = Dimensions.get("window");
 import { colors,fonts } from "../../../theme";
 
 export const styles = StyleSheet.create({
 
 progressWrapper: {
       marginVertical: 8,
    backgroundColor: "#fff",
      marginHorizontal:-19,
    borderRadius:10,
     padding: 11,
     elevation: 4,
     paddingVertical:4,
  },
  
  progressBg: {
  height: 12,
  width: "100%",   
  backgroundColor: "#7891A24D",
  borderRadius: 6,
  overflow: "hidden",
  marginVertical: 8, 
},

  progressFill: {
    height: "100%",
    backgroundColor: colors.pgfill,
  },
  rowBetween: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
},

  /* Buttons */
  buttonsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
    gap: 12,
  },
  halfBtnOutlined: {
    flex: 1,
    borderColor: "#f1b600",
    borderWidth: 2,
    backgroundColor: "#fff",
  },
  halfBtnSolid: {
    flex: 1,
    backgroundColor: "#f1b600",
  },

  /* Modal */
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
  },
  modalBox2: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    overflow: "hidden",
     maxHeight: "89%",
    padding: 8,
  },

   
  modalBox: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    overflow: "hidden",
 
  },
  modalHeader: {
     borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "#0a5735",
    paddingVertical: 18,
    paddingHorizontal: 1,
    
  },

  modalTitle: {
    color: "#fff",
     fontWeight: "bold",
     fontSize: width * 0.040,
    textAlign: "center",
    fontFamily:fonts.otsemiBold
  },
  modalProgressBlock: {
    backgroundColor: "#F5F7FA",
    padding: 16,
     marginTop: -12,
    borderRadius: 10,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
  },


  modalLine: {
    fontSize: width * 0.037,
    color: colors.primaryBlack,
    marginBottom: 6,
    fontFamily:fonts.otregular,
  },
  modalLine2: {
    fontSize: width * 0.037,
   color: colors.primaryBlack,
    marginBottom: 6,
    fontFamily:fonts.otmedium,
      fontWeight: "bold",
  },
  bold: {
    fontWeight: "bold",
    color: "#111",
  },
modalSubtitle: {
  color:colors.primaryBlack,
  marginTop: 5,
  fontWeight: "700",
  fontSize: width * 0.03,
  textAlign: "center", 
  fontFamily:fonts.otregular,  
},

  input: {
    borderWidth: 3,
    borderColor: "#fff",
    borderRadius: 20,
    padding: 10,
    marginTop: 8,
    backgroundColor:"#fff",
    color: "#040404ff", 
  },
  

quickBtns: {
  flexDirection: "row",
  justifyContent: "space-between",
  marginTop: 6,
},

quickBtn: {
  backgroundColor: colors.white,
  paddingVertical: 12,   
  paddingHorizontal: 25, 
  borderRadius: 6,
  marginHorizontal: 4,
  alignItems: "center",
  borderColor: colors.border2,
  borderWidth: 1,
},

quickBtnText: {
  fontWeight: "600",
  fontSize: width * 0.037,
  color: "#111",
},


  paymentBtn: {
    marginTop: 10,
    backgroundColor:colors.secondary,
    fontFamily:fonts.otsemiBold,
    fontWeight:"bold",
  },
underline2: {
    height: 6,
    width: "30%",
    backgroundColor: "#ccc",
    marginBottom: 16,
    borderRadius: 50,
    alignSelf: "center",
  },
  modalHeader2: { justifyContent: "center", alignItems: "center", marginBottom: 10 },
  modalTitle2:
   { 
     fontWeight: "700",
     fontSize: width * 0.040,
    
    fontFamily:fonts.otsemiBold,
    textAlign:"center",

    },

divider: {
  height: 1,
  backgroundColor: "#ddd", 
  marginVertical: 6,
},




  
});










