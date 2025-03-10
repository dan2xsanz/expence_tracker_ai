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
      Alert.alert("Error", "All fields are required!");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match!");
      return;
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
          <Image
            source={require("../../assets/bmoskatehi.png")}
            style={{ width: 120, height: 120, marginBottom: -10 }}
          />
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
