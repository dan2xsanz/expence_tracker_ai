import { Alert } from "react-native";
import { CreateAccountInterface, ResponseInterface } from "../config";
import { CreateAccount, UpdatePassword } from "../service/account/account";

export const createAccountOperation = async (data: CreateAccountInterface) => {
  try {
    const response: ResponseInterface = await CreateAccount(data);
    // RETURN SUCCESS MESSAGE
    if (response.isSuccess && response.resultData) {
      Alert.alert("Success", "Account Created Successfully.");
    }
  } catch (error: any) {
    Alert.alert("Error", "Oops, something went wrong.");
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
  } catch (error: any) {
    Alert.alert("Error", "Oops, something went wrong.");
  } finally {
    setLoading(false);
  }
};
