import React, { forwardRef } from "react";
import {
  KeyboardTypeOptions,
  StyleProp,
  TextInput,
  TextInputProps as RNTextInputProps,
  TextStyle,
} from "react-native";

interface CustomTextInputProps {
  required?: boolean;
  placeHolder?: string;
  multiline?: boolean;
  readOnly?: boolean;
  maxLength?: number;
  isSecureInput?: boolean;
  style?: StyleProp<TextStyle>;
  value?: string;
  isFocused?: boolean;
  size?: "large" | "medium" | "small" | "header1";
  keyboardType?: KeyboardTypeOptions;
  onChange?: (data: string) => void;
}

const TextInputField = forwardRef<TextInput, CustomTextInputProps>(
  (
    {
      keyboardType,
      isSecureInput,
      placeHolder,
      multiline,
      onChange,
      maxLength,
      isFocused,
      required,
      readOnly,
      style,
      value,
      size,
    },
    ref
  ) => {
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

    const isFocusedStyle: StyleProp<TextStyle> = {
      borderStyle: "solid",
      borderBottomWidth: 3.5,
      borderColor: "#338f79ff",
      borderBottomColor: "#338f79ff",
    };

    return (
      <TextInput
        ref={ref}
        maxLength={maxLength}
        style={[
          {
            padding: 10,
            width: "100%",
            borderWidth: 1,
            borderRadius: 5,
            fontSize,
            borderColor: "black",
            ...(isFocused && isFocusedStyle),
          },
          style,
        ]}
        value={value}
        autoComplete="off"
        spellCheck={false}
        autoCorrect={false}
        editable={!readOnly}
        multiline={multiline}
        autoCapitalize="none"
        onChangeText={onChange}
        secureTextEntry={isSecureInput}
        placeholder={placeHolder ? `${placeHolder}${required ? " *" : ""}` : ""}
        keyboardType={isSecureInput ? "default" : keyboardType ?? "default"}
      />
    );
  }
);

export default TextInputField;
