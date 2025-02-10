import { Text, TouchableOpacity } from "react-native";
import React from "react";

interface TextInputProps {
  label: string;
  size: "large" | "medium" | "small" | "header1";
  style?: React.JSX.Element;
  onPress?: () => void;
}

export const ButtonField = ({
  size,
  label,
  style,
  onPress,
}: TextInputProps) => {
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
  }

  return (
    <TouchableOpacity
      style={{
        padding: 5,
        width: "100%",
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "black",
        alignItems: "center",
        ...style,
      }}
      onPress={onPress}
    >
      <Text style={{ fontSize: fontSize }}>{label}</Text>
    </TouchableOpacity>
  );
};
