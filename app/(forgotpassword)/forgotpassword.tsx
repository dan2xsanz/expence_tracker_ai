import { NewPassword } from "../components/new-password/new-password";
import { EmailField } from "../components/email-field/email-field";
import { useLoadingScreen } from "../hooks/loading-screen-hooks";
import { OtpField } from "../components/otp-field/otp-field";
import { Loading } from "../components/loading/loading";
import { View, StyleSheet } from "react-native";
import Label from "../components/label/label";
import React, { useState } from "react";

export default function ForgotPasswordScreen() {
  // SCREEN LOADING HOOK
  const { loading, setLoading } = useLoadingScreen();

  // OTP FIELD DISPOLAY TRIGGER
  const [openOtpField, setOpenOtpField] = useState<boolean>(false);

  // OPENM NEW PASSWORD DISPLAY TRIGGER
  const [openNewPassword, setOpenNewPassword] = useState<boolean>(false);

  // USER NAME STATE
  const [userName, setUserName] = useState<string>("");

  return (
    <View style={forgot_password_styles.main_container}>
      <Loading loading={loading} />
      <View style={forgot_password_styles.container}>
        <View style={forgot_password_styles.header_container}>
          <Label
            label={"Forgot Password"}
            size={"medium"}
            style={{ fontSize: 20 }}
          />
        </View>
        {/* EMAIL FIELDS DISPLAY */}
        {!openOtpField && !openNewPassword && (
          <EmailField
            userName={userName}
            setLoading={setLoading}
            setUserName={setUserName}
            setOpenOtpField={setOpenOtpField}
          />
        )}
        {/* OTP FIELD DISPLAY */}
        {openOtpField && (
          <OtpField
            userName={userName}
            setLoading={setLoading}
            setOpenOtpField={setOpenOtpField}
            setOpenNewPassword={setOpenNewPassword}
          />
        )}
        {/* OTP SETUP NEW PASSWORD DISPLAY */}
        {openNewPassword && (
          <NewPassword userName={userName} setLoading={setLoading} />
        )}
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
    marginTop: 250,
    padding: "5%",
  },
});
