import { View, Text, StyleSheet, Alert } from "react-native";
import Label from "../components/label/label";
import TextInputField from "../components/text-input/text-input";
import ButtonField from "../components/button/button";
import React, { useState } from "react";

export default function ForgotPasswordScreen() {

  return (
    <View style={styles.container}>
      <Label label={"Forgot Password"} size={"large"} />

      

      <TextInputField
       
        size={"medium"}
        placeHolder={"Email / Username"}
        style={{ width: "80%", fontSize: 20 }}
        
      />

      
      

      <ButtonField
        label="Send Code"
        size="medium"
        style={{ width: "80%" }}
     

      />
    </View>
  );


  
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fcf7f7",
    width: "100%",
    gap: 10,

  },
});