import {
  KeyboardTypeOptions,
  StyleProp,
  TextInput,
  TextStyle,
} from "react-native";
import React from "react";

interface TextInputProps {
  required?: boolean;
  placeHolder: string;
  multiline?: boolean;
  readOnly?: boolean;
  isSecureInput?: boolean;
  style?: StyleProp<TextStyle>;
  size?: "large" | "medium" | "small" | "header1";
  keyboardType?: KeyboardTypeOptions | undefined;
}

const TextInputField = ({
  keyboardType,
  isSecureInput,
  placeHolder,
  multiline,
  required,
  readOnly,
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
      style={[
        {
          padding: 10,
          width: "100%",
          borderWidth: 1,
          borderRadius: 5,
          fontSize: fontSize,
          borderColor: "black",
        },
        style,
      ]}
      editable={!readOnly}
      multiline={multiline}
      onChangeText={() => {}}
      secureTextEntry={isSecureInput}
      placeholder={`${placeHolder} ${required ? "*" : ""}`}
      keyboardType={isSecureInput ? "default" : keyboardType ?? "default"}
    />
  );
};

export default TextInputField;
