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
  value?: string | undefined;
  size?: "large" | "medium" | "small" | "header1";
  keyboardType?: KeyboardTypeOptions | undefined;
  onChange?: (data: any) => void;
}

const TextInputField = ({
  keyboardType,
  isSecureInput,
  placeHolder,
  multiline,
  onChange,
  required,
  readOnly,
  style,
  value,
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
      value={value}
      editable={!readOnly}
      multiline={multiline}
      onChangeText={onChange}
      secureTextEntry={isSecureInput}
      placeholder={`${placeHolder} ${required ? "*" : ""}`}
      keyboardType={isSecureInput ? "default" : keyboardType ?? "default"}
    />
  );
};

export default TextInputField;
