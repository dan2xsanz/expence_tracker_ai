import { ResponseInterface, TransactionInterface } from "@/app/config";
import { REQUEST_URL } from "@/app/config/properties";
import axios, { AxiosError, AxiosResponse } from "axios";

export const CreateTransaction = (
  data: TransactionInterface
): Promise<ResponseInterface> => {
  return new Promise((resolve, reject) => {
    axios
      .post<ResponseInterface>(
        `${REQUEST_URL}/transaction/add-transaction`,
        data
      )
      .then(function (response: AxiosResponse<ResponseInterface>) {
        resolve(response.data);
      })
      .catch(function (error: AxiosError) {
        reject(error);
      });
  });
};
