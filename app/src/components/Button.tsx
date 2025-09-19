



import React from "react";
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from "react-native";
import { colors, fonts } from "../theme";

interface ButtonProps {
  title: string;
  onPress: () => void;
  type?: "outlined" | "solid";
  style?: ViewStyle;
  
}

const Button: React.FC<ButtonProps> = ({ title, onPress, type = "solid", style }) => {
  return (
    <TouchableOpacity
      style={[
        styles.base,
        type === "outlined" ? styles.outlined : styles.solid,
        style,
        
      ]}
      onPress={onPress}
    >
      <Text style={[styles.text, type === "outlined" && styles.outlinedText]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    width: "100%",
    height: 50,
   
    justifyContent: "center",
    alignItems: "center",
    marginVertical: "3%",
  },
  solid: {
    backgroundColor: colors.secondary,
    borderRadius: 25, 
  },
  outlined: {
    borderWidth: 1,
    borderColor: colors.secondary,
    backgroundColor: "transparent",
   
  },
  text: {
    fontFamily:fonts.otsemiBold,
    fontSize: 16,
    fontWeight: "700",
    color: "#FFF",
  },
  outlinedText: {
     fontFamily:fonts.otmedium,
    color: colors.secondary,
    fontWeight:"700",
     
  },
});

export default Button;
