import React from "react";
import { TextStyle, TextInput } from "react-native";

interface TextInputProps {
  placeHolder: string;
  size: "large" | "medium" | "small" | "header1";
  style?: React.JSX.Element;
  isSecureInput?: boolean;
}

export const TextInputField = ({
  isSecureInput,
  placeHolder,
  style,
  size,
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
    <TextInput
      style={{
        padding: 5,
        width: "100%",
        borderWidth: 1,
        borderRadius: 5,
        fontSize: fontSize,
        borderColor: "black",
        ...style,
      }}
      secureTextEntry={isSecureInput}
      placeholder={placeHolder}
      onChangeText={() => {}}
    />
  );
};
