import { Alert } from "react-native";
import { ResponseInterface, SendOtpInterface } from "../config";
import { SendOtp, VerifyOtp } from "../service/otp/otp";

export const sendOtpOperation = async (
  data: SendOtpInterface,
  setLoading: (data: boolean) => void,
  setOpenOtpField: (data: boolean) => void
) => {
  try {
    setLoading(true);
    const response: ResponseInterface = await SendOtp(data.email);
    // RETURN SUCCESS MESSAGE
    if (response.isSuccess && response.resultData) {
      setOpenOtpField(true);
      Alert.alert("Success", "Otp sent to your email Successfully.");
    }
  } catch (error: any) {
    setOpenOtpField(false);
    Alert.alert("Error", "Oops, something went wrong.");
  } finally {
    setLoading(false);
  }
};

export const verifyOtpOperation = async (
  userName: string,
  data: string,
  setLoading: (data: boolean) => void,
  setOpenOtpField: (data: boolean) => void,
  setOpenNewPassword: (data: boolean) => void
) => {
  try {
    setLoading(true);
    const response: ResponseInterface = await VerifyOtp(userName, data);
    // RETURN SUCCESS MESSAGE
    if (response.isSuccess) {
      Alert.alert("Success", "Otp is verified successfully.");
      setOpenOtpField(false);
      setOpenNewPassword(true);
    }
  } catch (error: any) {
    Alert.alert("Error", "Oops, something went wrong.");
  } finally {
    setLoading(false);
  }
};
