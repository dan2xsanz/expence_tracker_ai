import React from "react";
import { View, StyleSheet } from "react-native";
import Label from "../components/label/label";
import TextInputField from "../components/text-input/text-input";
import ButtonField from "../components/button/button";

export default function ForgotPasswordScreen() {
  return (
    <View style={forgot_password_styles.main_container}>
      <View style={forgot_password_styles.container}>
        <View style={forgot_password_styles.header_container}>
          <Label
            label={"Forgot Password"}
            size={"medium"}
            style={{ fontSize: 20 }}
          />
        </View>

        <View style={forgot_password_styles.fields_container}>
          <TextInputField size={"medium"} placeHolder={"Email / Username"} />
          <ButtonField label="Send Code" size="medium" />
        </View>
      </View>
    </View>
  );
}

const forgot_password_styles = StyleSheet.create({
  main_container: {
    height: "100%",
    paddingTop: 5,
    backgroundColor: "white",
    justifyContent: "space-between",
  },
  container: {
    paddingTop: 5,
    paddingLeft: 20,
    paddingRight: 20,
  },
  header_container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  fields_container: {
    alignItems: "center",
    gap: 10,
    marginTop: 280,
    padding: "5%",
  },
});
