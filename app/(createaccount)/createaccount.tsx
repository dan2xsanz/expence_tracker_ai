import { View, Image, StyleSheet, Alert } from "react-native";
import Label from "../components/label/label";
import TextInputField from "../components/text-input/text-input";
import ButtonField from "../components/button/button";
import React, { useState } from "react";

interface CreateAccountInterface {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function CreateAccountScreen() {
  const [createAccount, setCreateAccount] = useState<CreateAccountInterface>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const inputChange = (data: CreateAccountInterface) => {
    setCreateAccount({ ...createAccount, ...data });
  };

  const checkSubmit = () => {
    const { name, email, password, confirmPassword } = createAccount;

    if (!name || !email || !password || !confirmPassword) {
      return Alert.alert("Error", "Please input value for required fields!");
    }

    if (password !== confirmPassword) {
      return Alert.alert("Error", "Passwords do not match!");
    }

    Alert.alert("Success", "Account Created Successfully!");
  };

  return (
    <View style={create_accounrt_styles.main_container}>
      <View style={create_accounrt_styles.container}>
        <View style={create_accounrt_styles.header_container}>
          <Label
            label={"Create Account"}
            size={"medium"}
            style={{ fontSize: 20 }}
          />
        </View>

        <View
          style={{
            alignItems: "center",
            gap: 10,
            marginTop: 100,
            padding: "5%",
          }}
        >
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Label
                size={"small"}
                label={"Yey! Thank you for choosing me BMO,"}
                style={{ fontWeight: "600" }}
              />
              <Label
                size={"small"}
                label={"Let's start creating your account."}
                style={{ fontWeight: "600" }}
              />
            </View>
            <Image
              source={require("../../assets/bmohi.png")}
              style={{ width: 100, height: 100, marginBottom: -5 }}
            />
          </View>
          <TextInputField
            required
            size={"medium"}
            placeHolder={"Full Name"}
            value={createAccount.name}
            onChange={(text) => inputChange({ ...createAccount, name: text })}
          />
          <TextInputField
            required
            size={"medium"}
            placeHolder={"Email"}
            value={createAccount.email}
            onChange={(text) => inputChange({ ...createAccount, email: text })}
          />
          <TextInputField
            required
            size={"medium"}
            placeHolder={"Password"}
            value={createAccount.password}
            isSecureInput={true}
            onChange={(text) =>
              inputChange({ ...createAccount, password: text })
            }
          />
          <TextInputField
            required
            size={"medium"}
            isSecureInput={true}
            placeHolder={"Confirm Password"}
            value={createAccount.confirmPassword}
            onChange={(text) =>
              inputChange({ ...createAccount, confirmPassword: text })
            }
          />
          <ButtonField label="Sign Up" size={"medium"} onPress={checkSubmit} />
        </View>
      </View>
    </View>
  );
}

const create_accounrt_styles = StyleSheet.create({
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
});
