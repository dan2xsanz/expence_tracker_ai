import axios from "axios";
import { Alert } from "react-native";

let isErrorAlertShown = false; // outside the interceptor

// REQUEST INTERCEPTOR
axios.interceptors.request.use(
  function (request) {
    return request;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// RESPONSE INTERCEPTOR
axios.interceptors.response.use(
  (response) => {
    console.log("✅ Response Success: ", response.config.url);
    return response;
  },
  (error) => {
    console.error("❌ Response Error:", error.response?.data);
    if (!isErrorAlertShown) {
      isErrorAlertShown = true;

      Alert.alert(
        "❌Error",
        `${error.response?.data?.message} ` || "Something went wrong.",
        [
          {
            text: "OK",
            onPress: () => {
              isErrorAlertShown = false;
            },
          },
        ]
      );
    }
    return Promise.reject(error);
  }
);
