import { TextInput } from "react-native";
import React from "react";

interface TextInputProps {
  placeHolder: string;
  size: "large" | "medium" | "small" | "header1";
  style?: React.JSX.Element;
  isSecureInput?: boolean;
}

const TextInputField = ({
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
      fontSize = 23;
      break;
    case "medium":
      fontSize = 18;
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

export default TextInputField;
