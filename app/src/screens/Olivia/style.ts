


import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../../theme";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },


  
  // HEADER
  
  header: {
  width: "100%",
  height: "28%",
  backgroundColor: colors.primary,
  borderBottomLeftRadius: 24,
  borderBottomRightRadius: 24,
  paddingHorizontal: "5%",
  paddingTop: "11%",  
  justifyContent: "flex-start", 
},

  headerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    
  },
  headingWrap: {
    flex: 1,
    paddingRight: "5%",
     

  },
  headerTitle: {
    fontSize: SCREEN_WIDTH * 0.06, // responsive
    fontWeight: "700",
    color: "#fff",
    
  },
  headerSubtitle: {
    fontSize: SCREEN_WIDTH * 0.04,
    marginTop: "2%",
    color: "#fff",
     paddingVertical: "2%",
  },
  stepBox: {
    backgroundColor: "rgba(255,255,255,0.25)",
    paddingVertical: "2%",
    paddingHorizontal: "4%",
    borderRadius: 12,
    alignSelf: "flex-start",
  },
  stepText: {
    fontSize: SCREEN_WIDTH * 0.035,
    color: "#fff",
  },

  // CARD WRAPPER
  cardWrapper: {
     flex: 1,
     marginTop: "-26%",
    marginHorizontal: "5%",
    borderRadius: 20,
    overflow: "hidden",
  },
  

  progressBarBg: {
    height: 6,
    backgroundColor: "#F0F0F0",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: "hidden",
  },
  progressBarFill: {
    height: "100%",
    backgroundColor: "#89FC30",
  },

  // CARD
  card: {
    backgroundColor: colors.white,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingVertical: "4%",
    paddingHorizontal: "5%",
     shadowOpacity: 0.1,
    shadowRadius: 9,
    elevation: 9,

  },

  // DIVIDER
  divider: {
    height: 1,
    backgroundColor: "#E0E0E0",
    marginVertical: "3%",
  },

  // BUTTON GRID
  ageGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: "4%",
  },

  // Section title
  sectionTitle: {
    fontSize: SCREEN_WIDTH * 0.045,
    color: "#2D343C",
    fontWeight: "600",
  },

  // Next button
  nextBtn: {
    marginTop: "8%",
    alignSelf: "center",
    width: "75%",
    paddingVertical: "4%",
    borderRadius: 24,
  },
});


