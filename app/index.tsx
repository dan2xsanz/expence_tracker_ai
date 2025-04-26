import TextInputField from "./components/text-input/text-input";
import { View, StyleSheet, Image, TouchableOpacity, Alert } from "react-native";
import ButtonField from "./components/button/button";
import Label from "./components/label/label";
import { useFocusEffect, useRouter } from "expo-router";
import React, { useCallback, useState } from "react";
import { loginOperation } from "./operations/auth";
import { useLoadingScreen } from "./hooks/loading-screen-hooks";
import { loginDefault, LoginInterface } from "./config";
import { hashPassword } from "./utils";
import { useBmoStore } from "./store/bmo-store";
import { Loading } from "./components/loading/loading";

export default function LoginScreen() {
  // ROUTING
  const router = useRouter();

  // BMO STORE HANDLER
  const { setAccountDetail, resetBmoStore } = useBmoStore();

  // SCREEN LOADING HOOK
  const { loading, setLoading } = useLoadingScreen();

  // LOGGIN DETAILS INTERFACE
  const [loginDetails, setLoginDetails] =
    useState<LoginInterface>(loginDefault);

  const onClickLoginButton = () => {
    // VALIDATE REQUIRED FIELDS
    if (loginDetails.email === "" || loginDetails.password === "") {
      return Alert.alert("Error", "Please input value for required fields!");
    }

    loginOperation(
      { ...loginDetails, password: hashPassword(loginDetails.password) },
      setLoading,
      (data) => {
        router.push("/(tabs)/home");
        setAccountDetail(data);
      }
    );
  };

  // Auto Call Back the function once the tab has been rendered (RESER BIMO STORE)
  useFocusEffect(
    useCallback(() => {
      setLoginDetails(loginDefault);
      resetBmoStore();
    }, [])
  );

  return (
    <View style={styles.container}>
      <Loading loading={loading} />
      <View style={styles.login_fields_container}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Label label={"B"} size={"header1"} style={{ fontWeight: "bold" }} />
          <Image
            source={require("../assets/bimo.png")}
            style={{ width: 80, height: 80, marginLeft: -5 }}
          />
          <Label label={"MO"} size={"header1"} style={{ fontWeight: "bold" }} />
        </View>
        <TextInputField
          size={"medium"}
          placeHolder={"Username"}
          value={loginDetails?.email}
          onChange={(data) => setLoginDetails({ ...loginDetails, email: data })}
          style={{ fontSize: 20 }}
        />
        <TextInputField
          isSecureInput
          size={"medium"}
          placeHolder={"Password"}
          value={loginDetails?.password}
          onChange={(data) =>
            setLoginDetails({ ...loginDetails, password: data })
          }
          style={{ fontSize: 20 }}
        />
        <ButtonField
          label="Login"
          size="medium"
          onPress={() => onClickLoginButton()}
        />

        <View
          style={{
            width: "100%",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            onPress={() => router.push("/(createaccount)/createaccount")}
          >
            <Label
              label={"Create account"}
              size={"small"}
              style={{ fontWeight: "500" }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => router.push("/(forgotpassword)/forgotpassword")}
          >
            <Label
              label={"Forgot Password"}
              size={"small"}
              style={{ fontWeight: "500" }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Label
          label={"Powered by: "}
          size={"small"}
          style={{ fontStyle: "italic" }}
        />
        <Label
          label={"SNZ Inc."}
          size={"small"}
          style={{ fontStyle: "italic", fontWeight: "bold" }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    gap: 150,
    flex: 1,
  },
  login_fields_container: {
    flexDirection: "column",
    alignItems: "center",
    width: "80%",
    gap: 10,
  },
});
