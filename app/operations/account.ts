import { Alert } from "react-native";
import { CreateAccountInterface, ResponseInterface } from "../config";
import { CreateAccount } from "../service/account/account";

interface CreateAccountParam {
  data: CreateAccountInterface;
}
export const createAccountOperation = async ({ data }: CreateAccountParam) => {
  try {
    const response: ResponseInterface = await CreateAccount(data);
    // RETURN SUCCESS MESSAGE
    if (response.isSuccess && response.resultData) {
    }
  } catch (error: any) {
    Alert.alert("Error", "Oops, something went wrong.");
  } finally {
    Alert.alert("Success", "Account Created Successfully.");
  }
};
