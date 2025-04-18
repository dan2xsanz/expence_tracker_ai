import { Alert } from "react-native";
import { CreateAccountInterface } from "../config";

export const validateRequiredFields = (
  createAccount: CreateAccountInterface
) => {
  const { firstName, lastName, email, password, confirmPassword } =
    createAccount;

  if (!firstName || !lastName || !email || !password || !confirmPassword) {
    return Alert.alert("Error", "Please input value for required fields!");
  }

  if (password !== confirmPassword) {
    return Alert.alert("Error", "Passwords do not match!");
  }
};
