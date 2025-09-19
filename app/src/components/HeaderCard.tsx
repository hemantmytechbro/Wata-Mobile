



import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { colors,fonts } from "../theme"; 
import {  Back2 ,Cross} from "../../assets/icons";

const { height, width } = Dimensions.get("window");

// Define props type
type HeaderCardProps = {
  title: string;
  subtitle?: string;
  onBackPress?: () => void;
  showBack?: boolean;
  isClose?: boolean;
};

const HeaderCard: React.FC<HeaderCardProps> = ({
  title,
  subtitle,
  onBackPress,
  showBack = true,
  isClose = false,
}) => {
  return (
    <View style={styles.headerCard}>



        {isClose && (
        <TouchableOpacity style={styles.closeBtn} onPress={onBackPress}>
          <Cross width={26} height={26} color="#fff" />
        </TouchableOpacity>
      )}
      <View style={styles.headerRow}>
        {/* Back Icon */}
        {showBack && (
  <TouchableOpacity onPress={onBackPress}>
    <Back2 width={26} height={26} />
  </TouchableOpacity>
)}

        {/* Title */}
       
         <Text
          style={[
            styles.headerTitle,
            !showBack && { marginLeft: 3 }, 
          ]}
        >
          {title}
        </Text>
      </View>

      {/* Subtitle */}
    
      {subtitle && (
  <Text
    style={[
      styles.headerSubtitle,
      { marginLeft: showBack ? 19 : 0 }, 
    ]}
  >
    {subtitle}
  </Text>
)}
    </View>
  );
};

export default HeaderCard;

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: -9,
  },
  headerTitle: {
    fontSize: width * 0.07,
    fontFamily:fonts.otbold,
    fontWeight: "700",
    color: "#FFF",
    marginLeft: 5,
    marginBottom: 4,
  },
  headerCard: {
    width: "100%",
    height: height * 0.26,
    backgroundColor: colors.primary,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: "flex-end",
    paddingHorizontal: "6%",
    paddingBottom: "21%",
    overflow: "hidden",
  },
  headerSubtitle: {
    fontFamily:fonts.otregular,
    fontSize: 14,
    color: "#EAEAEA",
    marginBottom: 6,
    marginLeft: 19,
  },
  closeBtn: {
    position: "absolute",
    top: 40,
    right: 20,
    zIndex: 3,
  },
});


   