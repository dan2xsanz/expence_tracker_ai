import { View, Text, StyleSheet, Alert } from "react-native";
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
  {
    /* variable declaration */
  }
  const [form, setForm] = useState<CreateAccountInterface>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  {
    /* changes in every input*/
  }
  const inputChange = (data: CreateAccountInterface) => {
    setForm({ ...form, ...data });
  };

  const checkSubmit = () => {
    const { name, email, password, confirmPassword } = form;

    console.log(form);
    
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
    <View style={styles.container}>
      <Label label={"Create Account"} size={"large"} />

      <TextInputField
        value={form.name}
        style={{ width: "80%", fontSize: 20 }}
        placeHolder={"Full Name"}
        size={"medium"}
        onChange={(text) => inputChange({ ...form, name: text })}
      />

      <TextInputField
        value={form.email}
        size={"medium"}
        placeHolder={"Email"}
        style={{ width: "80%", fontSize: 20 }}
        onChange={(text) => inputChange({ ...form, email: text })}
      />

      <TextInputField
        size={"medium"}
        placeHolder={"Password"}
        value={form.password}
        isSecureInput={true}
        style={{ width: "80%", fontSize: 20 }}
        onChange={(text) => inputChange({ ...form, password: text })}
      />

      <TextInputField
        size={"medium"}
        isSecureInput={true}
        value={form.confirmPassword}
        placeHolder={"Confirm Password"}
        style={{ width: "80%", fontSize: 20 }}
        onChange={(text) => inputChange({ ...form, confirmPassword: text })}
      />

      <ButtonField
        label="Sign Up"
        size="medium"
        style={{ width: "80%" }}
        onPress={checkSubmit}

      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    width: "100%",
    gap: 10,
  },
});
