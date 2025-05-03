import { Alert } from "react-native";
import {
  CreateAccountInterface,
  LoginResponseInterface,
  ResponseInterface,
} from "../config";
import {
  CreateAccount,
  UpdateAccount,
  UpdatePassword,
} from "../service/account/account";

export const createAccountOperation = async (
  data: CreateAccountInterface,
  setLoading: (data: boolean) => void,
  onSuccess: () => void
) => {
  try {
    setLoading(true);
    const response: ResponseInterface = await CreateAccount(data);
    // RETURN SUCCESS MESSAGE
    if (response.isSuccess && response.resultData) {
      Alert.alert("Success", "Account Created Successfully.");
      onSuccess();
    }
  } finally {
    setLoading(false);
  }
};

export const updateAccountOperation = async (
  data: CreateAccountInterface,
  setLoading: (data: boolean) => void,
  onSuccess: (data: LoginResponseInterface) => void
) => {
  try {
    setLoading(true);
    const response: ResponseInterface = await UpdateAccount(data);
    // RETURN SUCCESS MESSAGE
    if (response.isSuccess && response.resultData) {
      Alert.alert("Success", "Updated successfully.");
      onSuccess(response.resultData);
    }
  } finally {
    setLoading(false);
  }
};

export const updatePasswordOperation = async (
  data: CreateAccountInterface,
  setLoading: (data: boolean) => void,
  onSuccess: () => void
) => {
  try {
    setLoading(true);
    const response: ResponseInterface = await UpdatePassword(data);
    // RETURN SUCCESS MESSAGE
    if (response.isSuccess && response.resultData) {
      Alert.alert("Success", "Password Updated Successfully.");
      onSuccess();
    }
  } finally {
    setLoading(false);
  }
};
