import { accountDefault, CreateAccountInterface } from "@/app/config";
import { validateRequiredPassFields } from "@/app/functions";
import { updatePasswordOperation } from "@/app/operations";
import TextInputField from "../text-input/text-input";
import { View, StyleSheet } from "react-native";
import ButtonField from "../button/button";
import { hashPassword } from "@/app/utils";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import Label from "../label/label";

interface NewPasswordParam {
  userName: string;
  setLoading: (data: boolean) => void;
}

export const NewPassword = ({ userName, setLoading }: NewPasswordParam) => {
  // ROUTER
  const router = useRouter();

  const [updatePassword, setUpdatePassword] = useState<CreateAccountInterface>({
    ...accountDefault,
    email: userName,
  });

  // ON CHANGE INPUT FIELDS
  const inputChange = (data: CreateAccountInterface) => {
    setUpdatePassword({ ...updatePassword, ...data });
  };

  // ON CLICK UPDATEVPASSWORD BUTTON
  const onClickUpdatePassword = () => {
    // VALIDATE REQUIRED FIELDS
    if (validateRequiredPassFields(updatePassword)) {
      updatePasswordOperation(
        {
          ...updatePassword,
          password: hashPassword(updatePassword.password),
          confirmPassword: hashPassword(updatePassword.password),
        },
        setLoading,
        () => router.push("/")
      );
    }
  };
  return (
    <View style={new_pass_styles.fields_container}>
      <Label
        style={{ fontSize: 20, fontWeight: "bold" }}
        label={"Create a New Password"}
      />
      <Label
        style={{ fontSize: 14 }}
        label={`${`This will be your new password for this email below`}`}
      />
      <Label style={new_pass_styles.fiels_user_name} label={userName} />
      <TextInputField
        size={"medium"}
        isSecureInput={true}
        placeHolder={"New Password"}
        style={{ marginBottom: 10 }}
        onChange={(text) => inputChange({ ...updatePassword, password: text })}
      />
      <TextInputField
        size={"medium"}
        isSecureInput={true}
        style={{ marginBottom: 10 }}
        placeHolder={"Confirm Password"}
        onChange={(text) =>
          inputChange({ ...updatePassword, confirmPassword: text })
        }
      />
      <ButtonField
        size="medium"
        label="Set New Password"
        onPress={onClickUpdatePassword}
      />
    </View>
  );
};

const new_pass_styles = StyleSheet.create({
  fields_container: {
    marginTop: 230,
    padding: "5%",
  },
  fiels_user_name: {
    fontSize: 14,
    marginBottom: 10,
    fontWeight: 700,
    fontStyle: "italic",
  },
});
