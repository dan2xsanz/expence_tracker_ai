import { Alert } from "react-native";
import {
  LoginInterface,
  LoginResponseInterface,
  ResponseInterface,
} from "../config";
import { Login } from "../service/auth/auth";

export const loginOperation = async (
  data: LoginInterface,
  setLoading: (data: boolean) => void,
  onSuccess: (data: LoginResponseInterface) => void
) => {
  try {
    setLoading(true);
    const response: ResponseInterface = await Login(data);
    // RETURN SUCCESS MESSAGE
    if (response.isSuccess && response.resultData) {
      Alert.alert("Success", "Welcome! You have successfully logged in.");
      onSuccess(response.resultData);
    }
  } finally {
    setLoading(false);
  }
};
