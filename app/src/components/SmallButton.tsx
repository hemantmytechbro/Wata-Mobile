
import React from "react";
import { TouchableOpacity, View, Text, StyleProp, ViewStyle, TextStyle } from "react-native";
import { TickIcon, TickIconfill } from "../../assets/icons";

type Props = {
  title: string;
  subtitle?: string;
  leftElement?: React.ReactNode;
  selected?: boolean;
  splitTitle?: string[];
  onPress: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  subtitleStyle?: StyleProp<TextStyle>;
};

const SmallButton: React.FC<Props> = ({
  title,
  subtitle,
  leftElement,
  selected,
  splitTitle,
  onPress,
  containerStyle,
  titleStyle,
  subtitleStyle,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      style={[
        {
          width: "48%", // 2 cards in a row
          aspectRatio: 1.7, // keeps height proportional
          padding: "5%",
          borderRadius: 12,
          marginBottom: "4%",
          backgroundColor: selected ? "#E9B44C" : "#fff",
          borderWidth: 1,
          borderColor: selected ? "#E9B44C" : "#E0E0E0",
          justifyContent: "center",
          position: "relative",
        },
        containerStyle,
      ]}
    >
      {/* Left Icon */}
      {leftElement && (
        <View style={{ position: "absolute", top: "8%", left: "6%" }}>{leftElement}</View>
      )}

      {/* Tick Icon */}
      <View
        style={{
          position: "absolute",
          top: "8%",
          right: "6%",
          width: "18%",
          aspectRatio: 1,
          borderRadius: 8,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {selected ? (
          <TickIconfill width="70%" height="70%" />
        ) : (
          <TickIcon width="70%" height="70%" />
        )}
      </View>

      {/* Title & Subtitle */}
      <View style={{ flexDirection: "column", alignItems: "flex-start" }}>
        <Text
          style={[
            {
              fontSize: splitTitle ? 20 : 18,
              fontWeight: "600",
              color: selected ? "#fff" : "#2D343C",
              marginTop: "12%",
            },
            titleStyle,
          ]}
        >
          {splitTitle ? (
            <>
              <Text style={{ fontWeight: "100", fontSize: 14 }}>{splitTitle[0]}</Text>
              <Text style={{ fontWeight: "700", fontSize: 20 }}>{splitTitle[1]}</Text>
            </>
          ) : (
            title
          )}
        </Text>
        {subtitle && (
          <Text
            style={[
              {
                fontSize: 12,
                color: selected ? "#fff" : "#6B7280",
                marginTop: "2%",
              },
              subtitleStyle,
            ]}
          >
            {subtitle}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default SmallButton;


