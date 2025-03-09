import axios from "axios";

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
  function (response) {
    console.log("✅ Request Success:");
    return response;
  },
  function (error) {
    console.error("❌ Response Error:", error.response?.data);
    return Promise.reject(error);
  }
);
