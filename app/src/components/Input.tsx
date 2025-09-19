




import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TextInputProps,
  Animated,
} from "react-native";
import { colors,fonts } from "../theme";

interface InputProps extends TextInputProps {
  // label?: string;
  label?: string | React.ReactNode;
  leftElement?: React.ReactNode;
  rightElement?: React.ReactNode;
  rightElement2?: React.ReactNode;
}

const Input: React.FC<InputProps> = ({
  label,
  leftElement,
  rightElement,
   rightElement2,
  value,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [animatedValue] = useState(new Animated.Value(value ? 1 : 0));

  const handleFocus = () => {
    setIsFocused(true);
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 150,
      useNativeDriver: false,
    }).start();
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (!value) {
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: 150,
        useNativeDriver: false,
      }).start();
    }
  };

  const labelStyle = {
    position: "absolute" as const,
    left: leftElement ? 40 : 15,
    top: animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [18, 6], 
    }),
    fontSize: animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 12], 
    }),
    color: isFocused ? "#8C8C8C" : "#8C8C8C",
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        {leftElement && <View style={styles.iconLeft}>{leftElement}</View>}

        {label && <Animated.Text style={labelStyle}>{label}</Animated.Text>}

        <TextInput
          style={[
            styles.input,
            leftElement ? { paddingLeft: 40 } : {},
            rightElement ? { paddingRight: 40 } : {},
          ]}
          value={value}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        />

        {rightElement && <View style={styles.iconRight}>{rightElement}</View>}
            {rightElement2 && <View style={styles.iconRight2}>{rightElement2}</View>}
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: "3%",
  },
  inputWrapper: {
    position: "relative",
    width: "100%",
    height: 60,
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: 8,
    justifyContent: "center",
    backgroundColor: "#FFF",
    paddingTop: 8,
  },
  input: {
    height: "100%",
    fontSize: 16,
    paddingHorizontal: 15,
    color: "#2D343C",
  },
  iconLeft: {
    position: "absolute",
    left: 12,
    zIndex: 1,
  },
  iconRight: {
    position: "absolute",
    right: 12,
    zIndex: 1,
    
  },
   iconRight2: {
    position: "absolute",
    right: 5,
    zIndex: 1,
    
    bottom: 6, 
  },


});

export default Input;
