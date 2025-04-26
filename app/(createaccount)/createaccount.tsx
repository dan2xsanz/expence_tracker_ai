import { accountDefault, CreateAccountInterface } from "../config";
import { useLoadingScreen } from "../hooks/loading-screen-hooks";
import TextInputField from "../components/text-input/text-input";
import { Loading } from "../components/loading/loading";
import { createAccountOperation } from "../operations";
import { validateRequiredFields } from "../functions";
import ButtonField from "../components/button/button";
import { View, Image, StyleSheet } from "react-native";
import Label from "../components/label/label";
import React, { useState } from "react";
import { hashPassword } from "../utils";
import { useRouter } from "expo-router";

export default function CreateAccountScreen() {
  // ROUTING
  const router = useRouter();

  // SCREEN LOADING HOOK
  const { loading, setLoading } = useLoadingScreen();

  // CREATE ACCOUNT INTERFACE
  const [createAccount, setCreateAccount] =
    useState<CreateAccountInterface>(accountDefault);

  // ON CHANGE INPUT FIELDS
  const inputChange = (data: CreateAccountInterface) => {
    setCreateAccount({ ...createAccount, ...data });
  };

  const onClickCreateNewAccount = () => {
    // VALIDATE REQUIRED FIELDS
    if (validateRequiredFields(createAccount)) {
      createAccountOperation(
        {
          ...createAccount,
          password: hashPassword(createAccount.password),
          confirmPassword: hashPassword(createAccount.password),
        },
        setLoading,
        () => {
          router.push("/");
          setCreateAccount(accountDefault);
        }
      );
    }
  };

  return (
    <View style={create_account_styles.main_container}>
      <Loading loading={loading} />
      <View style={create_account_styles.container}>
        <View style={create_account_styles.header_container}>
          <Label
            label={"Create Account"}
            size={"medium"}
            style={{ fontSize: 20 }}
          />
        </View>
        <View style={create_account_styles.fields_container}>
          <View style={create_account_styles.greetings_bmo_container}>
            <View style={create_account_styles.greetings_container}>
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
            placeHolder={"First Name"}
            value={createAccount.firstName}
            onChange={(text) =>
              inputChange({ ...createAccount, firstName: text })
            }
          />
          <TextInputField
            required
            size={"medium"}
            placeHolder={"Last Name"}
            value={createAccount.lastName}
            onChange={(text) =>
              inputChange({ ...createAccount, lastName: text })
            }
          />
          <TextInputField
            required
            size={"medium"}
            placeHolder={"Email"}
            value={createAccount.email}
            keyboardType={"email-address"}
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
          <ButtonField
            label="Sign Up"
            size={"medium"}
            onPress={onClickCreateNewAccount}
          />
        </View>
      </View>
    </View>
  );
}

const create_account_styles = StyleSheet.create({
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
    alignItems: "center",
    gap: 10,
    marginTop: 130,
    padding: "5%",
  },
  greetings_bmo_container: {
    alignItems: "center",
    flexDirection: "row",
  },
  greetings_container: {
    flexDirection: "column",
    alignItems: "center",
  },
});
