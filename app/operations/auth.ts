import { Alert } from "react-native";
import { LoginInterface, ResponseInterface } from "../config";
import { Login } from "../service/auth/auth";

export const loginOperation = async (
  data: LoginInterface,
  setLoading: (data: boolean) => void,
  onSuccess: () => void
) => {
  try {
    setLoading(true);
    const response: ResponseInterface = await Login(data);
    // RETURN SUCCESS MESSAGE
    if (response.isSuccess && response.resultData) {
      Alert.alert("Success", "Welcome! You have successfully logged in.");
      onSuccess();
    }
  } finally {
    setLoading(false);
  }
};
