import { View, StyleSheet, Button } from "react-native";
import { useRouter } from "expo-router";
import { ButtonField, Label, TextInputField } from "./components";
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
        <Label
          label={"BEEMO"}
          size={"header1"}
          style={{ fontWeight: "bold" }}
        />
        <TextInputField
          placeHolder={"Username"}
          size={"small"}
          style={undefined}
        />
        <TextInputField
          isSecureInput
          placeHolder={"Password"}
          size={"small"}
          style={undefined}
        />

        <ButtonField
          label={"Login"}
          size={"small"}
          onPress={() => router.push("/home")}
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
            onPress={() => console.log("I want to create an accont")}
            style={{ fontWeight: "500" }}
          />
          <Label
            label={"Forgot Password"}
            size={"small"}
            onPress={() => console.log("I forgot my password")}
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
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    gap: 150,
    flex: 1,
  },
});
