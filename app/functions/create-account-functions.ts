import { Alert } from "react-native";
import { CreateAccountInterface } from "../config";

export const validateRequiredFields = (
  createAccount: CreateAccountInterface
) => {
  const { firstName, lastName, email, password, confirmPassword } =
    createAccount;

  if (!firstName || !lastName || !email || !password || !confirmPassword) {
    Alert.alert("Error", "Please input value for required fields!");
    return false;
  }

  if (password !== confirmPassword) {
    Alert.alert("Error", "Passwords do not match!");
    return false;
  }

  return true;
};

export const validateRequiredPassFields = (
  createAccount: CreateAccountInterface
) => {
  const { password, confirmPassword } = createAccount;

  if (!password || !confirmPassword) {
    Alert.alert("Error", "Please input value for required fields!");
    return false;
  }

  if (password !== confirmPassword) {
    Alert.alert("Error", "Passwords do not match!");
    return false;
  }

  return true;
};
