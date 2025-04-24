import { sendOtpOperation } from "@/app/operations/otp";
import TextInputField from "../text-input/text-input";
import { View, StyleSheet } from "react-native";
import ButtonField from "../button/button";
import React, { useState } from "react";
import Label from "../label/label";

interface EmailFieldParams {
  setLoading: (data: boolean) => void;
  setUserName: (data: string) => void;
  setOpenOtpField: (data: boolean) => void;
  userName: string;
}

export const EmailField = ({
  userName,
  setLoading,
  setUserName,
  setOpenOtpField,
}: EmailFieldParams) => {
  return (
    <View style={email_field_styles.fields_container}>
      <Label
        style={{ fontSize: 20, fontWeight: "bold" }}
        label={"Send OTP to Your Email"}
      />
      <Label
        style={{ fontSize: 14, marginBottom: 10 }}
        label="BMO will send a One-Time Password (OTP) to your registered email. Make sure to enter the correct email you used during sign up."
      />
      <TextInputField
        size={"medium"}
        placeHolder={"Email"}
        style={{ marginBottom: 10 }}
        onChange={(data) => setUserName(data)}
      />
      <ButtonField
        label="Send OTP"
        size="medium"
        onPress={() =>
          sendOtpOperation({ email: userName }, setLoading, setOpenOtpField)
        }
      />
    </View>
  );
};

const email_field_styles = StyleSheet.create({
  fields_container: {
    marginTop: 250,
    padding: "5%",
  },
});
