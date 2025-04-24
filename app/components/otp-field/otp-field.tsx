import React, { Fragment, useRef, useState } from "react";
import { TextInput, View, StyleSheet } from "react-native";
import Label from "../label/label";
import TextInputField from "../text-input/text-input";
import ButtonField from "../button/button";
import { verifyOtpOperation } from "@/app/operations/otp";

interface OtpFieldParams {
  userName: string;
  setLoading: (data: boolean) => void;
  setOpenOtpField: (data: boolean) => void;
  setOpenNewPassword: (data: boolean) => void;
}

export const OtpField = ({
  userName,
  setLoading,
  setOpenOtpField,
  setOpenNewPassword,
}: OtpFieldParams) => {
  // OTP REFERENECES
  const otp1Ref = useRef<TextInput>(null);
  const otp2Ref = useRef<TextInput>(null);
  const otp3Ref = useRef<TextInput>(null);
  const otp4Ref = useRef<TextInput>(null);
  const otp5Ref = useRef<TextInput>(null);
  const otp6Ref = useRef<TextInput>(null);

  interface OtpIputInterface {
    otp1: string;
    otp2: string;
    otp3: string;
    otp4: string;
    otp5: string;
    otp6: string;
  }

  const [otp, setOtp] = useState<OtpIputInterface>({
    otp1: "",
    otp2: "",
    otp3: "",
    otp4: "",
    otp5: "",
    otp6: "",
  });

  return (
    <View style={otp_field_styles.otp_fields_container}>
      <View style={{ alignSelf: "flex-start" }}>
        <Label
          style={{ fontSize: 20, fontWeight: "bold" }}
          label={"Check your email!"}
        />
        <Label
          style={{ fontSize: 16, textAlign: "justify" }}
          label={
            "BMO sent you a One-Time Password (OTP) to your registered email address. Please open your inbox and enter the code here to continue."
          }
        />
      </View>
      <View style={{ display: "flex", flexDirection: "row", gap: 5 }}>
        <TextInputField
          maxLength={1}
          ref={otp1Ref}
          size={"medium"}
          value={otp.otp1}
          keyboardType="numeric"
          style={otp_field_styles.otp_field_style}
          onChange={(data) => {
            if (data) {
              otp2Ref.current?.focus();
            }
            setOtp({ ...otp, otp1: data });
          }}
        />
        <TextInputField
          ref={otp2Ref}
          maxLength={1}
          size={"medium"}
          value={otp.otp2}
          keyboardType="numeric"
          style={otp_field_styles.otp_field_style}
          onChange={(data) => {
            if (data) {
              otp3Ref.current?.focus();
            } else {
              otp1Ref.current?.focus();
            }
            setOtp({ ...otp, otp2: data });
          }}
        />
        <TextInputField
          ref={otp3Ref}
          maxLength={1}
          size={"medium"}
          value={otp.otp3}
          keyboardType="numeric"
          style={otp_field_styles.otp_field_style}
          onChange={(data) => {
            if (data) {
              otp4Ref.current?.focus();
            } else {
              otp2Ref.current?.focus();
            }
            setOtp({ ...otp, otp3: data });
          }}
        />
        <TextInputField
          ref={otp4Ref}
          maxLength={1}
          size={"medium"}
          value={otp.otp4}
          keyboardType="numeric"
          style={otp_field_styles.otp_field_style}
          onChange={(data) => {
            if (data) {
              otp5Ref.current?.focus();
            } else {
              otp3Ref.current?.focus();
            }
            setOtp({ ...otp, otp4: data });
          }}
        />
        <TextInputField
          ref={otp5Ref}
          maxLength={1}
          size={"medium"}
          value={otp.otp5}
          keyboardType="numeric"
          style={otp_field_styles.otp_field_style}
          onChange={(data) => {
            if (data) {
              otp6Ref.current?.focus();
            } else {
              otp4Ref.current?.focus();
            }
            setOtp({ ...otp, otp5: data });
          }}
        />
        <TextInputField
          ref={otp6Ref}
          maxLength={1}
          size={"medium"}
          value={otp.otp6}
          keyboardType="numeric"
          style={otp_field_styles.otp_field_style}
          onChange={(data) => {
            if (!data) {
              otp5Ref.current?.focus();
            }
            setOtp({ ...otp, otp6: data });
          }}
        />
      </View>
      <Label
        size="note"
        style={{ fontStyle: "italic", alignSelf: "flex-start" }}
        label={"Didn’t receive the email? Check your spam or junk folder."}
      />
      {otp.otp1 && otp.otp2 && otp.otp3 && otp.otp4 && otp.otp5 && otp.otp6 && (
        <ButtonField
          label="Verify OTP"
          size="medium"
          onPress={() =>
            verifyOtpOperation(
              userName,
              `${
                otp.otp1 + otp.otp2 + otp.otp3 + otp.otp4 + otp.otp5 + otp.otp6
              }`,
              setLoading,
              setOpenOtpField,
              setOpenNewPassword
            )
          }
        />
      )}
    </View>
  );
};

const otp_field_styles = StyleSheet.create({
  otp_fields_container: {
    alignItems: "center",
    gap: 10,
    marginTop: 200,
    padding: "5%",
  },
  otp_field_style: {
    width: "15%",
    textAlign: "center",
    borderColor: "#41a892ff",
  },
});
