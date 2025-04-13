import { Text, StyleProp, TextStyle } from "react-native";
import React from "react";

interface TextProps {
  label: string;
  size?: "header1" | "large" | "medium" | "small" | "note";
  style?: StyleProp<TextStyle>;
  onPress?: () => void;
}

const Label = ({ label, size, style, onPress }: TextProps) => {
  let fontSize = 12;

  switch (size) {
    case "header1":
      fontSize = 60;
      break;
    case "large":
      fontSize = 35;
      break;
    case "medium":
      fontSize = 25;
      break;
    case "small":
      fontSize = 15;
      break;
    case "note":
      fontSize = 12;
      break;
  }

  const baseStyle: TextStyle = {
    fontSize,
  };

  return (
    <Text style={[baseStyle, style]} onPress={onPress}>
      {label}
    </Text>
  );
};

export default Label;
