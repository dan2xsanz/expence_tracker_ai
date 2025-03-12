import TextInputField from "./components/text-input/text-input";
import { View, StyleSheet, Image } from "react-native";
import ButtonField from "./components/button/button";
import Label from "./components/label/label";
import { useRouter } from "expo-router";
import React from "react";

export default function LoginScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
          width: "80%",
          gap: 10,
        }}
      >
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
          style={{ fontSize: 20 }}
        />
        <TextInputField
          isSecureInput
          size={"medium"}
          placeHolder={"Password"}
          style={{ fontSize: 20 }}
        />
        <ButtonField
          label="Login"
          size="medium"
          onPress={() => router.push("/(tabs)/home")}
        />

        <View
          style={{
            width: "100%",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <Label
            label={"Create account"}
            size={"small"}
            onPress={() => router.push("/(auth)/create")}
            style={{ fontWeight: "500" }}
          />
          <Label
            label={"Forgot Password"}
            size={"small"}
            onPress={() => router.push("/(forgotpassword)/forgot")}
            style={{ fontWeight: "500" }}
          />
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
});
