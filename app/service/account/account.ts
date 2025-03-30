import { CreateAccountInterface, ResponseInterface } from "@/app/config";
import { REQUEST_URL } from "@/app/config/properties";
import axios, { AxiosError, AxiosResponse } from "axios";

export const CreateAccount = (
  data: CreateAccountInterface
): Promise<ResponseInterface> => {
  return new Promise((resolve, reject) => {
    axios
      .post<ResponseInterface>(`${REQUEST_URL}/account/add-account`, data)
      .then(function (response: AxiosResponse<ResponseInterface>) {
        resolve(response.data);
      })
      .catch(function (error: AxiosError) {
        reject(error);
      });
  });
};
