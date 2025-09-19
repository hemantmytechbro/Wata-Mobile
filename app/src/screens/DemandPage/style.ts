
import { StyleSheet, Dimensions } from "react-native";
import { fonts,colors } from "../../theme";
const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
 
outcomeRow: {
  flexDirection: "row",
  alignItems: "center",
  paddingVertical: 8,
},

outcomeIconWrapper: {
  width: 32,            
  height: 32,           
  borderRadius: 16,     
  justifyContent: "center",
  alignItems: "center",
  marginRight: 10,     
},

outcomeText: {
  fontSize: width * 0.032,
  color: "#333",
  fontFamily:fonts.otsemiBold,
  fontWeight:"700"
  
},



divider: {
  height: 1.5,
  backgroundColor: colors.divider,
  marginVertical: 3,

  width: "100%",     
},

  /* Header */
  topHeader: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#0a5735",
    paddingHorizontal: "4%",
    paddingVertical: "7%",
  },
  headerTitle: {
    color: "#fff",
    fontSize: width * 0.05,
    fontWeight: "bold",
    flex: 1,
    textAlign: "left",
    marginHorizontal: 10,
  },
   halfBtnOutlined2: {
    width:"33%",
    borderColor: "#E2AF42",
    borderWidth: 2,
   
     borderRadius: 25,
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
  flexDirection: "row",      
  alignItems: "center",      
  justifyContent: "center",  
  paddingVertical: 8,
},

  tabText: {
    fontSize: width * 0.04,
    color: "#fff",
    fontWeight: "500",
    fontFamily:fonts.otmedium
  },
   tabText1: {
    fontSize: width * 0.04,
    color: "#E2AF42",
    fontWeight: "200",
    paddingLeft:30,
    fontFamily:fonts.otregular
  },


  body: {
    padding: 12,
  },
 

  section: {
    marginTop: -5,  
    backgroundColor: "#fff",
   marginBottom: -10,         
  borderBottomLeftRadius: 28,
  borderBottomRightRadius: 28,
  padding: 13,
  zIndex: 2,  
    
  },
   outcomeIcon: {
  width: 18,        
  height: 18,
  marginRight: 8,   
  tintColor: "#0a5735", 
},

sectionHeaderRow: {
  flexDirection: "row",
  
  justifyContent: "space-between",
  marginBottom: 8,
  alignItems: "flex-start",
},
 
  sectionTitle: {
    fontWeight: "700",
    fontSize: width * 0.042,
    marginBottom: 8,
    color: colors.primaryBlack,
    fontFamily:fonts.otsemiBold,

  },
   sectionTitle2: {
    fontWeight: "700",
    fontSize: width * 0.042,
     marginTop: 9, 
    color: colors.primaryBlack,
    fontFamily:fonts.otsemiBold,

  },
  
 
  remaining: {
    fontSize: width * 0.035,
    color: colors.primaryGrey,
    fontFamily:fonts.otregular,
    marginTop: 9,
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
     borderRadius: 25,
  },
  halfBtnSolid: {
    flex: 1,
    backgroundColor: "#f1b600",
  },

  financialSection: {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
      backgroundColor: "#5f5c5c4d",
    padding: 19,
    borderBottomLeftRadius:28,
   borderBottomRightRadius:28,
    marginTop: -5,  
},

progressBg: {
  flex: 1,          
  height: 12,
  borderRadius: 7,
  backgroundColor: "#eee",
  marginLeft: 15, 
},

progressFill: {
  height: "100%",
   borderRadius: 7,
  backgroundColor: colors.pgfill,
},




raisedText: {
   fontSize: width * 0.042,
  fontFamily:fonts.otbold,
  fontWeight: "bold",
  color: "#333",
},

 });